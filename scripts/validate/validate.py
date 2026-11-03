#!/usr/bin/env python3
"""Check the token and component exports before they land (EXPORT-STANDARD.md section 10).

Run from the repo top:   python3 scripts/validate/validate.py          (or: npm run validate)
                          python3 scripts/validate/validate.py --raw    (also list every raw component value)

Exits non-zero with one line per problem. Runs in GitHub on every push and pull request
(.github/workflows/validate.yml), after the workflow has rebuilt tokens/ and dist/ and checked they match the commit.
Standard library only, like the other scripts.

Checks:
  1. Every tokens/**/*.tokens.json and components/**/*.tokens.json file parses, and every token has $value and a
     $type (on the token or a parent group).
  2. Every {a.b.c} reference resolves within the file's own layer and the layers above it (EXPORT-STANDARD section 5):
       core                          -> core
       themes, theme site overrides  -> core + the file's resolver contexts (theme -> sub-theme -> site)
       sites (resolved per domain)   -> core + the file
       wordpress, type-theme         -> core + wordpress + one theme context
       components/core               -> core + each base theme (Bold Coastal, Modern Earthy, Measured Vibrant)
       components/wordpress          -> core + wordpress + each base theme
     A reference that only resolves in a lower layer (e.g. core -> wordpress) is reported as a layer error.
  3. Every color's components, alpha, rgba and hex8 agree with its hex.
  4. Every dimension is {value, unit} with a px or rem unit (em only for typography letterSpacing, as
     EXPORT-STANDARD 3.3 says) or a reference.
  5. No .DS_Store, __pycache__, .pyc, .zip or copy-suffixed file ("file (1).md", "-copy.", "-final.") is tracked.
  6. The Figma snapshot scripts/build-tokens/figma-variables.json comes from one full read of the main file: the
     right file key, a read date, every collection make-tokens.py uses, the shadow/* effect styles, and (when the
     snapshot has them) per-collection counts that match.

Reported, never a failure (Karl, 2026-10-27): raw (non-reference) values in component token files. Component token
names and values stay as they are.
"""
import glob, json, os, re, subprocess, sys

sys.dont_write_bytecode = True  # importing save-snapshot.py must not leave __pycache__ in the repo

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
os.chdir(ROOT)

FIGMA_FILE = 'jFHYqhZbJjvWQmDI4myCsd'
SNAPSHOT = 'scripts/build-tokens/figma-variables.json'
SNAPSHOT_COLLECTIONS = ['Colors', 'Type Primitives', 'Typeography Tokens', 'Typography Theme', 'Spacing & Radius']
SNAPSHOT_SHADOWS = ['shadow/sm', 'shadow/md', 'shadow/lg']
LEGACY = set()  # was the 2026-10-01 color export, retired 2026-11-03 (now scripts/build-tokens/publications.json, not a token file)
BASE_THEMES = ['bold-coastal', 'modern-earthy', 'measured-vibrant']
RESOLVER = 'tokens/themes/mng.resolver.json'

problems = []
raw_values = []


def fail(path, msg):
    problems.append('%s: %s' % (path, msg))


def load(path):
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:  # noqa: BLE001
        fail(path, 'does not parse: %s' % e)
        return None


# ---------- 1. parse, $value, $type ----------
token_files = sorted(set(glob.glob('tokens/**/*.tokens.json', recursive=True) +
                         glob.glob('components/**/*.tokens.json', recursive=True)) - LEGACY)
docs = {}
tokens = {}  # file -> {dotted.path: (type, value)}


def walk(path, node, trail, inherited):
    if not isinstance(node, dict):
        fail(path, '%s is not a group or token' % '.'.join(trail))
        return
    t = node.get('$type', inherited)
    if '$value' in node:
        name = '.'.join(trail)
        if not t:
            fail(path, '%s has no $type (on the token or a parent group)' % name)
        tokens[path][name] = (t, node['$value'], node.get('$extensions', {}).get('com.mng', {}))
        return
    for k, child in node.items():
        if k.startswith('$'):
            continue
        walk(path, child, trail + [k], t)


