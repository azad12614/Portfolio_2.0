# Abdullah Al Azad, Portfolio 2.0

Personal portfolio of a full-stack developer. One page with my projects, skills, experience, awards and writing.

[Live site](https://azad12614.onrender.com/) | [GitHub repo](https://github.com/azad12614/Portfolio_2.0)

## Sections

- **Hero and About**: short introduction and current role.
- **Skills and Experience**: skills grouped by area, with a timeline of work and education. Links to the resume PDF.
- **Projects**: filterable cards (All, Full Stack, Frontend, Machine Learning) with live and source links.
- **Awards**: certificates and achievements in a slider.
- **Blog**: latest posts from my blog feed.
- **Contact**: email, phone, location and social links.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19, plain CSS, Swiper 14 |
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

Vite 8 needs Node `^20.19.0` or `>=22.12.0`. Node 21 is not supported.

## Structure

```
src/
  components/   page sections (Hero, Project, Skills, Blog, ...)
  pages/        HomePage and Resume
  assets/       images, icons, resume PDF
public/
  og-image.png  link preview card (1200 x 630)
```

## License

MIT. See `LICENSE`.
