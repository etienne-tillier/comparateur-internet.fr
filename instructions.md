# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `AGENTS.md`, puis ce fichier.
⚠️ Ce fichier est la source de vérité du brief: ne pas l'écraser avec un template générique.

---

## 1) Infos projet

- `site_name`: comparateur-internet.fr
- `site_domain`: comparateur-internet.fr
- `site_url`: https://comparateur-internet.fr
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): b916601a-1c08-4d57-8b23-13b63c980959
- `tier` (`tier1` / `tier2`): tier1

## 2) Positionnement éditorial

- Thématique: Technologie, Telecom
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - https://www.comparateur-internet.fr/actualites-sfr/5-bonnes-raisons-de-se-laisser-tenter-par-la-fibre-de-sfr
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

⚠️ **OBLIGATOIRE** : utiliser ces images dans le site. Ne PAS les ignorer. Ne PAS créer de SVG placeholder.

- Bucket/source: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/
- Images hero:
  - Hero principal: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-hero-fiber-optic.jpeg
- Images sections:
  - Section comparaison: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-comparison-dashboard.jpeg
  - Section technologie: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-technology-5g-tower.jpeg
  - Section région: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-regions-france-map.jpeg
  - Section guides: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-guides-wifi-setup.jpeg
  - Page guide: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-guide-esim-technology.jpeg

### Liste complète des images à utiliser :
  - Hero principal: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-hero-fiber-optic.jpeg
  - Section comparaison: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-comparison-dashboard.jpeg
  - Section technologie: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-technology-5g-tower.jpeg
  - Section région: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-regions-france-map.jpeg
  - Section guides: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-guides-wifi-setup.jpeg
  - Page comparatif: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-comparison-operators-logos.jpeg
  - Page guide: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-guide-esim-technology.jpeg
- Contraintes de ratio/poids:

## 7) Contraintes techniques

- Le code doit respecter strictement les règles de `AGENTS.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Ok, l'idée du site, c'est de faire un site qui vient de comparer toutes les offres internet en France, donc qui compare tous les oranges, frits, SFR, bouillis, même sosh, enfin tout ce qu'on peut trouver sur le marché français pour avoir internet à la fois à la maison mais aussi sur le mobile, donc via son téléphone. Donc les meilleures offres, les meilleures astuces, la qualité, la qualité du réseau, dans quelle région, voilà je suis dans telle région, donc ça serait bien de faire un petit module, je suis dans telle région, quel est le meilleur fournisseur pour avoir internet, avoir des comparatifs, etc. Parler également des technologies avancées, le meilleur wifi, les cartes eSIM pour avoir internet, tout ce qui est bon, les boîtiers wifi, etc.

### Description générée

## Comparateur Internet France

Le site **comparateur-internet.fr** est un comparateur spécialisé dans les offres internet et mobile en France. Il a pour objectif de simplifier le choix des consommateurs en proposant des comparatifs détaillés de tous les fournisseurs d'accès internet (Orange, Free, SFR, Bouygues, Sosh, etc.) ainsi que des guides sur les technologies émergentes.

Le site s'adresse aux particuliers recherchant la meilleure offre internet fixe ou mobile selon leur localisation géographique. Il propose des analyses par région, des comparatifs de prix et de qualité de réseau, ainsi que des guides sur les technologies avancées (WiFi 6, cartes eSIM, boîtiers WiFi portables). L'objectif est de générer des revenus via l'affiliation avec les opérateurs télécom tout en positionnant le site comme une référence SEO sur les requêtes de comparaison d'offres internet en France.

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Comparateur Internet France
- Domaine : comparateur-internet.fr
- Type de site : Money site (affiliation télécom)
- Thématiques : Technologie, Telecom
- Objectif business : Génération de leads et revenus d'affiliation avec opérateurs télécom
- Audience cible : Particuliers français cherchant offres internet/mobile optimales

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance : moderne, technologique, fiable, précis, accessible
- **Références visuelles mentales** : réseaux de fibres optiques, ondes WiFi, circuits imprimés, signaux 5G, dashboards techniques
- **Émotions à évoquer** chez le visiteur : confiance dans le choix, clarté des informations, sentiment de faire une bonne affaire

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées aux technologies réseau (bleus électriques, violets numériques, verts de connexion)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : bleu technologique professionnel
   - Couleur secondaire (secondary) : violet/indigo moderne
   - Couleur d'accent (accent) : vert de validation/signal fort
   - Couleur de fond (background) : gris très clair/blanc technique
   - Variante hover : versions plus saturées des couleurs principales
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers technologique :
  - Titre : **Space Grotesk** (moderne, tech, géométrique)
  - Corps de texte : **Inter** (lisibilité optimale, neutre)

## 2. SEO & métadonnées
- **Titre SEO principal** : "Comparateur Internet 2024 : Meilleures Offres Box & Mobile"
- **Méta-description principale** : "Comparez toutes les offres internet en France : Orange, Free, SFR, Bouygues. Trouvez la meilleure box et forfait mobile selon votre région."
- **Open Graph title** : "Comparateur Internet France - Meilleures Offres 2024"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation télécom)
  - `app/globals.css` (créer la palette tech UNIQUE selon méthodologie section 1)
  - contenus de démo remplacés par contenus télécom dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/comparatif/*`, `/guide/*`)