for p in token_files:
    d = load(p)
    if d is None:
        continue
    docs[p] = d
    tokens[p] = {}
    walk(p, d, [], None)
    off_theme = 'theme' in d.get('$extensions', {}).get('com.mng', {}) and d['$extensions']['com.mng']['theme'] is None
    if not tokens[p] and not off_theme:  # a site not on the MNG themes (e.g. sonomamag.com) has no tokens on purpose
        fail(p, 'has no tokens')

# ---------- 2. references and layers ----------
REF = re.compile(r'^\{([^{}]+)\}$')


def refs_in(v):
    if isinstance(v, str):
        m = REF.match(v)
        return [m.group(1)] if m else []
    if isinstance(v, dict):
        return [r for x in v.values() for r in refs_in(x)]
    if isinstance(v, list):
        return [r for x in v for r in refs_in(x)]
    return []


def names(files):
    s = set()
    for f in files:
        s |= set(tokens.get(f, {}))
    return s


core_files = [f for f in token_files if f.startswith('tokens/core/')]
wp_files = [f for f in token_files if f.startswith('tokens/wordpress/') and '/type-theme/' not in f]
resolver = load(RESOLVER) or {}
contexts = {}
for key, refs in (resolver.get('modifiers', {}).get('brand', {}).get('contexts', {}) or {}).items():
    contexts[key] = [os.path.normpath(os.path.join(os.path.dirname(RESOLVER), r['$ref'])) for r in refs]
for t in BASE_THEMES:
    if t not in contexts:
        fail(RESOLVER, 'no brand context for base theme %s' % t)
for key, files in contexts.items():
    for f in files:
        if f not in tokens and f not in LEGACY:
            fail(RESOLVER, 'context %s points at %s, which is missing' % (key, f))

CORE = names(core_files)
WP = names(wp_files)
ALL = names(token_files)


def scopes_for(p):
    """Every scope the file must resolve in (a list of name sets)."""
    if p.startswith('tokens/core/'):
        return [CORE]
    if p.startswith('tokens/sites/'):
        return [CORE | names([p])]
    if p.startswith('tokens/themes/'):
        ctx = [files for files in contexts.values() if p in files]
        return [CORE | names(files) for files in ctx] or [CORE | names([p])]
    if p.startswith('tokens/wordpress/'):
        return [CORE | WP | names(contexts.get('bold-coastal', []))]
    if p.startswith('components/core/'):
        return [CORE | names(contexts.get(t, [])) for t in BASE_THEMES]
    if p.startswith('components/wordpress/'):
        return [CORE | WP | names(contexts.get(t, [])) for t in BASE_THEMES]
    return [ALL]


for p in token_files:
    if p not in tokens:
        continue
    scopes = scopes_for(p)
    for name, (t, v, _) in tokens[p].items():
        for r in sorted(set(refs_in(v))):
            missing = [i for i, s in enumerate(scopes) if r not in s]
            if not missing:
                continue
            if r in ALL:
                fail(p, '%s references {%s}, which is only in a lower layer or another theme' % (name, r))
            else:
                fail(p, '%s references {%s}, which does not exist' % (name, r))

# ---------- 3. colors ----------
HEX6 = re.compile(r'^#[0-9a-f]{6}$')


def num(x, nd=4):
    x = round(float(x), nd)
    return int(x) if x == int(x) else x


