# Ozai Crawler Service

Petit service Express + Playwright pour extraire nom, email et image depuis une URL fournisseur.

## Déploiement local

```bash
npm install
npx playwright install chromium
node server.js
# http://localhost:3000/crawl?url=https://example.com
```

## Déploiement sur Render

1. Poussez ce repo sur GitHub
2. Sur Render.com → New Web Service
3. Build Command : `./.render-build.sh`
4. Start Command : `npm start`