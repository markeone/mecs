# ME Computer Services website

A six-page, static Astro website for remote-first, fixed-price IT support. Source is in `src/`; assets are in `public/`. This repository is not yet a deployed service.

## Development

Use Node.js 22 LTS (22.12 or newer) and npm. Install project dependencies with `npm ci`, then run `npm run dev`. Run `npm run build` to create `dist/`; `npm run preview` serves the production output locally. No global package installation is needed.

## Pages

- `/`: positioning, prices, process and service overview
- `/services/`: six packages, outcomes, expandable checks and boundaries
- `/about/`: one-person business and documented technical experience
- `/contact/`: email enquiry and follow-up process; no form backend
- `/privacy/` and `/terms/`: unfinished policy drafts requiring owner decisions

## Configuration

Set `SITE_URL` to the chosen production origin when building for deployment. Without it, canonical and Open Graph URL tags are omitted. No production domain is assumed. Hosting must serve `dist/` at the domain root and resolve directory routes (for example `/services/` to `/services/index.html`). Subdirectory hosting is not configured.

Page metadata is passed through `Astro.props` in `src/layouts/default.astro`. Shared styling lives in `src/styles/theme.css`. The favicon is `public/favicon.svg`.

## Content maintenance

Keep package names, prices and allowances in the homepage, services, contact and `docs/LAUNCH_SCOPE.md` aligned. When business scope changes, update those together. The contact email appears on the contact page. Do not invent qualifications, service areas or business policies.

`node_modules/`, `.astro/` and `dist/` are generated and must remain untracked. Commit `package-lock.json` for reproducible installs.

## Documentation

- [Current status and launch decisions](docs/SITE_STATUS.md)
- [Operational scope](docs/LAUNCH_SCOPE.md)
- [Historical pricing research](docs/PRICING_RESEARCH.md)
- [Original prototype records](docs/history/) — historical only, including superseded build and prop-handling claims
