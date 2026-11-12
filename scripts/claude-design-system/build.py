#!/usr/bin/env python3
"""Build the MNG Web Design System as a Claude Design System artifact.

Reads (repo, read-only): tokens/core/, tokens/themes/{bold-coastal,measured-vibrant,modern-earthy},
tokens/wordpress/, tokens/icons/ (icons.json, icomoon.woff2), logos/logos.json,
components/index.json and every components/<layer>/<slug>/ (spec .md, .tokens.json).
Hand-written sources live next to this script in src/ (runtime, component code, previews, README).

Writes: <out>/project/... in the Design System artifact format (README.md, tokens.json, tokens.css,
fonts/, components/bundle.js, bundle.css, index.d.ts, components/<Comp>/README.md + preview.html,
assets/<Group>/README.md). Logo and icon SVGs are uploaded as assets at publish time; this script
lists them in <out>/assets.json (group, name, source path) for that step.

Usage (from the repo root):
    python3 scripts/claude-design-system/build.py --out <folder outside the repo>
Every value comes from the repo files above; nothing is typed in here except the theme list,
the component list (identifiers and Figma names) and the README prose in src/.
"""
import argparse, json, os, re, shutil, subprocess, sys, datetime, html
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent.parent
SRC = HERE / "src"

TITLE = "MNG Web Design System"
NAMESPACE = "mng_web_design_system"   # README "Names": code identifiers use mng_web_design_system

THEMES = [  # first = default (Bold Coastal); per-site themes come later (max 8 themes in the type)
    ("bold-coastal", "Bold Coastal"),
    ("measured-vibrant", "Measured Vibrant"),
    ("modern-earthy", "Modern Earthy"),
]
# Tokens left out of the color themes on purpose (Karl, 2026-10-29): only Bold Coastal sets it,
# and the type would show Bold Coastal's value on the other themes instead of MISSING.
OMIT_THEME_TOKENS = {"color.theme.subsite-custom"}

# Every exported component, in catalogue order: (slug, identifier, Figma set name, section).
# Identifiers are the Figma set names as JS identifiers (Karl, 2026-10-29: Figma set names).
COMPONENTS = [
    # Core (MNG Web Design System)
    ("button-primary", "ButtonPrimary", "Button Primary", "Core"),
    ("button-secondary", "ButtonSecondary", "Button Secondary", "Core"),
    ("button-tertiary", "ButtonTertiary", "Button Tertiary", "Core"),
    ("button-social-login", "ButtonSocialLogin", "Button Social-Login", "Core"),
    ("button-linkstyle", "ButtonLinkstyle", "Button Linkstyle", "Core"),
    ("action-button", "ButtonAction", "Button Action", "Core"),
    ("in-line-close", "ButtonInLineClose", "Button In-Line Close", "Core"),
    ("pop-up-modal-close", "ButtonModalClose", "Button Modal Close", "Core"),
    ("non-button-hyperlink", "Hyperlink", "Hyperlink", "Core"),
    ("tooltip", "Tooltip", "Tooltip", "Core"),
    ("popover", "Popover", "Popover", "Core"),
    ("modals-center", "ModalsCenter", "ModalsCenter", "Core"),
    ("inline-message-dashsubsnonsub", "InLineMessageDashSubsNonSub", "InLineMessage DashSubsNonSub", "Core"),
    ("form-field", "FormField", "Form Field", "Core"),
    ("code-box", "CodeBox", "Code Box", "Core"),
    ("checkbox", "CheckBox", "CheckBox", "Core"),
    ("name-pair", "NamePair", "Form Field Assembly / Name pair", "Core"),
    ("zip-street", "ZipStreet", "Form Field Assembly / Zip + Street #", "Core"),
    ("zip-phone", "ZipPhone", "Form Field Assembly / Zip + Phone", "Core"),
    ("address-block", "AddressBlock", "Form Field Assembly / Address block", "Core"),
    ("cc-details", "CcDetails", "Form Field Assembly / CC details", "Core"),
    ("password", "Password", "Form Field Assembly / Password", "Core"),
    ("verification-code", "VerificationCode", "Form Field Assembly / Verification Code", "Core"),
    ("checkbox-terms", "CheckboxTerms", "Form Field Assembly / Checkbox + Terms", "Core"),
    ("toggle-switch", "ToggleSwitch", "Toggle Switch", "Core"),
    ("dropdown-menu-item", "DropdownMenuItem", "Dropdown Menu Item", "Core"),
    ("dropdown-menu", "DropdownMenu", "Dropdown Menu", "Core"),
    # WordPress Elements
    ("homepage-tabs", "HomepageTabs", "Homepage Tabs", "WordPress Elements"),
    ("homepage-tab", "HomepageTab", "Homepage Tab", "WordPress Elements"),
    ("section-title-eyebrow", "SectionTitleEyebrow", "Section Title / Eyebrow", "WordPress Elements"),
    ("blocks-card", "BlocksCard", "Blocks Card", "WordPress Elements"),
    ("blocks-article-row", "BlocksArticleRow", "Blocks Article Row", "WordPress Elements"),
    ("blocks-lead-article-card", "BlocksLeadArticleCard", "Blocks Lead Article Card", "WordPress Elements"),
    ("zone-1-slideshow", "Zone1Slideshow", "Zone 1 Slideshow", "WordPress Elements"),
    ("gallery-icon-badge", "GalleryIconBadge", "Gallery Icon Badge", "WordPress Elements"),
    ("article-section-kicker", "ArticleSectionKicker", "Article Section Kicker", "WordPress Elements"),
    ("article-author", "ArticleAuthor", "Article Author", "WordPress Elements"),
    ("article-timestamp", "ArticleTimestamp", "Article Timestamp", "WordPress Elements"),
    ("show-more-affordance", "ShowMoreAffordance", "Show More Affordance", "WordPress Elements"),
    ("1col-article-card", "OneColArticleCard", "1Col Article Card", "WordPress Elements"),
    ("horizontal-thumbnail-card", "HorizontalThumbnailCard", "Horizontal Thumbnail Card", "WordPress Elements"),
    ("related-article-list-item", "RelatedArticleListItem", "Related Article List Item", "WordPress Elements"),
    ("article-status-badge", "ArticleStatusBadge", "Article Status Badge", "WordPress Elements"),
    ("zone-1-lead-article-card", "Zone1LeadArticleCard", "Zone 1 Lead Article Card", "WordPress Elements"),
    ("topzone-article-card", "TopZoneArticleCard", "TopZone Article Card", "WordPress Elements"),
    ("latest-headlines-list-item", "LatestHeadlinesListItem", "Latest Headlines List Item", "WordPress Elements"),
    ("latest-headlines", "LatestHeadlines", "Latest Headlines", "WordPress Elements"),
    ("newsletter-signup", "NewsletterSignup", "Newsletter Signup", "WordPress Elements"),
    ("blueconic-list-item", "BlueconicListItem", "Blueconic List Item", "WordPress Elements"),
    ("blueconic-block", "BlueconicBlock", "Blueconic Block", "WordPress Elements"),
    ("headline-list-item", "HeadlineListItem", "Headline List Item", "WordPress Elements"),
    ("horizontal-feature-card", "HorizontalFeatureCard", "Horizontal Feature Card", "WordPress Elements"),
    ("feature-list-content-block", "FeatureListContentBlock", "Feature + List Content Block", "WordPress Elements"),
    ("section-rail-card-narrow", "SectionRailCardNarrow", "Section Rail Card Narrow", "WordPress Elements"),
    ("section-rail-card-wide", "SectionRailCardWide", "Section Rail Card Wide", "WordPress Elements"),
    ("photos-block", "PhotosBlock", "Photos Block", "WordPress Elements"),
    ("top-zone-block", "TopZoneBlock", "TOP ZONE Block", "WordPress Elements"),
    ("weather-bug", "WeatherBug", "Weather Bug", "WordPress Elements"),
    ("section-menu-header", "SectionMenuHeader", "SectionMenuHeader", "WordPress Elements"),
    ("section-menu-item", "SectionMenuItem", "SectionMenuItem", "WordPress Elements"),
    ("section-menu-group", "SectionMenuGroup", "SectionMenuGroup", "WordPress Elements"),
    ("section-menu", "SectionMenu", "SectionMenu", "WordPress Elements"),
    ("social-media-button", "SocialMediaButton", "Social Media Button", "WordPress Elements"),
    ("button-save", "ButtonSave", "Button_Save", "WordPress Elements"),
    ("social-buttons", "SocialButtons", "SocialButtons", "WordPress Elements"),
    ("masthead", "Masthead", "Masthead", "WordPress Elements"),
    ("footer", "Footer", "Footer", "WordPress Elements"),
    ("ad-blocks", "AdBlocks", "Ad Blocks", "WordPress Elements"),
]
# ModalsOffset is left out on purpose (Karl, 2026-10-29: not part of the design system).
# Not an exported component set: the icon font as a component (icons.json names).
EXTRA = [("Icon", "Icon", "Core")]

