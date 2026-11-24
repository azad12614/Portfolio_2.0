# Abdullah Al Azad, Portfolio 2.0

Personal portfolio of a full-stack developer. One page with my projects, skills, experience, awards and writing.

[Live site](https://azad12614.me/) | [GitHub repo](https://github.com/azad12614/Portfolio_2.0)

## Sections

- **Hero and About**: short introduction, highlights and availability.
- **Experience**: one timeline of work, teaching and education, with details on demand.
- **Skills**: grouped in layers, from frontend to infrastructure.
- **Projects**: 7 project cards with a case study on hover, focus or tap, then an archive of smaller builds.
- **Problem solving**: problems solved per platform and a chart of 14 programming contests.
- **Awards**: award cards and certificates, each opens full size.
- **Blog**: the latest posts from my blog.
- **Contact**: email, phone, location and profiles, each with a copy button.

Dark and light themes. The design notes live outside this repo.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19, plain CSS |
| Build | Vite 8 |
| Lint | ESLint 10 (flat config) |
| Hosting | Render |

## Run it

```bash
npm install
npm run dev      # Vite dev server, http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
npm run lint
```

Node 24 LTS. The exact version is pinned in `.node-version` (Render reads it).

## Structure

```
src/
  components/   page sections (Hero, Experience, Projects, ProblemSolving, ...)
  data/         content: experience, projects, contests, profile links
  pages/        HomePage
  assets/       images, icons, resume PDF
public/
  favicon.ico   site icon
  og-image.png  link preview card (1200 x 630)
```

## License

MIT. See `LICENSE`.
