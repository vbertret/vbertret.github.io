# vbertret.github.io

Personal academic website of **Victor Bertret** — AI & Control Engineer, PhD in Applied Mathematics.

🌐 Live at **https://vbertret.github.io**

Built with [Astro](https://astro.build). Research entries are written as Markdown content collections with LaTeX math support (via `remark-math` + `rehype-katex`).

## Structure

```text
├── public/
│   ├── images/          # figures used across the site
│   └── pdfs/            # slide decks & teaching material (served at /pdfs/...)
├── src/
│   ├── components/      # BaseHead, Header, Footer, ...
│   ├── content/
│   │   └── research/    # one Markdown file per research entry
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro      # home
│   │   ├── about.astro      # bio
│   │   ├── teaching.astro   # teaching material
│   │   └── research/        # research index + [id] dynamic pages
│   ├── consts.ts        # site title & description
│   └── content.config.ts   # research collection schema
├── astro.config.mjs
└── package.json
```

Pages live in `src/pages/` (each file is a route). Research pages under `/research/<id>` are generated from the Markdown files in `src/content/research/` via the `[id].astro` dynamic route.

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deploying   |

## Adding a research entry

1. Create a new Markdown file in `src/content/research/`, following the schema in `src/content.config.ts` and an existing entry as a template.
2. Put any linked PDF in `public/pdfs/` and figures in `public/images/`, referencing them by absolute path (e.g. `/pdfs/my-talk.pdf`).
3. Run `npm run build` to check it compiles, then commit and push.

## Deployment

Deployment is automatic. Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/astro.yml`), which builds the Astro site and publishes it to
GitHub Pages. No manual step is required.
