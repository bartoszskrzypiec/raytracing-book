# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

"Ray Tracing dla Artystów Technicznych" — a Polish-language static HTML book teaching ray tracing
concepts to technical artists, not programmers writing a renderer from scratch. It assumes the
reader already uses Blender/Arnold/Unreal/etc. and wants to understand what happens under the hood.
22 numbered main chapters (rozdziały) build linearly on each other; 40 lettered appendices (dodatki
A–Z, AA–AN) go much deeper into specific topics (full derivations, numerically worked examples); one
worked-exercises companion (pomocnik) walks through early-chapter problems step by step. Live at
https://bartoszskrzypiec.github.io/raytracing-book/.

This is a living project, not a one-shot publication — chapters and appendices get revisited,
deepened, and rewritten over time. Don't build rigid generated structures (e.g. auto-generated
index files) that would need manual rebuilding on every content change.

## No build system

Pure static HTML/CSS with inline SVG diagrams — no npm, no package.json, no bundler, no test
suite, no linter. To "run" the site, open any `.html` file directly in a browser, or serve the
repo root with any static file server. Deployed via GitHub Pages (Settings → Pages → Deploy from
branch → `main` / `/(root)`).

## Structure

```
index.html                              — table of contents (spis treści), root only
rozdzialy/rozdzial-NN-slug.html         — 22 main chapters, NN zero-padded 01–22
dodatki/dodatek-x-slug.html             — 40 lettered appendices, x = a–z then aa–an. Letters
                                          AG–AN form "Część VIII · Zaawansowane" — production
                                          topics the main chapters only mention (SSS, displacement,
                                          MaterialX/OSL, LPE, cryptomatte, light linking, spectral,
                                          MLT/ReSTIR). They are dodatki on disk but get their own
                                          highlighted block in index.html, above the other dodatki.
matematyka/podstawy-matematyczne.html   — Σ / ∫ notation primer; linked from R.10, R.11, R.15,
                                          dodatek AC. Easy to miss — it is the one content page
                                          outside rozdzialy/dodatki/pomocnik, so any repo-wide
                                          script must glob it explicitly. 65 content pages total.
pomocnik/pomocnik-obliczeniowy-tom-1.html — worked-exercises companion (covers R.2–R.5 only)
assets/style.css                        — single shared stylesheet (dark theme) used by every page
assets/interactive.js                   — formula modals + `.vec[data-tip]` symbol tooltips
                                          (hover, tap, keyboard); loaded by every page that uses them
```

Every page links `assets/style.css` plus keeps its own Google Fonts `<link>` inline. Some pages
also have a small additional inline `<style>` block immediately after the stylesheet link — these
are deliberate, minimal per-page overrides for genuine visual differences that predate the CSS
unification (e.g. one chapter's `h1` is slightly smaller, one `.formula` box uses a different
font-size). They are not leftover cruft; when editing `assets/style.css`, check whether a change
would conflict with one of these overrides.

## Content authoring rules

- **Never rename/reletter dodatki (A–Z, AA–AN) without asking**, even when the ordering looks imperfect
  (e.g. Dodatek V is conceptually a prerequisite to Dodatek B but sorts after it alphabetically).
  Fixing that would mean editing prose cross-references ("Dodatek B", "Dodatek E", …) scattered by
  name across *other* dodatek files — a much bigger, riskier change than it first appears.
- **Every dodatek's header** (the `.viewport-readout` div near the top) has an `EXT OF` line (or
  occasionally `ŁĄCZY`) naming which rozdział(y)/dodatek(i) it extends. This is the source of truth
  for cross-linking — don't infer relationships from titles alone.
- **Formulas must define their symbols.** When a `.formula` introduces a variable, explain what it
  means (not just what the formula as a whole means) — either inline via `<strong>` in the
  surrounding prose or in the formula's `.sub` span.
- **File names and in-text numbering are decoupled.** Renaming a file must never change prose
  references like "Rozdział 5" or "Dodatek K" inside content — those describe the book's structure,
  not the file on disk.

## Navigation system

Multiple hand-authored layers, no generation script — each is added deliberately per page, not
mechanically to every page:

- **`.site-nav`** (bottom of every rozdział/dodatek/pomocnik page): rozdziały get
  `← Spis treści` + `← Poprzedni` / `Następny →` in chapter order; dodatki get `← Spis treści` + an
  `↑` link up to whatever their own `EXT OF` line names first (a rozdział or another dodatek).
- **`.deeper`** block (near the bottom, before `.site-nav`): an "Idź głębiej" list of dodatki that
  extend *this* page, built from the reverse of the `EXT OF` mapping. Not every page has one.
- **`.inline-deeper`** chips: small pill-style links placed directly after the specific paragraph
  that introduces a topic covered more deeply elsewhere. A supplement to `.deeper`, not a
  replacement — only add one where a genuinely natural anchor sentence already exists; never force
  one in just to complete a mapping.
- **`.series-nav`**: multi-part dodatki (ACES = Dodatki L–O, Perlin = Dodatki P–S) get a
  "Część 1/2/3/4" strip. Every part except the current one must be a real `<a>` link to the sibling
  file (the current part stays a non-link `<span class="current">`) — this has broken before by
  accidentally using plain `<span>` for all parts.

## Git workflow

Commit and push right after making a change in this repo, without asking for confirmation each
time — this is an established preference for this project. Still use judgment for anything
unusually large or risky, and never force-push or rewrite history without asking. Commit messages
in this repo avoid Polish diacritics (ASCII-safe) to sidestep Windows console/heredoc encoding
issues — page *content* always uses full, correct Polish diacritics regardless.
