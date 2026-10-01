# Roopesite

A geography-themed portfolio built with React and React-Leaflet.

## Requirements

- Node.js 24.x
- npm 11.x

The Node version is recorded in `.nvmrc`.

## Run locally

```powershell
nvm use 24.21.0
npm install
npm start
```

Open the local URL printed by Vite, usually http://localhost:5173.

## CARTO API key

Create a `.env` file in the project root for local development:

```env
VITE_CARTO_API_KEY=cb1_43ib_2_9cda1887c568a253127229ad
```

For Cloudflare Pages, add `VITE_CARTO_API_KEY` as a build environment variable in both Preview and Production settings, then redeploy. Vite embeds `VITE_` variables in the client bundle, so restrict the CARTO key to your site domains.

## Other commands

```powershell
npm test
npm run build
npm run preview
```