def check_color(p, name, v, ext):
    if not isinstance(v, dict):
        fail(p, '%s: color is neither a reference nor a color object' % name)
        return
    h = v.get('hex', '')
    if not HEX6.match(h):
        fail(p, '%s: hex %r is not 6-digit lowercase' % (name, h))
        return
    if v.get('colorSpace') != 'srgb':
        fail(p, '%s: colorSpace is %r, expected srgb' % (name, v.get('colorSpace')))
    rgb = [int(h[i:i + 2], 16) for i in (1, 3, 5)]
    if v.get('components') != [num(c / 255) for c in rgb]:
        fail(p, '%s: components %s do not match hex %s' % (name, v.get('components'), h))
    a = v.get('alpha', 1)
    if not isinstance(a, (int, float)) or not 0 <= a <= 1:
        fail(p, '%s: alpha %r is not between 0 and 1' % (name, a))
        return
    if ext is not None:
        want = 'rgba(%d, %d, %d, %s)' % (rgb[0], rgb[1], rgb[2], num(a))
        if ext.get('rgba') != want:
            fail(p, '%s: rgba %r does not match hex %s (expected %r)' % (name, ext.get('rgba'), h, want))
        if a < 1:
            want8 = h + '%02x' % round(a * 255)
            if ext.get('hex8') != want8:
                fail(p, '%s: hex8 %r does not match hex and alpha (expected %r)' % (name, ext.get('hex8'), want8))
        elif 'hex8' in ext:
            fail(p, '%s: hex8 is set but alpha is 1' % name)


# ---------- 4. dimensions ----------
def check_dimension(p, name, v, units=('px', 'rem')):
    if isinstance(v, str) and REF.match(v):
        return
    if not (isinstance(v, dict) and set(v) == {'value', 'unit'} and isinstance(v['value'], (int, float))
            and not isinstance(v['value'], bool)):
        fail(p, '%s: dimension %s is not {value, unit} or a reference' % (name, json.dumps(v)))
        return
    if v['unit'] not in units:
        fail(p, '%s: unit %r is not allowed here (%s)' % (name, v['unit'], ', '.join(units)))


def is_ref(v):
    return isinstance(v, str) and bool(REF.match(v))


for p in token_files:
    for name, (t, v, mng) in tokens.get(p, {}).items():
        if is_ref(v):
            continue
        if p.startswith('components/'):
            raw_values.append((p, name, t, v))
        if t == 'color':
            check_color(p, name, v, mng)
        elif t == 'dimension':
            check_dimension(p, name, v)
        elif t == 'typography':
            if not isinstance(v, dict):
                fail(p, '%s: typography value is not an object' % name)
                continue
            for k in ('fontSize',):
                if k in v:
                    check_dimension(p, '%s.%s' % (name, k), v[k])
            if 'letterSpacing' in v:
                check_dimension(p, name + '.letterSpacing', v['letterSpacing'], units=('px', 'rem', 'em'))
            if 'lineHeight' in v and not (isinstance(v['lineHeight'], (int, float)) or is_ref(v['lineHeight'])):
                fail(p, '%s: lineHeight %r is not a number or a reference' % (name, v['lineHeight']))
        elif t == 'shadow':
            for sh in (v if isinstance(v, list) else [v]):
                if not isinstance(sh, dict):
                    fail(p, '%s: shadow value is not an object' % name)
                    continue
                for k in ('offsetX', 'offsetY', 'blur', 'spread'):
                    check_dimension(p, '%s.%s' % (name, k), sh.get(k))
                c = sh.get('color')
                if not is_ref(c):
                    check_color(p, name + '.color', c, mng)
        elif t == 'fontWeight':
            if not (isinstance(v, (int, float)) and 1 <= v <= 1000) and not isinstance(v, str):
                fail(p, '%s: fontWeight %r is not 1-1000 or a keyword' % (name, v))
        elif t == 'fontFamily':
            if not (isinstance(v, str) or (isinstance(v, list) and all(isinstance(x, str) for x in v))):
                fail(p, '%s: fontFamily %r is not a string or list of strings' % (name, v))

# ---------- 5. tracked junk ----------
try:
    tracked = subprocess.run(['git', 'ls-files'], capture_output=True, text=True, check=True).stdout.splitlines()
