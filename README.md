# Vüsalə Qasımova website

Static website for the neuropsychology practice in Baku, with Azerbaijani at `/` and Russian, English and German at `/ru/`, `/en/` and `/de/`.

## Build and preview

Requires Node.js and npm.

```sh
npm run build
npm run check:html
npm run check:site
python3 -m http.server 8765
```

Open `http://localhost:8765/`. Serve the site at the web root because asset and navigation URLs are absolute paths.

`build-site.mjs` generates the committed HTML and sitemap. Edit `care-content.mjs` for the homepage positioning, BAC guide, support pages and care pathway. `script.js` supplies legacy shared translations and the remaining practice information; `articles.mjs` supplies the resource articles. Interactive behaviour is in `client.js`, and shared styling is in `styles.css`. Rebuild after copy or template changes; update `ASSET_VERSION` when shared CSS or JavaScript changes.

## Content

BAC remains a prominent service in the homepage hero, navigation and dedicated landing page. Separate pages cover autism support, social communication and behavioural support. All four languages share the same routes, internal links and FAQ structure. Clinical goals are individualized; enquiry topics are not presented as proof of BAC efficacy. Do not add guaranteed outcomes or unverified qualifications.

NICE CG170 informs the general autism-support framing. Manufacturer material is used for the technical description of BAC, not to substantiate condition-specific efficacy. The new service pages do not claim a medical review or a new certification.

## Validation and publishing

`check:html` checks generated HTML, excluding the provider-supplied Yandex verification document. `check:site` checks sitemap routes, local links and fragments, canonical URLs, heading/ID integrity and visible BAC FAQ agreement with structured data.

Commit generator inputs and regenerated HTML together, then push to the configured GitHub remote. GitHub Pages serves the committed static output; `CNAME` preserves the custom domain.

## Contact forms

Contact and booking forms use the existing Web3Forms setup in `client.js`. Preview checks should exercise opening, validation and closing without sending test enquiries to the practice.
