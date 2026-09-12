import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const origin = 'https://drvusalagasimova.com';
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const resolveFile = url => path.join(root, decodeURIComponent(url.pathname), url.pathname.endsWith('/') ? 'index.html' : '');
const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'}[char]));

for (const href of urls) {
  const url = new URL(href);
  const html = fs.readFileSync(resolveFile(url), 'utf8');
  assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, `${href}: expected one h1`);
  assert.ok(html.includes(`<link rel="canonical" href="${href}">`), `${href}: incorrect canonical`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${href}: duplicate IDs`);
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const target = new URL(match[1], url);
    if (target.origin !== origin) continue;
    const file = resolveFile(target);
    assert.ok(fs.existsSync(file), `${href}: missing ${target.pathname}`);
    if (target.hash) {
      const destination = fs.readFileSync(file, 'utf8');
      assert.ok(destination.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${href}: missing fragment ${target.href}`);
    }
  }
  if (url.pathname.endsWith('/bac-therapy.html')) {
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1];
    const faq = JSON.parse(json)['@graph'].find(item => item['@type'] === 'FAQPage');
    const questions = [...html.matchAll(/class="faq-q"/g)];
    assert.equal(faq.mainEntity.length, questions.length, `${href}: FAQ count mismatch`);
    for (const item of faq.mainEntity) {
      assert.ok(html.includes(escape(item.name)), `${href}: schema question missing from page`);
      assert.ok(html.includes(`<p>${escape(item.acceptedAnswer.text)}</p>`), `${href}: schema answer missing from page`);
    }
  }
}
for (const lang of ['', '/ru', '/en', '/de']) {
  for (const page of ['bac-therapy', 'autism-support', 'social-communication', 'behavioural-support']) {
    assert.ok(urls.includes(`${origin}${lang}/${page}.html`), `Missing localized route ${lang}/${page}`);
  }
}
console.log(`Checked ${urls.length} pages: local links, fragments, canonical URLs, headings and BAC FAQ schema.`);