except Exception as e:  # noqa: BLE001
    tracked = []
    fail('git', 'could not list tracked files: %s' % e)
JUNK = re.compile(r'(^|/)(\.DS_Store|__pycache__/)|\.pyc$|\.zip$| \(\d+\)(\.[^/]*)?$|-(copy|final)\.[^/]+$', re.I)
for f in tracked:
    if JUNK.search(f):
        fail(f, 'should not be in the repo (README rules: no .DS_Store, __pycache__, zips or copy-suffixed files)')

# ---------- 6. Figma snapshot ----------
snap = load(SNAPSHOT)
if snap is not None:
    if snap.get('file') != FIGMA_FILE:
        fail(SNAPSHOT, 'file is %r, expected the main file %s' % (snap.get('file'), FIGMA_FILE))
    if not re.fullmatch(r'\d{4}-\d{2}-\d{2}', str(snap.get('read', ''))):
        fail(SNAPSHOT, 'read %r is not a date (YYYY-MM-DD)' % snap.get('read'))
    cols = snap.get('collections') or {}
    for c in SNAPSHOT_COLLECTIONS:
        if not cols.get(c):
            fail(SNAPSHOT, 'collection %r is missing or empty (rerun extract.js and save the whole result)' % c)
    eff = snap.get('effectStyles') or {}
    for s in SNAPSHOT_SHADOWS:
        if s not in eff:
            fail(SNAPSHOT, 'effect style %s is missing (rerun extract.js and save the whole result)' % s)
    counts = snap.get('counts')
    if counts is not None:
        for c, n in (counts.get('collections') or {}).items():
            if len(cols.get(c) or []) != n:
                fail(SNAPSHOT, 'collection %r has %d variables, the read returned %d' % (c, len(cols.get(c) or []), n))
        if 'effectStyles' in counts and len(eff) != counts['effectStyles']:
            fail(SNAPSHOT, 'effectStyles has %d styles, the read returned %d' % (len(eff), counts['effectStyles']))
    else:
        fail(SNAPSHOT, 'has no counts: save it with scripts/build-tokens/save-snapshot.py, not by hand')
    hashes = snap.get('hashes')
    if hashes is None:
        fail(SNAPSHOT, 'has no hashes: save it with scripts/build-tokens/save-snapshot.py, not by hand')
    else:
        import importlib.util
        spec = importlib.util.spec_from_file_location('save_snapshot', 'scripts/build-tokens/save-snapshot.py')
        ss = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(ss)
        for c, h in (hashes.get('collections') or {}).items():
            if ss.fingerprint(cols.get(c)) != h:
                fail(SNAPSHOT, 'collection %r does not match the Figma read (edited by hand or merged?)' % c)
        if ss.fingerprint(eff) != hashes.get('effectStyles'):
            fail(SNAPSHOT, 'effectStyles do not match the Figma read (edited by hand or merged?)')

# ---------- report ----------
by_file = {}
for p, name, t, v in raw_values:
    by_file.setdefault(p, []).append((name, t, v))
if raw_values:
    print('report: %d raw values (not references) in %d component token files; reported only, not a failure.'
          % (len(raw_values), len(by_file)))
    if '--raw' in sys.argv:
        for p, rows in sorted(by_file.items()):
            for name, t, v in rows:
                print('  %s: %s (%s) = %s' % (p, name, t, json.dumps(v)))
    else:
        print('        run with --raw to list them.')

n_tokens = sum(len(x) for x in tokens.values())
if problems:
    for line in problems:
        print('FAIL ' + line)
    print('%d problem(s) in %d token files (%d tokens).' % (len(problems), len(token_files), n_tokens))
    sys.exit(1)
print('ok: %d token files, %d tokens, Figma snapshot read %s.' % (len(token_files), n_tokens,
                                                                  (snap or {}).get('read')))
