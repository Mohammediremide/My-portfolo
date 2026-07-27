# Odewunmi Mohammed — Developer Portfolio

A production React 19 + Vite portfolio built to teach React as much as to
showcase it. Every component is commented to explain why it exists, why
each hook is used, and why each piece of state lives where it does.

## Stack

React 19, Vite, CSS3 (no Tailwind), Framer Motion, Typed.js, EmailJS,
React Icons, Context API.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Before you deploy

1. **Add your photos.**
   - `src/assets/images/daniel-collins.jpg` — Hero section, full-bleed portrait.
   - `src/assets/images/daniel-collins-about.jpg` — About section, square crop.
   - `src/assets/images/projects/*.jpg` — one image per project, filenames already referenced in `src/data/projects.js`.

2. **Add your résumé.** Place a `resume.pdf` in the `public/` folder — the Hero's "Download CV" button links to `/resume.pdf`.

3. **Connect EmailJS.** In `src/components/Contact/Contact.jsx`, replace:
   - `YOUR_EMAILJS_SERVICE_ID`
   - `YOUR_EMAILJS_TEMPLATE_ID`
   - `YOUR_EMAILJS_PUBLIC_KEY`

   with the values from your EmailJS account (emailjs.com). Your EmailJS template should expect `name`, `email`, and `message` fields.

4. **Update your real links and numbers.**
   - Social links (GitHub/LinkedIn/Twitter) appear in `Hero.jsx` and `Footer.jsx`.
   - Project links live in `src/data/projects.js`.
   - Stat counters (years, students, projects) live in `src/data/skills.js` under `statHighlights`.
   - Testimonials in `src/data/testimonials.js` are placeholder quotes — swap in real feedback before launch.

## Project structure

```
src/
├── assets/        Images, icons, logo
├── components/    One folder per UI piece, each with its own .jsx + .css
├── context/       ThemeContext (dark/light mode + localStorage)
├── data/          Plain data files (skills, projects, services, experience, testimonials)
├── hooks/         Reusable logic (useCountUp)
├── App.jsx        Composes every section
├── App.css        Shared section/layout styles
├── index.css      Design tokens, type scale, reset
└── main.jsx       Entry point
```

## Build

```bash
npm run build
npm run preview
```
