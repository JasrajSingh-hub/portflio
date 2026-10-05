# Jasraj Singh Bhatia — Design Notebook

A responsive developer portfolio built with React and Vinext. The design uses local Inter, IBM Plex Mono and Caveat fonts, a warm paper palette, SVG architecture diagrams and a generated delivery-vehicle sketch.

## Content

- `app/projects.ts`: project content, technology stacks and toolbox groups.
- `app/page.tsx`: home-page sections and contact availability.
- `app/work/[slug]/page.tsx`: project case studies.
- `app/sketches.tsx`: architecture and workflow diagrams.
- `app/shared.tsx`: navigation, footer and reduced-motion-aware drawing effects.
- `app/globals.css`: shared styles and responsive rules.

The uploaded design brief is the source for the portfolio's factual claims. Detailed case-study prose expands the supplied architecture and is not a report of independently verified results. The last three projects have intentionally incomplete case studies because only project names and roles were provided.

Contact addresses, LinkedIn and GitHub URLs, repository URLs and the original résumé were not supplied. The corresponding items are visibly unavailable; no invented external destinations are included.

## Development

Use the project package scripts with the installed package manager. `dev` runs the development server; `build` creates the production Worker output. Run `node node_modules/typescript/bin/tsc --noEmit` for a type check.

The application has no forms, credentials, database, tracking or external API integrations. Project and contact details are edited in source. Fonts and imagery are served locally.
