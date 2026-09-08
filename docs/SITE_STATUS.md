# Site status

Updated 8 September 2026. The website remains undeployed. This document and the README replace the old prototype completion summaries in `docs/history/`.

## Implemented

- Six routes: Home, Services, About, Contact, Privacy and Service Terms.
- Responsive service and values grids, shared CTA buttons, visible link/focus states, simplified primary navigation and a skip link.
- One page-level H1 per page; the wordmark links home.
- Page-specific titles/descriptions through Astro.props, Open Graph metadata and a supplied SVG favicon.
- Optional SITE_URL configuration supplies canonical and Open Graph URLs without a placeholder domain.
- Service outcomes appear before expandable technical checks. Boundaries remain visible without expansion. Package prices and allowances are unchanged.
- Contact uses one email action plus a copyable address, with three initial prompts and subsequent engineer-led triage. It has no form backend, analytics integration or booking system.
- About copy describes the one-person business and relevant experience already recorded in LAUNCH_SCOPE.md. No name, qualification, tenure or geographical area has been invented.
- Generated node_modules and .astro files are removed from version control, with ignore rules retained. The dependency lockfile is unchanged.
- Launch scope corrected for published pricing, attended access, memory/disk checks, container state changes and NAS limits. Historical pricing research is labelled as historical, not reverified market evidence.

## Validation performed

- Clean dependency installation with `npm ci --ignore-scripts` and successful production build of all six routes.
- Generated HTML checked for unique populated titles, meta descriptions, one H1 per page, skip-link targets and resolvable local links/assets.
- Checked six service disclosures, visible package boundaries and exactly one mailto action.
- Local homepage returned HTTP 200.
- Configured-domain build checked for canonical and Open Graph URLs on all six routes; local build omits those URLs when SITE_URL is absent.
- No browser interaction, screenshot, mobile viewport or live email-delivery testing was performed.

## Still required before launch

1. Choose the domain and hosting, then build with SITE_URL set to the production origin. The current routes assume deployment at the domain root.
2. Confirm the public engineer name and optional biography. The operational scope says not to publish a geographic service area yet.
3. Finalise Privacy and Service Terms. They still contain effective-date, payment-method, interest-rate and jurisdiction placeholders. Confirm actual data handling, providers, retention, payment/cancellation arrangements and the final wording before using these drafts with customers. No legal-compliance review was performed.
4. Review the current dependency audit: three affected packages (Astro and sharp: high; esbuild: low). `npm audit` reported no automatic fix for the existing dependency tree. The advisories have different prerequisites; this static site does not establish that all are exploitable. A dependency upgrade and focused verification remain outstanding.
5. Verify the rendered site at mobile and desktop sizes and test the email handoff on the chosen launch setup.

## Documentation ownership

Update README for setup/routes, LAUNCH_SCOPE for the operating offer, and this file for verification and unresolved decisions. PRICING_RESEARCH remains a research record; recheck its external sources before relying on current competitor pricing. Historical summaries must not be used as current implementation instructions.
