// Script to trigger IndexNow API for all AusPainter URLs directly to Bing & Yandex

const HOST = 'www.auspainter.com';
const KEY = 'b8860b2026indexnowkeyauspainting';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/service/interior-painting`,
  `https://${HOST}/service/exterior-painting`,
  `https://${HOST}/service/commercial-strata`,
  `https://${HOST}/service/heritage-restoration`,
  `https://${HOST}/service/pre-sale-rental`,
  `https://${HOST}/service/anti-mould-treatment`,
  `https://${HOST}/project/woollahra-heritage`,
  `https://${HOST}/project/marrickville-weatherboard`,
  `https://${HOST}/project/vaucluse-waterfront`,
  `https://${HOST}/sitemap-html`,
];

async function submitIndexNow() {
  console.log(`Submitting ${URLS.length} URLs for AusPainter.com to IndexNow (Bing/Yandex)...`);
  
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`HTTP Status: ${res.status}`);
    const text = await res.text();
    console.log(`Response: ${text || (res.status === 200 || res.status === 202 ? 'Success (Accepted by Bing/IndexNow)' : 'No response text')}`);
  } catch (err) {
    console.error('IndexNow ping error:', err.message);
  }
}

submitIndexNow();
