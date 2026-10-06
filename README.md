# Michelle's Portfolio Starter 🎀

A pink, personal React + TypeScript portfolio designed for GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser.

## The easiest way to update your info

Most text lives in:

```text
src/data/portfolio.ts
```

Update that file first. You usually will not need to touch the layout code for normal content changes.

## Add your photo

1. Put an image in `public/`, for example `public/michelle.jpg`.
2. In `src/App.tsx`, replace the `photo-placeholder` block with:

```tsx
<img className="profile-photo" src="./propic.png" alt="Michelle Sun" />
```

3. Add this to `src/styles.css`:

```css
.profile-photo {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}
```

## Before you publish

Update these especially:

- current year in school / graduation date
- whether the Business minor is still current
- newest internships / job experience
- current WCS title
- your 3–5 strongest projects + live/demo/GitHub links
- personal email if you do not want your school email long-term
- a real portrait / candid / creative image
- optional resume PDF in `public/`

I intentionally left your phone number off the public site starter.

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload/push this project to the `main` branch.
3. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push to `main` again if needed. The included workflow will build and deploy the site.

The Vite config uses relative asset paths, so it can work at either:

- `username.github.io`
- `username.github.io/repository-name/`

## Design direction

The current look intentionally mixes:

- light blush pink
- editorial serif headings
- scrapbook / polaroid touches
- tiny hearts + doodles
- rounded modern cards
- personal copy instead of corporate résumé language

It should feel feminine and distinctly *Michelle* without looking like a generic pink template.
