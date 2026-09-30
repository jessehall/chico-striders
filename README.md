# Chico Striders homepage

A responsive homepage redesign for Chico Striders, prepared for GitHub Pages. Plain HTML, CSS, and JavaScript. No build step is needed.

## Preview

Run `python3 -m http.server 4173` from this directory and open `http://localhost:4173`.

## Publish to GitHub Pages

Upload the contents of this directory to the root of the intended GitHub repository. Include `.github/workflows/pages.yml` and `.nojekyll`.

In the repository's Settings > Pages, choose **GitHub Actions** as the source. Push to the `main` branch or run the workflow manually. The workflow publishes only the HTML, CSS, JavaScript, and assets.

All local asset links use relative paths so the homepage works under either a repository path or a custom domain. Do not add a CNAME or change the current domain until the domain migration is requested.

## Scope and content

Only the homepage has been redesigned. Program, coach, event, result, membership, sponsor, scholarship, and contact links lead to existing public club pages or services. Email links open the visitor's email app. FAQs work without JavaScript; the mobile menu and manually controlled photo carousel use JavaScript. The carousel supports previous/next buttons and arrow keys and does not automatically advance.

The copy is based on the current public site reviewed September 29, 2026. Dates and pricing are intentionally omitted because some published information is dated. Families are prompted to confirm current details. No new registration or donation service was created.

## Source assets

Real club photos reused from the requested original site:

- `assets/logo.jpg`: https://static.wixstatic.com/media/17a3f8_2602dfeb89cb4de388e7ad279f286542~mv2_d_1500_1200_s_2.jpg, the official logo from the homepage. Used in the header, footer, and favicon without redrawing or recoloring.
- `assets/team-running.jpg`: https://static.wixstatic.com/media/17a3f8_d6178342fe8741559957023392534bac~mv2.jpg, from the original homepage carousel.
- `assets/team-together.jpg`: https://static.wixstatic.com/media/17a3f8_5f64176ade7b4bee8e8522bf876c057e~mv2.jpeg, from the original homepage carousel.
- `assets/running.jpg`: https://static.wixstatic.com/media/17a3f8_77dfbf7a58c6478f9b20cdb0874288da~mv2.jpg, from The Complete Strider page.

Fonts: Barlow Condensed and DM Sans, served by Google Fonts with system fallbacks. The excluded rear-facing team photos are not included in this project.
