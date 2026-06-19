# Portfolio — Mahmoud Chater · Technicien Support Informatique N2/N3

> Fichier d'initialisation pour Claude Code. Objectif : générer un portfolio one-page moderne, animé, bilingue FR/EN, optimisé SEO et déployable sur Vercel.

---

## 1. Objectif

Site portfolio **one-page** pour un **Technicien Support Informatique niveau 2 et 3** en recherche active sur le marché français (cible : ESN, DSI grands groupes, postes Support VIP / international).

Le site doit :
- Donner immédiatement confiance à un recruteur IT (sobriété, lisibilité, pro).
- Mettre en avant l'expertise technique (MDM, ITSM, AD/Azure, scripting) et le profil **Support VIP / environnement international**.
- Être **fluide et animé** sans tomber dans le gadget : animations au service de la lecture.
- Permettre de télécharger le CV PDF et de contacter facilement.

---

## 2. Stack technique

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui** (composants de base)
- **Framer Motion** (animations principales : reveal au scroll, stagger, timeline)
- **GSAP + ScrollTrigger** (uniquement pour le tracé animé de la ligne de timeline et un léger parallax — optionnel)
- **lucide-react** (icônes)
- Déploiement **Vercel**
- Contenu dans des fichiers de données séparés (`/content/fr.ts`, `/content/en.ts`) → toggle de langue FR/EN

---

## 3. Direction artistique

**Thème : "tech / monitoring" élégant et sombre par défaut, avec mode clair.**

- Fond sombre profond `#0B1120` (slate-950), surfaces en glassmorphism léger.
- Accent **cyan électrique** `#06B6D4` + secondaire bleu `#3B82F6` (évoque réseau / infra).
- Texte : slate-100 / slate-400 pour le secondaire.
- Typo : **Inter** (corps) + **Space Grotesk** ou **JetBrains Mono** pour les titres/labels techniques (`next/font`).
- Background subtil : **grille animée** très discrète (dot-grid ou network lines) en mode "respiration", + halo radial cyan derrière le hero.
- Cards : bord 1px slate-800, arrondis `rounded-2xl`, hover qui soulève légèrement (`translateY(-4px)`) + glow accent.
- Toujours **lisible avant d'être joli**. Contraste AA minimum.

---

## 4. Structure des sections

Navbar sticky (blur au scroll, lien actif surligné, toggle langue FR/EN, toggle thème) + ancres :

1. **Hero**
2. **Profil / À propos**
3. **Compétences techniques**
4. **Expériences** (timeline)
5. **Formation**
6. **Contact**
7. Footer

---

## 5. Détail des sections + animations

### Hero
- Nom **MAHMOUD CHATER** en grand.
- Sous-titre avec **effet machine à écrire / rotation** sur les rôles : "Technicien Support N2/N3" → "Support VIP international" → "Gestion de parc & MDM" → "Scripting PowerShell".
- Pitch court (2 lignes max).
- Badges rapides : `5+ ans d'expérience` · `Niveau 2 & 3` · `Support VIP` · `Permis B + véhicule`.
- 2 CTA : **Télécharger le CV** (PDF) + **Me contacter**.
- **Animations** : fade-up en cascade des éléments au chargement, background grille/particules en mouvement lent, halo cyan en parallax léger.