# Figma files (CLAUDE.md, "Figma files"). Links open the component set or page in Figma.
FIGMA_FILES = {
    "core": ("jFHYqhZbJjvWQmDI4myCsd", "MNG Web Design System"),
    "wordpress": ("b1iZxkFwtAYq9rElmnCAzd", "WordPress Elements"),
}
ICONS_PAGE = ("jFHYqhZbJjvWQmDI4myCsd", "1082:55553")  # main file, Icons page

def figma_url(key, node=None):
    return f"https://www.figma.com/design/{key}/" + (f"?node-id={node.replace(':', '-')}" if node else "")

def spec_figma_url(slug, layer):
    """Link to the component set in Figma, from the spec's figma_node."""
    md = (REPO / "components" / layer / slug / f"{slug}.md").read_text()
    m = re.search(r'figma_node: "([0-9]+:[0-9]+)"', md)
    if not m:
        raise SystemExit(f"{slug}: no figma_node in its spec")
    return figma_url(FIGMA_FILES[layer][0], m.group(1))

def card_head(sec, figma, ident, url):
    """Header on top of every preview card: which system, the full Figma name, the code name, a Figma link.
    The page cuts long names off in its Name column and doesn't show groups (Karl, 2026-10-29)."""
    e = html.escape
    return (f'<header class="mngds-cardhead"><span class="mngds-cardhead__system">{e(sec)}</span>'
            f'<span class="mngds-cardhead__name">{e(figma)}</span>'
            f'<code class="mngds-cardhead__code">{e(ident)}</code>'
            f'<a class="mngds-cardhead__link" href="{e(url)}" target="_blank" rel="noopener">Open in Figma ↗</a></header>\n')

def with_card_head(preview, head):
    if "<body>\n" not in preview:
        raise SystemExit("preview.html has no <body> line")
    return preview.replace("<body>\n", "<body>\n" + head, 1)


# ---------------------------------------------------------------- helpers
def load(p):
    with open(REPO / p, encoding="utf-8") as f:
        return json.load(f)

def walk(d, p=()):
    if isinstance(d, dict):
        if "$value" in d:
            yield p, d
            return
        for k, v in d.items():
            if not k.startswith("$"):
                yield from walk(v, p + (k,))

def var(path):
    """DTCG path (dotted or tuple) -> repo CSS variable name (dist/ convention: --mng- + path)."""
    if isinstance(path, (tuple, list)):
        path = ".".join(path)
    return "--mng-" + path.replace(".", "-")

def tok_name(path):
    return var(path)[2:]

def px(v):
    if isinstance(v, dict) and "value" in v:
        n = v["value"]
        n = int(n) if float(n).is_integer() else n
        return f"{n}{v.get('unit', 'px')}"
    return v

