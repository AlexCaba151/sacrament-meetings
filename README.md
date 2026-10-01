# Sacrament Meeting Planner

WDD 430 Week 02 project using Next.js, TypeScript, Tailwind CSS, App Router, typed data models, reusable components, client navigation, optimized font/image, and API routes.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Required routes

- `/`
- `/meetings`
- `/meetings/1`
- `/meetings/current`
- `/api/meetings`
- `/api/meetings?date=2026-05-03`
- `/api/meetings/1`
- `/api/meetings/abc` → 400

## Checks

```bash
npm run lint
npm run build
```

For deployment, set `NEXT_PUBLIC_SITE_URL` to the deployed site's URL if the hosting environment does not provide it automatically.