### Profil / À propos
- Reprendre l'esprit du profil du CV, reformulé court et percutant (pas de bloc indigeste).
- 3–4 **stats animées** (compteurs qui s'incrémentent au scroll) :
  - `5+` années d'expérience
  - `300` postes migrés (projet Leonardo)
  - `N2 / N3` niveau d'intervention
  - `5` grands comptes accompagnés
- **Animation** : reveal `whileInView`, compteurs animés avec `useInView`.

### Compétences techniques
Affichage en **clusters de badges** par catégorie, avec apparition **staggered** au scroll et micro-hover :

- **Poste de travail & Masterisation** : Windows 10/11, BitLocker, Masterisation, Déploiement OS, Mac OS
- **Gestion de parc & MDM** : Microsoft Intune, SCCM, Airwatch, Portail Entreprise, HP Device Manager
- **Annuaire & Identité** : Active Directory, Azure AD, SSO, RSA Token, Gestion des droits
- **ITSM & Ticketing** : ServiceNow, Jira, ITAM Ivanti
- **Réseau & Sécurité** : LAN, VLAN, VPN, Proxy, Firewall, Switchs, Routeurs, Antivirus
- **Scripting & Automatisation** : PowerShell
- **Téléphonie & Visio** : Mitel, Terminaux IP, Teams Rooms (MTR), Webex, Zoom, ClickShare
- **Bureautique & Messagerie** : Outlook, Office365, Exchange, SafeQ, TeamViewer, UCOPIA

> Idée cool optionnelle : chaque catégorie = une "carte console" avec un petit header type terminal (`> skills --category=mdm`).

### Expériences (timeline)
**Timeline verticale animée** : la ligne centrale se **trace au scroll** (GSAP ScrollTrigger ou framer `scaleY`), chaque carte d'expérience **slide-in** alternativement gauche/droite (en desktop) ou en colonne (mobile). Tag de niveau (N1/N2/N3) coloré.

Données (de la plus récente à la plus ancienne) :

**Févr. 2025 – En cours · Support VIP — Environnement international · Laboratoire ALCON**
- Support prioritaire et personnalisé aux utilisateurs VIP (réactivité, discrétion, qualité de service)
- Gestion des comptes utilisateurs via Azure AD
- Masterisation, préparation et installation de postes (Windows 11)
- Résolution des tickets N2/N3 ou redirection via ServiceNow
- Enrôlement de smartphones (iPhone) via Portail Entreprise Microsoft Intune
- Déploiement de logiciels et mises à jour via Intune & SCCM
- Prise en main à distance (Assistance rapide Microsoft, Teams)
- Vérification et support des salles de réunion (Webex, ClickShare)
- Coordination avec les équipes techniques internationales **en anglais** sur les incidents complexes
- Intervention sur équipements réseau (Switchs, routeurs)

**Mars 2024 – Janv. 2025 · Support de proximité VIP · NEXANS GROUPE**
- Résolution des incidents et demandes via ITAM (Ivanti)
- Déploiement de logiciels via SCCM
- Déploiement et gestion des postes & mobiles via Microsoft Intune
- Gestion des comptes Windows et des accès via Active Directory
- **Scripts PowerShell** pour automatiser les tâches récurrentes (gestion users, déploiements, sauvegardes)
- Administration quotidienne des salles de réunion (MTR — Microsoft Teams Rooms)
- Diagnostic, documentation des incidents et analyse des causes racines
- Rondes préventives dans les étages (proximité utilisateurs)
- Configuration et enrôlement de smartphones (iOS & Android)
- Support utilisateurs VIP

**Août 2021 – Janv. 2024 · Support informatique N2 et N3 · ALLIANZ GROUPE**
- Masterisation, chiffrement BitLocker, préparation/installation de postes (Windows 10)
- Résolution des incidents N2/N3 via ServiceNow
- Gestion et suivi des anomalies via Jira
- Enrôlement & remplacement de smartphones (iPhone) via Airwatch
- Déploiement de logiciels via Centre de logiciel
- Gestion et administration des comptes via Active Directory
- Assistance au guichet & support VIP
- Gestion des connexions en télétravail via RSA Token
- Installation et configuration du VPN (Windows & smartphone)
- *Projet Leonardo (migration système)* : droits d'accès personnalisés sur FileServers, configuration Proxy + SSO, analyse des logs Windows, migration vers un nouveau domaine (brassage + réorganisation réseau), **migration d'un parc de 300 postes**

**Août 2020 – Juin 2021 · Support informatique N2 et N3 · BRICO DÉPÔT**
- Masterisation et installation de postes (Windows 10)
- Résolution des tickets N2/N3 via ServiceNow
- Enrôlement de smartphones via Airwatch
- Déploiement de logiciels via SCCM
- Prise en main à distance via TeamViewer
- Assistance visioconférence (Zoom), comptes Webex
- Préparation et installation de terminaux IP
- Support VIP (conférences, upgrade équipements métiers)
- Intervention sur serveurs de fichiers (dossiers & droits)

**Janv. 2020 – Juin 2020 · Support informatique N1 · CTN EUROMEUBLE**
- Préparation et déploiement des postes de travail, masterisation
- Gestion des demandes et incidents N1
- Création/configuration des comptes utilisateurs
- Création de boîtes mail et configuration des messageries mobiles
- Gestion des antivirus et protocoles de sécurité

### Formation
Cartes simples, reveal au scroll :
- **2017 – 2019** · Master Négociation de projets internationaux · Université Paul Valéry — Montpellier 3
- **2013 – 2015** · Master Création d'entreprise, gestion et gouvernance · FSEG Sousse (Tunisie)
- **2009 – 2013** · Licence Informatique appliquée à la gestion des entreprises · FSEG Sousse (Tunisie)

### Langues
- **Français** — courant
- **Anglais** — professionnel (environnement international, coordination équipes)
- **Arabe** — langue maternelle

### Contact
- Email : **mahmoud.chater@live.fr**
- Téléphone : **06 89 42 77 47** (afficher en bouton click-to-call ; possibilité de remplacer par un formulaire pour limiter le spam)
- Localisation : **Le Vésinet (78110)** · Permis B + véhicule
- LinkedIn : **https://www.linkedin.com/in/chatermahmoud/**
- Boutons : Email, Téléphone, Télécharger le CV (PDF), LinkedIn
- **Animation** : reveal + boutons "magnetic" légers au hover.

---

## 6. Bloc SEO (obligatoire)

- **Metadata API** Next.js avec `generateMetadata` (title, description ciblés : "Technicien Support Informatique N2/N3 — Mahmoud Chater")
- **Open Graph** + **Twitter cards** (image OG dédiée à générer : nom + rôle sur fond thème)
- **URL canonique** standardisée
- `app/sitemap.ts` + `app/robots.ts`
- **JSON-LD `Person`** (name, jobTitle, address, email, knowsAbout = compétences, alumniOf, `sameAs` = LinkedIn)
- `next/image` + `alt` systématique
- `next/font` (Inter + Space Grotesk/JetBrains Mono)
- Attribut `lang` correct (`fr` par défaut, switch `en`)
- Hiérarchie `Hn` propre (un seul `h1`)
- Checklist **Core Web Vitals** (LCP image hero optimisée, pas de layout shift, animations en `transform`/`opacity` uniquement)

---

## 7. Accessibilité & Performance

- Contraste AA, focus visibles, navigation clavier.
- `prefers-reduced-motion` : désactiver/atténuer les animations si l'utilisateur le demande.
- Animations uniquement sur `transform` et `opacity` (pas de reflow).
- Lazy-load des sections lourdes, images en WebP/AVIF.
- 100 % responsive (mobile-first), timeline qui passe en colonne sur mobile.

---

## 8. Livrables attendus

- Projet Next.js 14 fonctionnel, `npm run dev` OK.
- Contenu centralisé dans `/content/fr.ts` et `/content/en.ts`.
- Composants : `Navbar`, `Hero`, `About`, `Skills`, `Timeline`, `Education`, `Contact`, `Footer`.
- Placeholder pour le CV PDF dans `/public/cv-mahmoud-chater.pdf`.
- Placeholder image OG.
- README court avec instructions de déploiement Vercel.

---

## 9. Notes

- Garder le code propre et typé.
- Pas de dépendances inutiles : Framer Motion couvre 90 % du besoin, GSAP seulement si la timeline le justifie.
- Ton général : **pro, technique, confiant** — pas de superlatifs marketing creux.