## 4. Contenu & structure à mettre en place

### Images pré-générées - À TÉLÉCHARGER ET INTÉGRER :
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-hero-fiber-optic.jpeg
- Section comparaison : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-comparison-dashboard.jpeg
- Section technologie : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-technology-5g-tower.jpeg
- Section région : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-regions-france-map.jpeg
- Section guides : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-guides-wifi-setup.jpeg
- Page comparatif : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-comparison-operators-logos.jpeg
- Page guide : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-guide-esim-technology.jpeg

### Sections obligatoires sur la page d'accueil (/) :
- **Hero** : "Trouvez la meilleure offre internet pour votre région" + module de recherche par code postal + CTA "Comparer maintenant" [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-hero-fiber-optic.jpeg]
- **Comparateur en direct** : Tableau comparatif des principales offres avec prix, débits, engagement [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-comparison-dashboard.jpeg]
- **Technologies avancées** : WiFi 6, 5G, fibre optique FTTH expliquées simplement [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-technology-5g-tower.jpeg]
- **Recherche par région** : Module interactif "Je suis dans [région], quel est le meilleur opérateur ?" [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-regions-france-map.jpeg]
- **Guides populaires** : Mise en avant des meilleurs guides (eSIM, boîtiers WiFi, etc.) [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-home-guides-wifi-setup.jpeg]
- **Actualités télécom** : Dernières nouvelles des opérateurs

### Pages importantes :
- `/comparatif` : Comparatif détaillé avec filtres (prix, débit, région, engagement) [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-comparison-operators-logos.jpeg]
- `/guides` : Hub des guides techniques et astuces [image: https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/comparateur-internet-com-guide-esim-technology.jpeg]
- `/operateurs/[nom]` : Pages dédiées Orange, Free, SFR, Bouygues
- `/regions/[region]` : Analyses par région avec couverture réseau
- `/blog` : Actualités télécom et nouveautés

### Clusters thématiques :
1. **Comparatifs offres** (box internet, forfaits mobile, bouquets)
2. **Technologies** (5G, WiFi 6, fibre, eSIM, boîtiers WiFi)
3. **Analyses régionales** (couverture, qualité réseau par département)
4. **Guides pratiques** (installation, optimisation, dépannage)
5. **Actualités opérateurs** (promotions, nouveaux services)

## 5. Consignes éditoriales
- **Ton à respecter** : Expert mais accessible, factuel, sans jargon technique excessif
- **Types d'articles attendus** :
  - Comparatifs détaillés avec tableaux et métriques
  - Guides pas-à-pas pour technologies (eSIM, boîtiers WiFi)
  - Analyses de couverture réseau par région
  - Tests de débits et qualité de service
  - Actualités promotions et nouvelles offres
- **Contraintes à éviter** :
  - Promesses de "meilleure offre absolue" sans nuance
  - Parti pris évident pour un opérateur
  - Informations techniques trop complexes pour le grand public
  - Prix obsolètes (toujours vérifier l'actualité)

## 6. Fonctionnalités spécifiques
- **Module de recherche géographique** : Saisie code postal → recommandations personnalisées
- **Comparateur interactif** : Filtres multiples, tri par critères
- **Système d'alertes** : Notification nouvelles promotions
- **Calculateur d'économies** : "Combien puis-je économiser en changeant ?"
- **Test de débit intégré** : Widget pour tester sa connexion actuelle

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=comparateur-internet.fr, BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec navigation télécom
- **Création de la palette tech UNIQUE** dans `app/globals.css` selon méthodologie
- Logos opérateurs dans `/public/operators/`
- Intégration blog Supabase avec filtrage par domaine
- Pages dynamiques `/operateurs/[slug]` et `/regions/[region]`
- Intégration API prix opérateurs (si disponible)
- Schema markup pour comparatifs
- Vérifier `npm run lint` et `npm run build`

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system tech
❌ Utiliser des couleurs génériques bleu/rouge corporate
❌ Interface trop complexe pour le grand public
❌ Données de prix non actualisées
❌ Biais évident vers certains opérateurs
❌ Jargon technique sans explication
❌ Comparatifs incomplets ou biaisés
