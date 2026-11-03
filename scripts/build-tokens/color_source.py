"""MNG Web Design System: the color source for the token build (replaces tokens/colors/mng-colors.tokens.json, 2026-11-03).

Two inputs:
  scripts/build-tokens/figma-variables.json   Figma variables snapshot: every hex value Figma has (the source of truth).
  scripts/build-tokens/publications.json      Everything Figma doesn't hold: the publications and their sites, each theme's
                                              metadata (production audit, mismatches, sites), which color.theme tokens each
                                              theme defines, and hex values only where Figma has none (subsite-custom, and the
                                              sub-themes past Figma's 20-mode limit: The Baltimore Sun, Capital Gazette).

load() returns them merged in the shape the old color export had ({'color': {...}, 'site': {...}}), so make-tokens.py
and colors-docs/build-color-docs.py read one structure. A `null` token in publications.json means "take it from Figma";
a hex there is used as is. Stdlib only.
"""
import json, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
CORE_GROUPS = ('gray', 'feedback', 'neutral', 'surface', 'tributes')


def _load(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return json.load(f)


def _hex(v):
    # Figma snapshot colors are '#rrggbb' or '#rrggbb@alpha'; the color source keeps the hex only (alpha comes from Figma).
    return v.split('@')[0]


def load():
    pub = _load('scripts/build-tokens/publications.json')
    fig = {v['name']: v for v in _load('scripts/build-tokens/figma-variables.json')['collections']['Colors']}
    color = {'$type': 'color'}
    for group in CORE_GROUPS:
        g = {}
        for name, extra in pub['coreColors'][group].items():
            fv = fig.get('color/%s/%s' % (group, name))
            if not fv:
                sys.exit('publications.json: core color %s/%s is not in the Figma snapshot' % (group, name))
            vals = {_hex(x) for x in fv['values'].values()}
            if len(vals) != 1:
                sys.exit('core color %s/%s varies by mode in Figma: %s' % (group, name, vals))
            g[name] = dict({'$value': vals.pop()}, **(extra or {}))
        color[group] = g
    themes = {}
    for key, th in pub['themes'].items():
        mode = th['$extensions']['com.mng'].get('figmaMode')
        t = {}
        for name, v in th['tokens'].items():
            if v is None:
                fv = fig.get('color/theme/' + name)
                if not mode or not fv or mode not in fv['values']:
                    sys.exit('publications.json: %s %s is null but Figma has no value for it (mode %s)' % (key, name, mode))
                v = _hex(fv['values'][mode])
            t[name] = {'$value': v}
        t['$extensions'] = th['$extensions']
        themes[key] = t
    color['theme'] = themes
    return {'$description': pub['$description'], 'color': color, 'site': pub['sites']}
