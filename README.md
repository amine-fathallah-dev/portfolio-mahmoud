# Portfolio — Mahmoud Chater

Portfolio one-page bilingue FR/EN pour Technicien Support Informatique N2/N3.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion
- lucide-react
- next-themes

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement Vercel

1. Pousser le repo sur GitHub
2. Importer le projet sur [vercel.com](https://vercel.com)
3. Framework preset : **Next.js** (détecté automatiquement)
4. Aucune variable d'environnement requise
5. Cliquer **Deploy**

Le domaine de production sera `https://mahmoud-chater.vercel.app` — mettre à jour la constante `siteUrl` dans `app/layout.tsx` si le domaine diffère.

## Personnalisation

- **Contenu** : modifier `content/portfolio.ts` (source unique, FR + EN)
- **CV PDF** : remplacer `public/cv-mahmoud-chater.pdf`
- **OG image** : remplacer `public/og-image.svg` ou `.png`
- **Couleurs** : ajuster les variables CSS dans `app/globals.css`
# portfolio-mahmoud
