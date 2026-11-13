# Elettranova Engineering — website

Static replica of [elettranova.com](https://www.elettranova.com/) (originally a Squarespace site), rebuilt as plain HTML, CSS and a little JavaScript. No build step and no dependencies.

## Structure

```
index.html            Home
about/index.html      About
contact/index.html    Contact
assets/css/style.css  All styles (responsive: desktop, tablet <= 768px, stacked <= 640px)
assets/js/main.js     Mobile menu + contact form
assets/img/           Logo, home banner, leadership photo
assets/fonts/         Self-hosted web fonts
```

All links are relative, so the site works from the domain root, from a sub-path (e.g. GitHub Pages) or opened straight from disk.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Differences from the original

- **Fonts.** The original uses Adobe Fonts licensed through Squarespace (Futura PT, Futura PT Condensed, Calluna), which cannot be redistributed. This copy uses the closest open-source equivalents — Jost, Barlow Condensed and Crimson Pro (SIL Open Font License) — scaled so line breaks and layout match the original.
- **Contact form.** Squarespace handled form submissions on its servers. Here the form validates the same required fields and then opens the visitor's email app with a pre-filled message to info@elettranova.com. To collect submissions without email, point the form at a form backend in `assets/js/main.js`.
- **"Learn More" button.** On the original it links to a page that no longer exists (`/about-harris`, a 404); here it goes to the About page.
