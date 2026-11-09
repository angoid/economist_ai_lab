# Meet the Editors: case study presentation

An 8-slide, Keynote-style presentation website for the Economist AI Lab interview.
Built with React, TypeScript, Vite and Tailwind. There's no backend.

## Run it

```bash
npm install
npm run dev        # open http://localhost:5173
```

To build a static copy: `npm run build`. The output goes to `dist/`, and `npm run preview` serves it.

## Presenting

| Key | Action |
| --- | --- |
| `→` `Space` `Enter` `PageDown` / click | Next slide |
| `←` `Shift+Space` `PageUp` / shift-click or right-click | Previous slide |
| `1`–`8`, `Home`, `End` | Jump to a slide |
| `F` | Browser full screen |
| `N` | Toggle presenter notes under the slide |
| `O` | Overview of all slides (click one to jump) |
| `P` | Open the **presenter window**: current and next slide, notes, and a timer (`R` resets it) |
| `?` | Shortcut help |

The presenter window stays in sync with the main window. On a video call, share the
deck window (full screen, `F`) and keep the presenter window on your other screen.
This works with presentation clickers that send PageUp and PageDown.

The current slide is kept in the URL (`#/4`), so a refresh keeps your place.

## Editing slides

**All content is in [`src/content/slides.ts`](src/content/slides.ts).** Each slide has
a `layout`, its fields and `notes` (presenter talking points).

Inline markup works in any text field:

- `**bold**` for emphasis
- `[square brackets]` shows a **yellow placeholder** for anything still to be confirmed
  (sources, dates, internal details). Before presenting, search the file for `[` to
  find them all.

### Appendix

Slides with `appendix: true` come after the main deck. They're labelled A1, A2… and
aren't counted in the 8-slide progress bar. The current appendix (A1–A4) comes from
`research-synthesis.md` (8 Nov 2026, revised 9 Nov), with ratings revised on 9 Nov
marked †. It's reference material for Q&A: reach it with `End`, or jump from the
overview (`O`).

The field types for each layout are in [`src/content/types.ts`](src/content/types.ts),
so TypeScript flags any field you mistype.

## Structure

```
src/
  content/
    slides.ts      ← slide copy and presenter notes (edit this)
    types.ts       ← fields available to each layout
  slides/
    Frame.tsx      ← shared 1920×1080 slide frame: kicker, headline, footer, progress
    layouts.tsx    ← one component per layout (cover, jobs, evidence, experiments…)
    Rich.tsx       ← **bold** / [placeholder] rendering
  deck/
    Deck.tsx       ← main presentation: navigation, notes, overview, full screen
    Presenter.tsx  ← presenter window
    Scaled.tsx     ← scales the 1920×1080 canvas to any screen
    useDeck.ts     ← slide state, URL hash, cross-window sync, key map
  index.css        ← design tokens
```

Each slide is drawn on a fixed 1920×1080 canvas and scaled to fit the window, so the
layout looks the same at any resolution or aspect ratio.

## Design system

The colours, type stacks and type scale come from
[The Economist Design System](https://design-system.economist.com/) (v5.99.2 tokens):
Economist red `#e3120b`, the London greys, Chicago blues and the Los Angeles off-white.
The tokens are defined in `src/index.css`.

The Economist's typefaces (Milo and Econ Sans) are licensed and aren't bundled. If
they're installed on the presenting machine they're used automatically. Otherwise the
design system's own fallbacks apply (Charter and the system sans on macOS).
