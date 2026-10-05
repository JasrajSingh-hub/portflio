# Open the portfolio in VS Code

This download contains the source code and local assets for Jasraj Singh Bhatia’s portfolio.
Source commit: 2e6ecc4c73fdda7916427c888aa6892f1ae4dbe8

## Start locally

1. Install Node.js version 22.13.0 or later if it is not installed already.
2. Extract the ZIP.
3. In VS Code, choose File > Open Folder and select the jasraj-portfolio folder containing package.json.
4. Choose Terminal > New Terminal and run:

```sh
npx pnpm@11.25.0 install --frozen-lockfile
npx pnpm@11.25.0 dev
```

Open the local address printed in the terminal (the source sets port 5173 for local development). Keep the terminal running while you edit.
The first command needs an internet connection to download packages. You do not need an API key for this portfolio.

On Windows, if PowerShell blocks npx.ps1, use the Command Prompt terminal profile in VS Code, or run npx.cmd in place of npx.

## Files to edit

- app/page.tsx — home-page content and contact placeholders.
- app/projects.ts — project descriptions, case-study content and skills.
- app/globals.css — colors, fonts, layout, spacing and responsive styles.
- app/sketches.tsx — architecture and workflow diagrams.
- app/shared.tsx — navigation, résumé placeholder, footer and animation behavior.
- app/work/[slug]/page.tsx — project case-study layout.
- public/images/ — project image assets.
- public/fonts/ — fonts used by the design.

## Check and build

```sh
npx pnpm@11.25.0 exec tsc --noEmit
npx pnpm@11.25.0 build
```

This is a React/Vinext project, not a standalone HTML file. The production build targets a Cloudflare Worker. Its original build configuration is included. Do not run the Linux-only install:ci script for ordinary local setup; use the install command above.

The original source passed type checks and a production build, and its layout was reviewed at desktop, tablet and mobile widths. A fresh installation on your Windows computer has not been tested here.

Contact addresses, résumé and repository links still need to be supplied. The three additional project case studies await detailed content.
