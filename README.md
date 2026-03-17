# Transport Website

Production-ready logistics and freight forwarding website built with **React 18**, **Vite 5**, and **TypeScript**. Inspired by modern logistics company sites (e.g. Om Freight–style layout and content).

## Features

- **React 18** + **TypeScript** + **Vite** for fast dev and optimized production builds
- **React Router** for navigation and future sub-pages
- **Responsive layout**: mobile-first, breakpoints for tablet and desktop
- **Accessibility**: skip link, semantic HTML, ARIA where needed, focus styles
- **SEO**: meta description, theme-color, semantic headings
- **CSS**: variables, no runtime CSS-in-JS, minimal cascade

## Commands

| Command     | Description                |
|------------|----------------------------|
| `npm run dev`     | Start dev server (e.g. http://localhost:5173) |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                    |

## Project structure

```
transport-website/
├── public/           # Static assets (favicon, etc.)
├── src/
│   ├── components/   # Header, Footer, Hero, Services, Values, Disclaimer
│   ├── pages/        # Home, Services
│   ├── App.tsx       # Routes and skip link
│   ├── main.tsx      # Entry, Router, global CSS
│   └── index.css     # Global styles and CSS variables
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Customization

- **Branding**: Update `index.html` title and meta, favicon in `public/`, and copy in `Header` / `Footer` / `Hero`.
- **Colors/fonts**: Edit `:root` in `src/index.css` (e.g. `--color-primary`, `--font-sans`, `--font-display`). Fonts are loaded from Google Fonts in `index.html`.
- **Content**: Edit `src/components/*.tsx` and `src/pages/*.tsx` for copy and links.

## Deploy

After `npm run build`, deploy the contents of the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.). For SPA routing, configure redirects so all routes serve `index.html`.