def hexof(v):
    return v["hex"] if isinstance(v, dict) else v

def css_value(v):
    """A DTCG $value -> CSS (references become var(--mng-...))."""
    if isinstance(v, str):
        m = re.fullmatch(r"\{([^}]+)\}", v)
        if m:
            return f"var({var(m.group(1))})"
        return v
    if isinstance(v, dict) and "hex" in v:
        a = v.get("alpha", 1)
        if a == 1:
            return v["hex"]
        r, g, b = (int(v["hex"][i:i + 2], 16) for i in (1, 3, 5))
        return f"rgba({r}, {g}, {b}, {a})"
    if isinstance(v, dict) and "value" in v:
        return px(v)
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, list):
        return ", ".join(f'"{x}"' if " " in x or x[0].isupper() else x for x in v)
    raise ValueError(f"unhandled value {v!r}")

def lum(hx):
    hx = hx.lstrip("#")
    c = [int(hx[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]

def contrast(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)

def first_sentence(text):
    text = re.sub(r"\s+", " ", text).strip()
    m = re.match(r"(.+?[.!?])(\s|$)", text)
    return m.group(1) if m else text

def clamp(s, n):
    s = re.sub(r"\s+", " ", s).strip()
    return s if len(s) <= n else s[: n - 1].rsplit(" ", 1)[0] + "…"

def updated_date():
    """Date of the repo's last commit, e.g. "October 30, 2026": when the system was last updated."""
    try:
        d = subprocess.check_output(["git", "-C", str(REPO), "log", "-1", "--format=%cs"], text=True).strip()
        dt = datetime.date.fromisoformat(d)
    except Exception:
        dt = datetime.date.today()
    return f"{dt.strftime('%B')} {dt.day}, {dt.year}"


def git_ref():
    try:
        sha = subprocess.check_output(["git", "-C", str(REPO), "rev-parse", "--short", "HEAD"], text=True).strip()
        dirty = subprocess.check_output(["git", "-C", str(REPO), "status", "--porcelain", "--", "tokens", "components", "logos"], text=True).strip()
        return sha + ("+local" if dirty else "")
    except Exception:
        return "unknown"


# ---------------------------------------------------------------- tokens
def component_usage():
    """system token path -> sorted component names that reference it (from the component token files)."""
    use = {}
    for slug, ident, figma, _ in COMPONENTS:
        f = next((REPO / "components").glob(f"*/{slug}/{slug}.tokens.json"))
        for r in set(re.findall(r'"\$value": "\{([a-z0-9.\-]+)\}"', f.read_text())):
            use.setdefault(r, set()).add(figma)
    return {k: sorted(v) for k, v in use.items()}

def build_tokens(notes):
    used = component_usage()
    core_color = load("tokens/core/color.tokens.json")
    typo = load("tokens/core/typography.tokens.json")
    spacing = load("tokens/core/spacing.tokens.json")
    bps = load("tokens/core/breakpoint.tokens.json")
    wp_bps = load("tokens/wordpress/breakpoint.tokens.json")
    shadows = load("tokens/core/shadow.tokens.json")
    editorial = load("tokens/wordpress/typography-editorial.tokens.json")
    themes = {tid: load(f"tokens/themes/{tid}.tokens.json") for tid, _ in THEMES}
    type_theme = {tid: load(f"tokens/wordpress/type-theme/{tid}.tokens.json") for tid, _ in THEMES}

    def usage(path, desc=""):
        n = notes.get(".".join(path)) or ""
        if not n and desc:
            n = first_sentence(desc)
        comps = used.get(".".join(path))
        if comps:
            n = (n + " " if n else "") + "Components: " + ", ".join(comps) + "."
        return clamp(n, 1000)

    # -- colors
    ctoks = []
    grounds = {"gray-max": "#ffffff", "gray-600": "#f1efeb"}
    for p, t in walk(core_color):
        ctoks.append({"name": tok_name(p), "value": hexof(t["$value"]), "usage": usage(p, t.get("$description", ""))})
    first = THEMES[0][0]
    theme_paths = [p for p, _ in walk(themes[first]) if ".".join(p) not in OMIT_THEME_TOKENS]
    for p in theme_paths:
        vals = {}
        for tid, _ in THEMES:
            hit = dict((pp, tt) for pp, tt in walk(themes[tid])).get(p)
            if hit is None:
                raise SystemExit(f"{'.'.join(p)} missing in theme {tid}")
            vals[tid] = hexof(hit["$value"])
        u = usage(p)
        ratios = "; ".join(f"{n}: {contrast(vals[tid], '#ffffff'):.2f}:1 on gray-max" for tid, n in THEMES)
        ctoks.append({"name": tok_name(p), "value": vals, "usage": clamp(u + " Contrast " + ratios + ".", 1000)})

    # -- type: families (Bold Coastal's mapping; per-theme mapping is in bundle.css)
    fam = {}
    for p, t in walk(typo):
        if p[:2] == ("font", "family"):
            fam[p[2]] = css_value(t["$value"])
    def resolve_family(ref, tid):
        tt = dict((".".join(pp), x) for pp, x in walk(type_theme[tid]))
        m = re.fullmatch(r"\{font\.theme\.([a-z\-]+)\}", ref)
        if m:
            inner = tt[f"font.theme.{m.group(1)}"]["$value"]
            return re.fullmatch(r"\{font\.family\.([a-z\-]+)\}", inner).group(1)
        m = re.fullmatch(r"\{font\.family\.([a-z\-]+)\}", ref)
        return m.group(1)
    roles = ["heading-family", "body-family", "small-headline-family", "eyebrow-family"]
    families = dict(fam)  # noto-sans, noto-serif
    role_map = {}
    for r in roles:
        key = r.replace("-family", "")
        role_map[key] = {tid: resolve_family("{font.theme.%s}" % r, tid) for tid, _ in THEMES}
        families[key] = fam[role_map[key][first]]

    sizes = {".".join(p): t for p, t in walk(typo) if p[:2] == ("font", "size")}
    weights = {".".join(p): t for p, t in walk(typo) if p[:2] == ("font", "weight")}
    def size_of(ref):
        m = re.fullmatch(r"\{(font\.size\.[0-9\-]+)\}", ref)
        return px(sizes[m.group(1)]["$value"])
    def weight_of(ref):
        if isinstance(ref, (int, float)):
            return ref
        m = re.fullmatch(r"\{(font\.weight\.[a-z]+)\}", ref)
        return weights[m.group(1)]["$value"]
    styles = []
    for p, t in walk(editorial):
        v = t["$value"]
        famref = v["fontFamily"]
        m = re.fullmatch(r"\{font\.theme\.([a-z\-]+)-family\}", famref)
        fkey = m.group(1) if m else re.fullmatch(r"\{font\.family\.([a-z\-]+)\}", famref).group(1)
        s = {"name": tok_name(p), "family": fkey, "fontSize": size_of(v["fontSize"]),
             "fontWeight": weight_of(v["fontWeight"])}
        if "lineHeight" in v:
            s["lineHeight"] = v["lineHeight"]
        if "letterSpacing" in v:
            s["letterSpacing"] = px(v["letterSpacing"])
        figma = ((t.get("$extensions") or {}).get("com.mng") or {}).get("figma") or {}
        fig = figma.get("style") or figma.get("textStyle") or ""
        u = first_sentence(t.get("$description", ""))
        fam_note = f"Family: font/theme/{fkey}-family" if m else f"Family: font/family/{fkey}"
        s["usage"] = clamp(f"{u} {fam_note}" + (f" (Figma style {fig})." if fig else "."), 1000)
        styles.append(s)
    type_block = {
        "fonts": [{"family": "icomoon", "file": "fonts/icomoon.woff2", "weight": "400", "style": "normal"}],
        "families": families,
        "groups": [{"name": "Editorial", "family": "body", "styles": styles}],
    }

    # -- spacing, radius, shadow, breakpoints, font sizes and weights
    sp, rad = [], []
    for p, t in walk(spacing):
        e = {"name": tok_name(p), "value": px(t["$value"]), "usage": usage(p, t.get("$description", ""))}
        (rad if p[0] == "radius" else sp).append(e)
    spmap = {".".join(p): px(t["$value"]) for p, t in walk(spacing)}
    sh = []
    for p, t in walk(shadows):
        v = t["$value"]
        def L(x):
            if isinstance(x, str):
                return spmap[re.fullmatch(r"\{([^}]+)\}", x).group(1)]
            return px(x)
        c = v["color"]
        r, g, b = (int(c["hex"][i:i + 2], 16) for i in (1, 3, 5))
        val = f"{L(v['offsetX'])} {L(v['offsetY'])} {L(v['blur'])} {L(v['spread'])} rgba({r}, {g}, {b}, {c['alpha']})"
        sh.append({"name": tok_name(p), "value": val, "usage": usage(p, t.get("$description", ""))})
    bp = []
    for src, label in ((bps, "MNG Device breakpoint (core; Figma screen widths, Reader Dashboard)."),
                       (wp_bps, "WordPress grid breakpoint (WordPress themes incl. Obituaries; legacy).")):
        for p, t in walk(src):
            bp.append({"name": tok_name(p), "value": px(t["$value"]), "usage": clamp(label + " " + t.get("$description", ""), 1000)})
    fs = [{"name": tok_name(p.split(".")), "value": px(t["$value"]), "usage": usage(tuple(p.split(".")), t.get("$description", ""))} for p, t in sizes.items()]
    fw = [{"name": tok_name(p.split(".")), "value": str(t["$value"]), "usage": usage(tuple(p.split(".")), t.get("$description", ""))} for p, t in weights.items()]

    tokens = {
        "name": TITLE, "version": 1,
        "meta": {"source": "github", "repo": "kuscholdMNG/mng_web_ds", "ref": "main@" + git_ref(),
                 "paths": {"tokens": ["tokens/core/", "tokens/themes/", "tokens/wordpress/"],
                           "fonts": ["tokens/icons/icomoon.woff2"], "assets": ["logos/", "tokens/icons/svg-missing/"],
                           "docs": ["components/"]},
                 "components": {ident: f"components/{lay}/{slug}/" for slug, ident, _, lay in
                                [(s, i, f, "core" if sec == "Core" else "wordpress") for s, i, f, sec in COMPONENTS]},
                 "synced": datetime.date.today().isoformat()},
        "color": {"themes": [{"id": tid, "name": n} for tid, n in THEMES], "tokens": ctoks},
        "type": type_block,
        "spacing": {"tokens": sp},
        "radius": {"tokens": rad},
        "shadow": {"note": "Black only. Offsets and blur are spacing tokens. shadow/masthead (WordPress Elements) isn't exported yet.", "tokens": sh},
        "breakpoint": {"note": "Two official sets for now: MNG Device (core) and WordPress grid (legacy). The goal is the Device set only.", "tokens": bp},
        "fontSize": {"note": "Type primitives (Type Primitives collection). Editorial styles and components reference these.", "tokens": fs},
        "fontWeight": {"note": "Font weight primitives. Figma style names: Regular, Medium, SemiBold, Bold.", "tokens": fw},
    }
    # The page cuts long token names off in its Name column (Karl, 2026-10-29: make the full name viewable).
    # Each usage note starts with the full name; the note opens from the row's note button. The page skips
    # a token's own name when it looks for contrast backgrounds, so this doesn't change the contrast checks.
    for fam in ("color", "spacing", "radius", "shadow", "breakpoint", "fontSize", "fontWeight"):
        for t in tokens[fam]["tokens"]:
            t["usage"] = clamp(f"Full name: {t['name']}. " + t.get("usage", ""), 1000)
    for g in tokens["type"]["groups"]:
        for st in g["styles"]:
            st["usage"] = clamp(f"Full name: {st['name']}. " + st.get("usage", ""), 1000)
    return tokens, role_map, type_theme

def tokens_css(tokens):
    """tokens.css as the page compiles it (format.md: 'tokens.css as compiled')."""
    out = [f"/* {TITLE} — generated from tokens.json */"]
    themes = [t["id"] for t in tokens["color"]["themes"]]
    first = themes[0]
    lines = []
    for t in tokens["color"]["tokens"]:
        v = t["value"]
        lines.append(f"  --{t['name']}: {v if isinstance(v, str) else v[first]};")
    for t in tokens["shadow"]["tokens"]:
        lines.append(f"  --{t['name']}: {t['value']};")
    out.append(f':root, [data-theme="{first}"] {{\n' + "\n".join(lines) + "\n}")
    for tid in themes[1:]:
        ov = [f"  --{t['name']}: {t['value'][tid]};" for t in tokens["color"]["tokens"]
              if isinstance(t["value"], dict) and t["value"].get(tid) and t["value"][tid] != t["value"][first]]
        out.append(f'[data-theme="{tid}"] {{\n' + "\n".join(ov) + "\n}")
    rest = []
    for fam in ("spacing", "radius", "breakpoint", "fontSize", "fontWeight"):
        for t in tokens[fam]["tokens"]:
            rest.append(f"  --{t['name']}: {t['value']};")
    for k, v in tokens["type"]["families"].items():
        rest.append(f"  --font-{k}: {v};")
    out.append(":root {\n" + "\n".join(rest) + "\n}")
    for g in tokens["type"]["groups"]:
        for s in g["styles"]:
            decl = [f"font-family: var(--font-{s.get('family', g['family'])})", f"font-size: {s['fontSize']}",
                    f"font-weight: {s['fontWeight']}"]
            if "lineHeight" in s:
                decl.append(f"line-height: {s['lineHeight']}")
            if "letterSpacing" in s:
                decl.append(f"letter-spacing: {s['letterSpacing']}")
            out.append(f".{s['name']} {{ " + "; ".join(decl) + "; }")
    for f in tokens["type"]["fonts"]:
        out.append(f"@font-face {{ font-family: \"{f['family']}\"; src: url(\"{f['file']}\") format(\"woff2\"); "
                   f"font-weight: {f['weight']}; font-style: {f.get('style', 'normal')}; font-display: block; }}")
    return "\n".join(out) + "\n"


# ---------------------------------------------------------------- bundle.css pieces
def theme_css(role_map, type_theme):
    """Per-theme font roles and eyebrow, the dist/ aliases components use, and the editorial variables."""
    first = THEMES[0][0]
    out = ["/* ---- Fonts and per-theme type (tokens/wordpress/type-theme/). The page can theme only colors,",
           "   so the font roles and eyebrow switch here, on the same [data-theme] the page sets. */",
           "/* Variables that reference theme values are declared on :root AND on every [data-theme] wrapper,",
           "   so a nested data-theme (two themes side by side on one canvas) recomputes them. */",
           ":root, [data-theme] {",
           "  --mng-font-family-noto-sans: var(--font-noto-sans);",
           "  --mng-font-family-noto-serif: var(--font-noto-serif);"]
    for p, t in walk(load("tokens/core/typography.tokens.json")):
        if p[0] == "shared":
            out.append(f"  {var(p)}: {css_value(t['$value'])};")
    out.append("}")
    for tid, name in THEMES:
        sel = f':root, [data-theme="{tid}"]' if tid == first else f'[data-theme="{tid}"]'
        out.append(f"{sel} {{ /* {name} */")
        for role, per in role_map.items():
            out.append(f"  --font-{role}: var(--font-{per[tid]});")
        for p, t in walk(type_theme[tid]):
            key = p[-1]
            if key.endswith("-family"):
                out.append(f"  {var(p)}: var(--font-{key[:-7]});")
            else:
                out.append(f"  {var(p)}: {css_value(t['$value'])};")
        out.append("}")
    # editorial composites, as dist/css/wordpress.css names them
    out.append("/* ---- Editorial type styles as variables (dist/css/wordpress.css names). */\n:root, [data-theme] {")
    for p, t in walk(load("tokens/wordpress/typography-editorial.tokens.json")):
        v, base = t["$value"], var(p)
        fam = css_value(v["fontFamily"])
        out.append(f"  {base}-font-family: {fam};")
        out.append(f"  {base}-font-size: {css_value(v['fontSize'])};")
        out.append(f"  {base}-font-weight: {css_value(v['fontWeight'])};")
        if "lineHeight" in v:
            out.append(f"  {base}-line-height: {v['lineHeight']};")
        if "letterSpacing" in v:
            out.append(f"  {base}-letter-spacing: {px(v['letterSpacing'])};")
    out.append("}")
    return "\n".join(out) + "\n"

def component_tokens_css():
    """Every component token as a CSS variable: --mng- + token path (EXPORT-STANDARD §7)."""
    out = ["/* ---- Component tokens from components/<layer>/<slug>/<slug>.tokens.json (--mng- + token path). */", ":root, [data-theme] {"]
    n = 0
    for slug, ident, figma, sec in COMPONENTS:
        f = next((REPO / "components").glob(f"*/{slug}/{slug}.tokens.json"))
        out.append(f"  /* {figma} */")
        for p, t in walk(json.loads(f.read_text())):
            out.append(f"  {var(p)}: {css_value(t['$value'])};")
            n += 1
    out.append("}")
    return "\n".join(out) + "\n", n


# ---------------------------------------------------------------- component docs
def md_sections(md):
    """Split a spec .md into {heading: body} (level-2 headings)."""
    body = re.sub(r"^---\n.*?\n---\n", "", md, flags=re.S)
    parts = re.split(r"^## (.+)$", body, flags=re.M)
    intro = parts[0]
    secs = {parts[i].strip(): parts[i + 1].strip() for i in range(1, len(parts), 2)}
    return intro, secs

def fix_links(text, rel):
    """Spec-relative links (previews/x.png, ../x.md) -> GitHub links."""
    gh = "https://github.com/kuscholdMNG/mng_web_ds/blob/main/"
    def rep(m):
        label, href = m.group(1), m.group(2)
        if re.match(r"https?:", href):
            return m.group(0)
        target = os.path.normpath(os.path.join(rel, href))
        return f"[{label}]({gh}{target})"
    text = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", lambda m: f"[preview]({gh}{os.path.normpath(os.path.join(rel, m.group(2)))})", text)
    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", rep, text)

def component_readme(slug, ident, figma, sec, layer):
    rel = f"components/{layer}/{slug}"
    md = (REPO / rel / f"{slug}.md").read_text()
    intro, s = md_sections(md)
    quote = re.search(r"^> (.+)$", intro, flags=re.M)
    summary = quote.group(1).strip() if quote else ""
    notes_f = SRC / "components" / ident / "notes.md"
    notes = notes_f.read_text().strip() if notes_f.exists() else ""
    api_f = SRC / "components" / ident / "api.md"
    api = api_f.read_text().strip() if api_f.exists() else ""
    figma_sec = fix_links(s.get("Figma", ""), rel)
    lines = [f"# {ident}", ""]
    lead = summary if summary else f"{figma}."
    url = spec_figma_url(slug, layer)
    lines += [lead, "",
              f"**Part of:** {sec} · **Figma:** [{figma}]({url}) · **Spec:** [`{rel}/{slug}.md`](https://github.com/kuscholdMNG/mng_web_ds/blob/main/{rel}/{slug}.md)", ""]
    if api:
        lines += ["## Use", "", api, ""]
    if notes:
        lines += ["## Build notes", "", notes, ""]
    for key in ("Properties", "Behavior and breakpoints", "Accessibility", "Production", "Known issues"):
        if key in s and s[key].strip():
            title = {"Known issues": "Known issues (from the spec)", "Production": "Design vs. production"}.get(key, key)
            lines += [f"## {title}", "", fix_links(s[key], rel), ""]
    if figma_sec:
        lines += ["## Figma", "", figma_sec, ""]
    return "\n".join(lines).rstrip() + "\n"


# ---------------------------------------------------------------- icons
def next_icons_svg(d):
    """Icons waiting for the next font build (icons.json nextFontBuild.add): their SVG artwork, black fills
    turned into currentColor and sized 1em, so Icon can draw them until the font has them."""
    out = {}
    for i in d.get("nextFontBuild", {}).get("add", []):
        f = REPO / "tokens/icons" / i.get("artwork", "")
        if not f.is_file():
            continue
        svg = re.sub(r"\s+", " ", f.read_text()).strip()
        svg = re.sub(r'fill="(black|#000000|#000)"', 'fill="currentColor"', svg)
        svg = re.sub(r'<svg([^>]*?) width="[^"]*" height="[^"]*"', r'<svg\1 width="1em" height="1em" aria-hidden="true" focusable="false"', svg, count=1)
        out[i["name"]] = svg
    return out

def icons_payload():
    d = load("tokens/icons/icons.json")
    icons = {i["name"]: i["codepoint"].replace("U+", "").lower() for i in d["icons"]}
    cats = {}
    for i in d["icons"]:
        cats.setdefault(i["category"], []).append(i["name"])
    meta = {i["name"]: {"status": i["status"], "artwork": i["artworkSource"],
                        "icomoon": i.get("icomoonName"), "description": i.get("description", "")} for i in d["icons"]}
    for i in d["icons"]:
        if i.get("layers"):  # multi-color glyphs (google-color): stacked pieces with their own colors
            meta[i["name"]]["layers"] = [[l["codepoint"].replace("U+", "").lower(), l["color"].lower()] for l in i["layers"]]
    return icons, cats, meta, d


# ---------------------------------------------------------------- inventory

# Figma pages, for links in the Inventory's "In Figma" column (page ids read 2026-10-29).
MAIN, WP, RD, LOGOS = "jFHYqhZbJjvWQmDI4myCsd", "b1iZxkFwtAYq9rElmnCAzd", "PhXogWaQcnNSnQqxyRu4b2", "oXaN4tEoa4GsH4x7kWpAFZ"
FIGMA_PAGES = [  # (text at the start of an Inventory "where", file, page node)
    ("Main file, Colors collection; Color Pallets", MAIN, "2321:5"), ("Main file, Shadows", MAIN, "7376:25745"),
    ("Main file, Icons", MAIN, "1082:55553"), ("Main file, Fonts", MAIN, "1079:4658"), ("Main file", MAIN, None),
    ("Buttons", MAIN, "1079:34282"), ("Tooltips", MAIN, "7372:25702"), ("Modal Panels", MAIN, "1079:12064"),
    ("In-Line Content Containers", MAIN, "1079:15767"), ("Check Boxes", MAIN, "1079:30579"),
    ("Toggle Switches", MAIN, "1235:46"), ("Style Guide | Radio Buttons", MAIN, "1415:3442"),
    ("Form Fields", MAIN, "1079:19470"), ("*** Dropdown Menus", MAIN, "1079:23173"), ("Icons", MAIN, "1082:55553"),
    ("Style Guide | Themes", MAIN, "1079:955"), ("Slider Carousel", MAIN, "1079:41688"),
    ("***Breakpoints and Page Templates", MAIN, "1782:1151"), ("Elements to be detailed still", MAIN, "0:1"),
    ("Menus and Parts", WP, "14:499"), ("Homepage", WP, "0:1"), ("Article Page", WP, "14:1697"),
    ("Obits: ET and Local", WP, "1139:19238"), ("Paywalls", WP, "1492:23325"), ("Ads and Sponsored", WP, "496:7890"),
    ("Photo Carousel Widget", WP, "1294:21973"), ("WordPress Elements effect style", WP, None),
    ("WordPress Elements pages", WP, None), ("Newspaper Logos, Favicons, User Pics", LOGOS, None),
    ("Reader Dashboard v2.0", RD, None), ("Components | 2026.02.25", RD, None),
]

def link_where(where, group):
    """Inventory 'In Figma' text with clickable Figma links: the page name, and every node id."""
    default = WP if group.startswith("WordPress") else RD if group.startswith("Reader") else MAIN
    out = where
    for text, key, node in FIGMA_PAGES:
        if where.startswith(text):
            out = f"[{text}]({figma_url(key, node)})" + where[len(text):]
            default = key
            break
    def linked(pt):
        def node(m):
            key = WP if pt[m.end():].startswith(" (WordPress Elements)") else default
            return f"[{m.group(1)}]({figma_url(key, m.group(1))})"
        return re.sub(r"(?<![\w:])(\d+:\d+)(?![\w:])", node, pt)
    # node ids outside links we already made
    parts = re.split(r"(\[[^\]]*\]\([^)]*\))", out)
    return "".join(pt if pt.startswith("[") else linked(pt) for pt in parts)

def inventory_md(comps):
    """README Inventory section from src/inventory.json; every built component must be listed."""
    inv = json.loads((SRC / "inventory.json").read_text())
    listed = {it.get("component") for g in inv["groups"] for it in g["items"] if it["status"] in ("In system", "Partial")}
    missing = [i for _, i, _, _ in comps if i not in listed]
    if missing:
        raise SystemExit(f"src/inventory.json doesn't list these built components: {missing}")
    counts = {}
    for g in inv["groups"]:
        for it in g["items"]:
            counts[it["status"]] = counts.get(it["status"], 0) + 1
    order = list(inv["statuses"])
    out = ["## Inventory", "",
           "Everything in the MNG Web Design System, present and future, from the Figma libraries (MNG Web Design System, WordPress Elements, Reader Dashboard v2.0). "
           + ", ".join(f"{counts[k]} {k.lower()}" for k in order if k in counts) + ". Updated in Claude = the date the item was last built or changed here.", "",
           "**Still to audit:** Obits isn't connected to the design system yet (audit it in the future), and the Reader Dashboard v2.0 audit isn't complete (its list below is good for now; review the whole file before building from it).", ""]
    out += [f"- **{k}:** {v}" for k, v in inv["statuses"].items()]
    for g in inv["groups"]:
        out += ["", f"### {g['name']}"] + (["", f"> {g['note']}"] if g.get("note") else [])
        out += ["", "| Element | In Figma | Status | Updated in Claude | Notes |", "|---|---|---|---|---|"]
        for it in g["items"]:
            name = it["name"] + (f" (`{it['component']}`)" if it.get("component") else "")
            cell = lambda t: str(t).replace("|", "\\|")
            out.append(f"| {cell(name)} | {cell(link_where(it['where'], g['name']))} | {it['status']} | {it.get('updated', '—')} | {cell(it.get('note', ''))} |")
    return "\n".join(out)


# ---------------------------------------------------------------- main
def placeholder_logo_svg():
    """Fakeville Daily News, stacked, for the Masthead and Footer (2026-10-30). Numbers rounded to 2 decimals,
    title and accessible name removed (the wrapper span carries them), sized by CSS."""
    svg = (REPO / "logos/placeholder/fakeville-daily-news/fakeville-daily-news--stacked--black.svg").read_text()
    svg = re.sub(r"<title>.*?</title>\s*", "", svg, flags=re.S)
    svg = re.sub(r'\s(role|aria-label|width|height|color)="[^"]*"', "", svg, count=5)
    svg = svg.replace("<svg ", '<svg aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" ', 1)
    svg = re.sub(r"(\d+\.\d{2})\d+", r"\1", svg)
    return re.sub(r">\s+<", "><", svg).strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True, help="folder to write project/ into (outside the repo)")
    ap.add_argument("--only", nargs="*", help="build only these component identifiers (others are skipped)")
    a = ap.parse_args()
    out = Path(a.out).resolve()
    if REPO in out.parents or out == REPO:
        raise SystemExit("--out must be outside the repo (README rule 3: no output folders in the repo)")
    proj = out / "project"
    if proj.exists():
        shutil.rmtree(proj)
    (proj / "components").mkdir(parents=True)
    (proj / "fonts").mkdir()

    notes = json.loads((SRC / "token-notes.json").read_text())
    tokens, role_map, type_theme = build_tokens(notes)
    (proj / "tokens.json").write_text(json.dumps(tokens, indent=1, ensure_ascii=False) + "\n")
    (proj / "tokens.css").write_text(tokens_css(tokens))
    shutil.copy(REPO / "tokens/icons/icomoon.woff2", proj / "fonts/icomoon.woff2")

    # components
    icons, cats, imeta, idoc = icons_payload()
    wanted = set(a.only) if a.only else None
    comps = [c for c in COMPONENTS if (SRC / "components" / c[1] / "component.js").exists()
             and (wanted is None or c[1] in wanted)]
    order = [("Icon", "Core")] + [(c[1], c[3]) for c in comps]
    js = [(SRC / "runtime.js").read_text()
          .replace("/*ICONS*/{}", json.dumps(icons, separators=(",", ":")))
          .replace("/*ICON_CATEGORIES*/{}", json.dumps(cats, separators=(",", ":")))
          .replace("/*ICON_META*/{}", json.dumps(imeta, separators=(",", ":"), ensure_ascii=False))
          .replace("/*NEXT_ICONS*/{}", json.dumps(next_icons_svg(idoc), separators=(",", ":")))
          .replace("/*PLACEHOLDER_LOGO*/''", json.dumps(placeholder_logo_svg()))]
    css = [(SRC / "base.css").read_text(), theme_css(role_map, type_theme)]
    ctcss, ntok = component_tokens_css()
    css.append(ctcss)
    css.append((SRC / "components/Icon/component.css").read_text())
    dts = [(SRC / "index.d.ts").read_text()]
    for slug, ident, figma, sec in comps:
        d = SRC / "components" / ident
        js.append(f"/* ---- {ident} ({figma}) */\n" + (d / "component.js").read_text())
        if (d / "component.css").exists():
            css.append(f"/* ---- {ident} ({figma}) */\n" + (d / "component.css").read_text())
        if (d / "types.d.ts").exists():
            dts.append((d / "types.d.ts").read_text())
    exports = ", ".join(["Icon"] + [c[1] for c in comps])
    header = "/* @ds-bundle: " + json.dumps({"format": 4, "namespace": NAMESPACE,
                                             "components": [{"name": n} for n, _ in order]}, separators=(",", ":")) + " */\n"
    bundle = header + "(function () {\n'use strict';\n" + "\n".join(js) + \
        f"\nvar api = {{ {exports} }};\nvar ns = window.{NAMESPACE} = window.{NAMESPACE} || {{}};\n" \
        "for (var k in api) ns[k] = api[k];\nns._internal = internal;\n})();\n"
    for bad in ("</script", "<!--"):
        if bad in bundle.lower():
            raise SystemExit(f"bundle.js contains {bad!r}")
    (proj / "components/bundle.js").write_text(bundle)
    bcss = "\n".join(css)
    if "</style" in bcss.lower():
        raise SystemExit("bundle.css contains </style")
    # Every --mng- variable a component uses must exist (a renamed or removed token otherwise fails silently;
    # ModalsCenter's MobileScroll did, 2026-11-10).
    defined = set(re.findall(r"(--mng-[a-z0-9-]+)\s*:", (proj / "tokens.css").read_text() + bcss))
    missing = sorted(set(re.findall(r"var\(\s*(--mng-[a-z0-9-]+)", bcss)) - defined)
    if missing:
        raise SystemExit("bundle.css uses CSS variables that no token defines:\n  " + "\n  ".join(missing))
    (proj / "components/bundle.css").write_text(bcss)
    (proj / "components/index.d.ts").write_text("\n".join(dts))

    # per-component README + preview
    for slug, ident, figma, sec in comps:
        layer = "core" if sec == "Core" else "wordpress"
        cd = proj / "components" / ident
        cd.mkdir()
        (cd / "README.md").write_text(component_readme(slug, ident, figma, sec, layer))
        prev = (SRC / "components" / ident / "preview.html").read_text()
        (cd / "preview.html").write_text(with_card_head(prev, card_head(sec, figma, ident, spec_figma_url(slug, layer))))
    icd = proj / "components/Icon"
    icd.mkdir()
    shutil.copy(SRC / "components/Icon/README.md", icd / "README.md")
    prev = (SRC / "components/Icon/preview.html").read_text()
    (icd / "preview.html").write_text(with_card_head(prev, card_head("Core", "Icons (icon font)", "Icon", figma_url(*ICONS_PAGE))))
    cov = proj / "components/Cover"
    if (SRC / "cover.html").exists():
        cov.mkdir()
        (cov / "preview.html").write_text((SRC / "cover.html").read_text().replace("{{UPDATED}}", updated_date()))

    # README
    readme = (SRC / "README.md").read_text()
    def comp_table(section):
        rows = ["| Component | Code name | Figma |", "|---|---|---|"]
        if section == "Core":
            rows.append(f"| Icons (icon font) | `Icon` | [Icons page]({figma_url(*ICONS_PAGE)}) |")
        for slug, i, f, sec in comps:
            if sec == section:
                layer = "core" if sec == "Core" else "wordpress"
                rows.append(f"| {f} | `{i}` | [Open in Figma]({spec_figma_url(slug, layer)}) |")
        return "\n".join(rows)
    readme = readme.replace("{{CORE_TABLE}}", comp_table("Core")).replace("{{WORDPRESS_TABLE}}", comp_table("WordPress Elements"))
    readme = readme.replace("{{INVENTORY}}", inventory_md(comps))
    readme = readme.replace("{{NAMESPACE}}", NAMESPACE).replace("{{REF}}", tokens["meta"]["ref"]).replace("{{UPDATED}}", updated_date())
    (proj / "README.md").write_text(readme)

    # assets: READMEs here; SVG uploads listed for the publish step
    assets = []
    lj = load("logos/logos.json")
    # Publication logos stay out of the system (Karl, 2026-10-29); the README links to them. Placeholders stay.
    for g, items, key in (("Placeholder Logos", lj["placeholders"], "name"),):
        for it in items:
            for layout in ("horizontal", "stacked", "stacked-tall", "lettermark"):
                if layout in it:
                    for color, f in it[layout]["files"].items():
                        assets.append({"group": g, "name": Path(f).name, "src": f"logos/{f}"})
    for f in sorted((REPO / "tokens/icons/svg-missing").glob("*.svg")):
        assets.append({"group": "Icons Next Build", "name": f.name, "src": f"tokens/icons/svg-missing/{f.name}"})
    for g in ("Placeholder Logos", "Icons Next Build"):
        rd = SRC / "assets" / g / "README.md"
        if rd.exists():
            (proj / "assets" / g).mkdir(parents=True, exist_ok=True)
            shutil.copy(rd, proj / "assets" / g / "README.md")
    (out / "assets.json").write_text(json.dumps(assets, indent=1))
    print(f"wrote {proj}: {len(tokens['color']['tokens'])} colors x {len(THEMES)} themes, "
          f"{len(tokens['type']['groups'][0]['styles'])} type styles, {ntok} component tokens, "
          f"{len(comps)} components + Icon, {len(assets)} assets to upload")

if __name__ == "__main__":
    main()
