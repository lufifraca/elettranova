# Elettranova Engineering — website

Static website for Elettranova Engineering, built as plain HTML, CSS and a little JavaScript. No build step and no dependencies. It started as a replica of the original Squarespace site at [elettranova.com](https://www.elettranova.com/) and has since been redesigned around the company's services.

## Structure

```
index.html            Home
about/index.html      About
contact/index.html    Contact
assets/css/style.css  All styles (responsive down to phone widths)
assets/js/main.js     Mobile menu + contact form
assets/img/           Logo and home banner
assets/fonts/         Self-hosted web fonts
```

All links are relative, so the site works from the domain root, from a sub-path (e.g. GitHub Pages) or opened straight from disk.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Notes

- **Fonts.** Jost and Crimson Pro, self-hosted under the SIL Open Font License.
- **Contact form.** There is no form backend: the form validates the required fields and then opens the visitor's email app with a pre-filled message to info@elettranova.com. To collect submissions without email, point the form at a form backend in `assets/js/main.js`.
- **Leadership section.** Removed for now; the earlier version (with the photo) is in the git history.
