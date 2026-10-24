<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Check off steps as they land. The approved design brief is the source of truth.

**Goal:** Ship a compact, accessible single-page developer portfolio for Gaurav Raut, with backend/AI work as the focus and email as the primary action.

**Architecture:** Next.js App Router + TypeScript + Tailwind v4. Server components by default; one small client component for the theme toggle. All copy and links live in one typed data file.

**Stack:** Next 16.2.7, React 19.2.4, Tailwind CSS v4, `simple-icons` for server-rendered technology marks, self-hosted Instrument Sans + Fragment Mono.

## Design Direction

- **Concept:** engineering notes, not a résumé template. A 720px centred column with a narrow monospace section rail on desktop.
- **Feel:** clean Vercel-like precision with a slight retro edge: warm near-black, paper-like light theme, thin 1px rules, small radii, monospace metadata, no glass, glow, gradient text, parallax or scroll reveals.
- **Palette (dark default):** background `#0C0D0B`, surface `#131510`, ink `#E9E7DE`, muted `#9B9E91`, line `#252820`, accent `#D9A84B`, on-accent `#11120E`.
- **Palette (light):** background `#F2F1EB`, surface `#FAF9F4`, ink `#1A1C17`, muted `#5D6154`, line `#D7D5C9`, accent `#7A4A0A`, on-accent `#FFF9EE`.
- **Type:** Instrument Sans for body/headings; Fragment Mono for labels, dates, tags and metadata. Body 16px/1.65. Tight, tracked-in display name.
- **Accent use:** links, hover/focus, theme active icon, and the one filled email button. Nowhere else.
- **Motion:** one 450ms opacity-only page fade; 160ms colour/border transitions. Disable all under `prefers-reduced-motion`.
- **Icons:** monochrome `simple-icons` SVG marks for real technologies, inline via server components. Concepts without a brand mark (RAG, evals, MCP, agents) remain text-only chips. No icon tiles next to headings, no logo grid.

## Global Constraints

- Single centred column, max-width 720px, mobile-first, no horizontal scrolling.
- Sections in order: header, now, experience, projects, skills, certifications, open source, contact/footer.
- Sticky top bar: handle left, theme toggle right.
- All content editable from `data/profile.ts`; unknown facts use `[PLACEHOLDER]` or are documented as placeholders in that file.
- Semantic HTML, visible keyboard focus, WCAG AA contrast, 44px minimum toggle target.
- No new client-side libraries, no animation libraries, no external runtime requests.
- Keep the email CTA functional with a clearly marked placeholder address until replaced.
- Prefer pinned GitHub repos over a contribution graph: no token, no API, better mobile legibility.

## Files

- `app/layout.tsx` — fonts, theme bootstrap script, shared metadata and viewport.
- `app/page.tsx` — page composition and Person JSON-LD.
- `app/globals.css` — Tailwind import, design tokens, base styles, focus, motion.
- `app/theme.ts` — storage key and palette values shared by the bootstrap and toggle.
- `components/site-header.tsx` — sticky bar.
- `components/theme-toggle.tsx` — only client component.
- `components/section.tsx` — rail + content grid wrapper.
- `components/tech-icon.tsx` — resolves `simple-icons` marks, text fallback.
- `components/social-links.tsx`, `site-footer.tsx`, `icons.tsx` — shared identity links, footer and inline SVGs.
- `components/hero.tsx`, `now.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`, `certifications.tsx`, `open-source.tsx`, `contact.tsx` — focused section components.
- `data/profile.ts` — typed content source.
- `data/tech-icons.ts` — technology name → icon registry.
- `app/opengraph-image.tsx`, `app/twitter-image.tsx`, `share-card.tsx` — generated 1200×630 share cards.
- `app/icon.svg` — favicon/monogram.
- `app/sitemap.ts`, `app/robots.ts` — crawl metadata.
- `app/fonts/` — self-hosted WOFF2 subsets plus the mono TTF used to render the share card.
- `tests/portfolio.e2e.test.mjs` — Playwright browser contract for theme, overflow, motion, semantics, icons, CTA and SEO.

## Tasks

- [x] **1. Foundation**
  - Install `simple-icons`; add local font files and OFL licences.
  - Define CSS tokens for both themes, base typography, focus styles, reduced-motion rules and page fade.
  - Wire Instrument Sans and Fragment Mono through `next/font/local` in `layout.tsx`.
  - Add the pre-paint theme script and `suppressHydrationWarning`.
  - Check: `pnpm build` succeeds; toggling `data-theme` switches every token.

- [x] **2. Content and icon registry**
  - Define `Profile`, `ExperienceEntry`, `Project`, `SkillGroup`, `Certification`, `Repo` and `SocialLink` types.
  - Fill every section with the approved structure; mark factual gaps as `[PLACEHOLDER]`.
  - Map real technology names in `data/tech-icons.ts` to `simple-icons` exports; unknown names fall back to text.
  - Check: TypeScript accepts the data and no component hard-codes profile copy.

- [x] **3. Header and hero**
  - Sticky 52px bar, mono handle left, 44px theme toggle right with sun/moon inline SVGs.
  - Hero: name, role, three-sentence bio, location, four social links.
  - Check: keyboard tab order, visible focus, no overflow at 320px.

- [x] **4. Body sections**
  - Now: short accent-marked paragraph.
  - Experience: timeline rule, role/org/dates, 2–3 bullets.
  - Projects: hairline rows, problem/outcome, mono architecture aside, stack chips with tech icons, Live/GitHub links.
  - Skills: four grouped rows with icon + text chips.
  - Certifications, pinned repos, contact CTA and footer.
  - Check: mobile collapse of rail, wrapping chips, no duplicate card treatment.

- [x] **5. SEO and share assets**
  - Metadata, canonical, Open Graph/Twitter images using the same type, SVG icon, sitemap, robots, Person JSON-LD.
  - Check: generated tags appear in page source and `/sitemap.xml` resolves.

- [x] **6. Verify and polish**
  - Run `pnpm lint` and `pnpm build`.
  - Screenshot dark/light at 360px and 1440px with installed Chrome; inspect spacing, contrast and overflow.
  - Run Lighthouse mobile and fix any measured shortfall below 95.
  - Commit the finished site.
  - Result: `pnpm lint` clean, `pnpm build` clean, `pnpm test:e2e` 10/10.
  - Result: Lighthouse mobile 96–97 performance / 100 accessibility / 100 best practices / 100 SEO; LCP 2.6–2.7s, CLS 0.
  - Result: dark/light screenshots at 360px and 1440px, zero horizontal overflow.
  - Result: production HTML runs the theme bootstrap inline before page content; first painted frame matches the stored theme.

## Verification Commands

```bash
pnpm lint
pnpm build
pnpm dev
```

Browser checks: 320/360/768/1440 widths, both themes, keyboard-only pass, reduced-motion emulation, Lighthouse mobile/desktop.

## Review Focus

- Long email, URLs or tech names must wrap without creating sideways scroll on mobile.
- The rail must become a plain label above content below 640px, not a squeezed two-column layout.
- Theme choice must survive reload with no flash of the wrong theme.
- No icon or link may rely on colour alone; every external destination needs a discernible label.
- Placeholder copy must read as placeholder, not as a factual claim about employment or projects.
