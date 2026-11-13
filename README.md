# Screen Mirroring・Air Cast TV — promo site

React 18 + TypeScript + Vite 6 + React Router 7 (pnpm).

## Run
pnpm install
pnpm dev            # http://localhost:5173/
pnpm build          # → dist/

## Where things live
- `src/app/content/site.ts` — every fact (App ID, email, operator, features, FAQ, iPhone Duo copy, specs)
- `src/app/content/legal.ts` — Privacy / Terms, the owner's texts VERBATIM
- `src/styles/index.css` — tokens in `:root`, all layout
- `public/images/` — WebP mockups and scenes

## Deploy (GitHub Pages)
Push to `main` → `.github/workflows/deploy.yml` builds and publishes (404.html = index.html).
Pages → Source must be **GitHub Actions**.

Domain: https://screenmirroring.mobile (`public/CNAME`, `base: "/"`).
**base / domain trap:** if the domain is ever removed, set `base: "/scrmirrv2/"` and delete `public/CNAME`
in the same commit, or the site goes white.

## Rules
- Every image `src` goes through `img()` (`utils/img.ts`).
- Reveal start states live under `html.js`; `useReveal` fallbacks are gated on geometry, so
  nothing stays hidden in background tabs.
- No smooth-scroll library; the header is always sticky.
