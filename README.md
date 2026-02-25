# Imwera Coffee

Website for [Imwera Coffee](https://imweracoffee.com) — an independent green coffee brokerage connecting international buyers with high-quality coffees sourced through trusted partners across Kenya, Ethiopia, and Uganda.

## Tech Stack

- **React 18** with TypeScript
- **Vite** — build tooling and dev server
- **React Router** — client-side routing
- **Tailwind CSS** — styling
- **shadcn/ui** — UI component library
- **Framer Motion** — animations
- **React Helmet Async** — SEO head management
- **EmailJS** — contact form delivery
- **Vitest** — unit testing

## Getting Started

Requires Node.js 18+ and npm (or bun).

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server at `localhost:5173` |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests with Vitest |
| `npm run generate:sitemap` | Regenerate `public/sitemap.xml` |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── ui/           # shadcn/ui base components
├── data/             # Static data: company, origins, insights, services
├── hooks/            # Custom React hooks
├── lib/              # Utilities and analytics helpers
├── pages/            # Page components (one per route)
└── generate-sitemap.ts  # Sitemap generation script
public/
├── robots.txt
└── sitemap.xml       # Generated — do not edit manually
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/brokerage-sourcing` | Brokerage & Sourcing |
| `/origins` | Origins overview |
| `/origins/:slug` | Origin detail (kenya, ethiopia, uganda) |
| `/insights` | Market Insights listing |
| `/insights/:slug` | Insight article |
| `/contact` | Contact |

## Sitemap

The sitemap is generated from the data files in `src/data/`. Run the following command after adding new origins or insight posts:

```sh
npm run generate:sitemap
```

This outputs `public/sitemap.xml`, which is referenced in `public/robots.txt`.

## Contact

**Imwera Coffee**
Nairobi, Kenya
trading@imweracoffee.com
