# CLAUDE.md — Portfolio Mahmoud Chater

Contexte projet pour Claude Code. À lire avant toute génération de code.

## But du projet
Portfolio **one-page** pour un **Technicien Support Informatique N2/N3** (cible recruteurs IT / ESN / DSI grands groupes). Sobre, pro, animé, bilingue FR/EN, déployé sur Vercel.

> Le brief détaillé (sections, animations, données complètes) est dans `portfolio-mahmoud-init.md`. Les données du CV sont **déjà structurées** dans `content/portfolio.ts` — ne pas les ré-inventer, les importer.

## Stack imposée
- Next.js 14 (App Router, TypeScript, `/app`)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations principales)
- GSAP + ScrollTrigger (uniquement timeline draw + parallax léger, optionnel)
- lucide-react (icônes)
- next/font (Inter + Space Grotesk)

## Arborescence cible
```
app/
  layout.tsx          # lang, fonts, métadonnées globales, JSON-LD Person
  page.tsx            # assemble les sections
  sitemap.ts
  robots.ts
  globals.css
components/
  navbar.tsx          # sticky, blur au scroll, toggle langue + thème
  hero.tsx            # effet machine à écrire sur les rôles
  about.tsx           # stats animées (compteurs)
  skills.tsx          # clusters de badges, stagger
  timeline.tsx        # expériences, ligne tracée au scroll
  education.tsx
  contact.tsx
  footer.tsx
  ui/                 # composants shadcn
content/
  portfolio.ts        # DONNÉES BILINGUES (déjà fournies)
lib/
  i18n.ts             # hook/contexte de langue (fr | en), défaut fr
public/
  cv-mahmoud-chater.pdf   # placeholder à remplacer
  og-image.png            # placeholder à générer
```

## Règles de design
- Thème sombre par défaut (`#0B1120`), mode clair dispo.
- Accent cyan `#06B6D4`, secondaire bleu `#3B82F6`.
- Glassmorphism léger, `rounded-2xl`, hover `translateY(-4px)` + glow accent.
- Lisibilité avant esthétique. Contraste AA minimum.
- Background : dot-grid animé discret + halo radial cyan derrière le hero.

## Règles d'animation
- Uniquement `transform` / `opacity` (pas de reflow).
- Respecter `prefers-reduced-motion` (atténuer/désactiver).
- Reveal au scroll via Framer `whileInView` + `viewport={{ once: true }}`.
- Timeline : ligne qui se trace au scroll, cartes slide-in alternées (desktop) / colonne (mobile).

## SEO (obligatoire)
- `generateMetadata` (title/desc ciblés "Technicien Support Informatique N2/N3 — Mahmoud Chater")
- Open Graph + Twitter cards + image OG
- URL canonique, `sitemap.ts`, `robots.ts`
- JSON-LD `Person` (jobTitle, address, email, knowsAbout, alumniOf, sameAs LinkedIn)
- `next/image` + alt, `next/font`, `lang` correct, un seul `h1`, Core Web Vitals

## i18n
- Langue par défaut : `fr`. Toggle `fr | en` en navbar.
- Toutes les chaînes viennent de `content/portfolio.ts` (clés `fr` / `en`). Aucun texte en dur dans les composants.

## Qualité
- Code typé, propre, pas de dépendances superflues.
- Ton du contenu : pro, technique, confiant. Pas de superlatifs marketing.

## Commandes
- `npm run dev` doit fonctionner immédiatement après génération.
- README court avec instructions de déploiement Vercel.
