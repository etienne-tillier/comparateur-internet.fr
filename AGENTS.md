# AGENTS.md

Ce fichier définit les règles de travail pour n'importe quel agent IA (Claude, Gemini, Codex, etc.).

## Ordre de lecture obligatoire

1. `AGENTS.md`
2. `instructions.md`
3. `CLAUDE.md` (complément, si présent)

## Règles non négociables

- Ne jamais écraser `instructions.md` avec un contenu template.
- Ne jamais modifier `AGENTS.md`, `instructions.md`, `CLAUDE.md` ou `PROMPT_READY.md` sans demande explicite.
- Zéro 404 : toute page liée dans le Header, Footer ou un lien interne doit exister.
- Zéro placeholder : aucun 'Lorem ipsum', 'TODO', 'À compléter', image manquante.
- Blog 100% Supabase (aucun faux article, aucun contenu hardcodé).
- Tout lien vers le même domaine doit être interne dofollow.
- `npm run build` doit passer sans erreur ni warning TypeScript.
- Toutes les images doivent venir de `instructions.md` (section Assets). Jamais d'Unsplash, Pexels, Picsum ou placeholder externe.
- Header et Footer présents sur toutes les pages (via layout.tsx).
- Contraste texte/fond conforme WCAG AA (ratio ≥ 4.5:1 pour le texte courant).
- Aucun `bg-navy-*`, `bg-primary-*` ou autre classe Tailwind custom non définie — utiliser les valeurs hex directes `bg-[#...]`.
- Tous les fichiers créés/modifiés doivent être committés sur la branche principale avant de déclarer le travail terminé.

## Contexte repo

- Domaine: comparateur-internet.fr
- Repository: comparateur-internet.fr

## Checklist qualité obligatoire AVANT de déclarer 'terminé'

L'agent doit vérifier chaque point ci-dessous et le confirmer explicitement dans son rapport final :

### Pages et navigation
- [ ] Toutes les pages listées dans Header et Footer existent et sont accessibles
- [ ] Aucun lien 404 dans toute l'arborescence
- [ ] La page d'accueil (/) est complète avec toutes ses sections
- [ ] Les pages légales (mentions-legales, politique-confidentialite) existent

### Images
- [ ] Toutes les images listées dans `instructions.md` section Assets sont utilisées
- [ ] Aucune image externe non prévue (Unsplash, Pexels, placeholder.com, picsum, etc.)
- [ ] Aucune image 404 (vérifier les URLs R2 dans les balises <Image>)
- [ ] `next.config.ts` contient les domaines R2 dans `remotePatterns`

### Build et code
- [ ] `npm run build` passe sans erreur
- [ ] Pas de `text-white` sur fond blanc ou clair
- [ ] Pas de classes Tailwind custom non déclarées (`bg-navy-*`, etc.)
- [ ] Aucun console.error non géré

### Git
- [ ] Tous les fichiers créés ou modifiés sont committés
- [ ] `git status` retourne 'nothing to commit'
- [ ] `git push` effectué sur la branche principale

### Search Console
- [ ] Sitemap soumis via l'outil MCP `sync_site_search_console` (site_id et domain disponibles dans la section 1 de ce fichier)

## Sortie attendue de l'agent

- Résultat de la checklist (chaque point coché ou signalé comme bloquant).
- Liste des fichiers modifiés/créés.
- Résumé court des choix design et SEO.