# Plan d'itérations

**Plan validé le 2026-11-18.**

- **Source du plan** : proposé par l'agent. `passation/cadrage/2-idees-priorisees.md` est « Pas encore produit » et aucun fichier d'itérations de l'équipe n'existe dans `cadrage/` ni dans `passation.json`. Seul `passation/cadrage/6-plan-de-livraison.md` donne un ordre de blocs (navigation par profil → page organisateur + calendrier → page de profil donateur), repris ici comme ordre de priorité.
- **Temps restant annoncé** : 40 minutes (question posée le 2026-11-18).
- **Durée du tour de test de l'équipe** : 5 minutes.
- **Capacité estimée** : au plus 2 itérations tiennent dans 40 minutes (codage ≤10 min + publication ~5 min + test 5 min ≈ 15 à 20 min par itération), sans marge pour un aléa.

## ⚠️ Hypothèse à valider par les cadreurs : les écrans

`cadrage/3-solution.md` ne décrit aucun écran (« 0 écran(s) » pour chaque idée) et il n'y a pas de prototype. En accord avec le développeur, l'agent improvise 6 écrans à partir du scénario du PRD (`7-prd.md`) :

1. **Qui êtes-vous ?** — sélection d'un persona dans une liste (pas de connexion réelle)
2. **Accueil** — navigation en 3 segments : Qui je suis / Ce que je cherche / Quand
3. **Page organisateur** — infos dédiées, appel à l'action, accès au calendrier
4. **Calendrier des événements** — filtrable par type et période, cartes avec photo + description
5. **Fiche action solidaire** — détail d'une action (photos, explications)
6. **Page de profil donateur** — dons passés, participations, impact (gamification), lien vers le don (iRaiser)

## ✂️ Hors périmètre de cette session (40 minutes)

Avec 2 itérations réalistes et la règle d'un écran nouveau au plus par itération, le périmètre suivant sort de cette session et reste en liste « À venir » :
- Calendrier des événements (filtrage, photos)
- Fiche action solidaire
- Page de profil donateur (dons, participations, gamification, lien de don)
- Parcours entreprise mécène et testateur (non démarrés)

---

## Itération 1 : On choisit son persona et on arrive sur l'accueil avec la navigation à trois segments

**Temps restant annoncé au début du codage** : 20-30 minutes (2026-11-18). Finalement, l'itération a tenu en 7 minutes (codage + publication) au lieu des ~20 redoutées : l'itération 2 reste a priori jouable dans cette session, à reconfirmer en demandant le temps restant au début de `/iteration 2`.

- **Dans le périmètre** :
  - Squelette déployé selon le contrat de déployabilité (`api/` port 8081, `frontend/` port 80, déjà posés) : ajout de `.env.example` et `DEPLOIEMENT.md`.
  - Écran « Qui êtes-vous ? » : liste de personas en dur (un par rôle du scénario : organisateur, donateur particulier, entreprise mécène, testateur), choix qui mémorise le persona actif.
  - Écran Accueil : barre de navigation à 3 segments (« Qui je suis », « Ce que je cherche », « Quand »), bouton pour changer de persona à tout moment.
- **Hors périmètre** : contenu réel des segments « Ce que je cherche » et « Quand », pages de destination (organisateur, calendrier, profil) — stubs ou liens inactifs pour l'instant.
- **Critères d'acceptation** :
  - Étant donné l'écran « Qui êtes-vous ? », quand je choisis un persona dans la liste, alors j'arrive sur l'écran d'accueil avec son nom affiché.
  - Étant donné l'écran d'accueil, quand je consulte le segment « Qui je suis », alors je vois les 4 profils (organisateur, particulier, entreprise, testateur).
  - Étant donné l'application déployée, quand j'appelle `/health` (API, 8081) et `/sante` (front, 8080), alors je reçois 200 avec un corps non vide.
- **Hypothèse de l'équipe couverte** : aucune directement — c'est le squelette qui porte les itérations suivantes vers l'hypothèse « l'organisateur atteint sa page en moins de 3 clics ».
- **Codage estimé** : 10 minutes (inclut le squelette de déploiement).
- **Fichiers prévus** : `frontend/src/app/page.tsx` (ou nouvelle route persona), composant de sélection de persona, composant de navigation à 3 segments, `.env.example`, `DEPLOIEMENT.md`.
- **Tests unitaires prévus** : 1 à 2, sur la logique de sélection/mémorisation du persona actif (pas sur le balisage).
- **Étapes ajoutées à la démo** : ouverture de l'app → choix du persona « Organisateur » → arrivée sur l'accueil.
- **Bilan** :
  - Durée de codage réelle : 3 minutes (pas de dépassement). Déploiement (build, push, lancement, vérification) : 4 minutes supplémentaires, soit 7 minutes au total pour l'itération.
  - Critères satisfaits : les 3 critères sont codés et vérifiés par `curl` (`/health`, `/sante`, `200` sur `/` et `/accueil`) et par le test unitaire. ⚠️ Le parcours interactif (clic sur un persona → redirection → affichage des 4 profils) n'a pas pu être vérifié dans un vrai navigateur sur cette machine : la démo Playwright échoue sur une dépendance système manquante (`libnspr4.so`), sans rapport avec le code. À confirmer par le développeur dans son navigateur.
  - Rien de reporté sur cette itération.
  - Le harnais n'a rien bloqué : `npm test` passe, `./scripts/verifier-deployabilite.sh` ne signale aucune borne ni alarme, `./scripts/signaler-version.sh 1` a été accepté (`moteur_avance: false`, version tout de même enregistrée).
  - **Modifications** :
    - `frontend/src/lib/personas.ts` (nouveau) — données des 4 personas et `trouverPersona()` ; sert les critères 1 et 2.
    - `frontend/src/lib/personas.test.ts` (nouveau) — 2 tests unitaires sur `trouverPersona()`.
    - `frontend/src/app/page.tsx` (modifié) — remplace la page gabarit par l'écran « Qui êtes-vous ? » ; critère 1.
    - `frontend/src/app/accueil/page.tsx` (nouveau) — écran d'accueil, navigation à 3 segments, redirection si aucun persona choisi ; critères 1 et 2.
    - `.env.example` (nouveau) — variable `PORT` ; DoD point 3.
    - `DEPLOIEMENT.md` (nouveau) — fiche de déploiement ; DoD point 3.
    - `api/Dockerfile`, `frontend/Dockerfile` (modifiés) — images de base qualifiées `docker.io/library/...` ; requis par la recette du serveur.
    - `podman-compose.yml` (nouveau) — recette de déploiement (réseau `core-network`, ports 8080/8081).
    - `e2e/demo.spec.ts` (modifié, hors DoD) — étapes « choisir un persona » et « arriver sur l'accueil » ajoutées à la démo.

## Itération 2 : L'organisateur arrive sur sa page dédiée avec l'appel à l'action

**Temps restant annoncé au début du codage** : 25-30 minutes ou plus (2026-11-18).

- **Dans le périmètre** : page organisateur (contenu dédié, appel à l'action « Lancer une action solidaire », lien vers le calendrier — même si la page calendrier n'est qu'un stub pour l'instant).
- **Hors périmètre** : calendrier filtrable, fiche action, pages des autres personas.
- **Critères d'acceptation** :
  - Étant donné que le persona actif est « Organisateur », quand je clique sur le segment « Qui je suis » puis sur « Organisateur », alors j'arrive sur la page organisateur.
  - Étant donné la page organisateur, quand je la consulte, alors je vois l'appel à l'action et un lien vers le calendrier des événements.
  - Étant donné le parcours accueil → organisateur, alors il tient en 3 clics ou moins.
- **Hypothèse de l'équipe couverte** : « Nous croyons qu'une navigation centrée sur les profils permettrait à l'organisateur de trouver son parcours sans chercher ; mesure : nombre de clics ≤ 3 ».
- **Codage estimé** : 6 minutes.
- **Fichiers prévus** : page organisateur (nouvelle route), mise à jour du composant de navigation, stub de page calendrier.
- **Tests unitaires prévus** : 1, sur la fonction qui associe un persona à sa route de destination.
- **Étapes ajoutées à la démo** : clic sur « Organisateur » → vérification de l'affichage de l'appel à l'action.
- **Bilan** :
  - Durée de codage réelle : 1 minute (pas de dépassement), d'après `.iterations/2.debut`/`.iterations/2.fin`.
  - Critères satisfaits : les 3 critères sont codés et vérifiés par `curl` (`/organisateur` et `/calendrier` répondent 200 sur le port 8080) et par le test unitaire sur `routeDuProfil`. ⚠️ Comme pour l'itération 1, le parcours interactif (clic sur le persona → page organisateur → lien calendrier) n'a pas pu être rejoué dans un vrai navigateur sur cette machine : la démo Playwright échoue toujours sur la même dépendance système manquante (`libnspr4.so`), sans rapport avec le code. À confirmer par le développeur dans son navigateur.
  - Rien de reporté sur cette itération.
  - Le harnais n'a rien bloqué : `npm test` passe (4 tests), `./scripts/verifier-deployabilite.sh` ne signale aucune borne, `./scripts/signaler-version.sh 2` a été accepté (`moteur_avance: false`, version 2 enregistrée).
  - **Modifications** :
    - `frontend/src/lib/navigation.ts` (nouveau) — `routeDuProfil()`, associe un persona à sa route de destination ; sert les 3 critères.
    - `frontend/src/lib/navigation.test.ts` (nouveau) — 2 tests unitaires sur `routeDuProfil()`.
    - `frontend/src/lib/usePersonaActif.ts` (nouveau) — hook partagé qui lit le persona actif et gère la redirection si absent ; extrait pour éviter la duplication entre `accueil` et `organisateur`.
    - `frontend/src/components/EnTete.tsx` (nouveau) — en-tête partagée (persona actif, bouton « Changer de profil », navigation « Qui je suis » avec lien actif uniquement si `routeDuProfil` renvoie une route) ; critère 1.
    - `frontend/src/app/accueil/page.tsx` (modifié) — utilise `usePersonaActif` et `EnTete` au lieu de sa propre logique dupliquée.
    - `frontend/src/app/organisateur/page.tsx` (nouveau) — page dédiée, appel à l'action, lien vers le calendrier ; critères 1 et 2.
    - `frontend/src/app/calendrier/page.tsx` (nouveau, stub) — cible du lien du critère 2.
    - `e2e/demo.spec.ts` (modifié, hors DoD) — étapes « clic sur mon profil → page organisateur » et « accès au calendrier » ajoutées à la démo.

---

## ⚠️ Changement de priorité (à valider par les cadreurs)

Demande du développeur en cours de session (temps restant annoncé : 60 minutes) : le design passe devant les nouveaux écrans, pour que le prototype soit exploitable. Deux itérations de design s'intercalent donc avant la suite de la liste « À venir ». `contexte/association.md` rappelle *« on applique la charte, on ne la refait pas »* ; la charte réelle n'étant pas dans la passation, les itérations de design s'appuient sur la palette de marque publique d'Imagine for Margo (cerise #E44585, pancho #EDC7A8, noir), trouvée en ligne plutôt qu'inventée — à faire confirmer par les cadreurs/l'association.

## Itération 3 : Design A — tokens visuels, choix de persona et accueil

- **Dans le périmètre** : palette et typographies de marque (`globals.css`, `layout.tsx`), restylage de l'écran « Qui êtes-vous ? » et de l'accueil, polish de l'en-tête (`EnTete`).
- **Hors périmètre** : page organisateur et calendrier (Design B), contenu des segments « Ce que je cherche »/« Quand ».
- **Critères d'acceptation** :
  - Étant donné l'écran « Qui êtes-vous ? », quand je le consulte, alors les couleurs de marque (cerise, pancho) et les deux typographies choisies s'affichent au lieu du gabarit par défaut.
  - Étant donné l'accueil, quand je le consulte, alors l'en-tête et le contenu utilisent les mêmes tokens visuels.
  - Étant donné l'application déployée, quand j'appelle `/health` et `/sante`, alors je reçois toujours 200.
- **Hypothèse de l'équipe couverte** : aucune directement — demande du développeur, pas une hypothèse du PRD.
- **Codage estimé** : 10 minutes.
- **Fichiers prévus** : `globals.css`, `layout.tsx`, `page.tsx`, `accueil/page.tsx`, `EnTete.tsx`.
- **Tests unitaires prévus** : aucun nouveau — pas de nouvelle logique métier, uniquement du balisage et des styles (cf. DoD point 2 : pas de test sur du balisage pur).
- **Étapes ajoutées à la démo** : aucune (pas de nouveau parcours, seulement un changement visuel).
- **Bilan** :
  - Durée de codage réelle : 1 minute (pas de dépassement), d'après `.iterations/3.debut`/`.iterations/3.fin`.
  - Critères satisfaits : les 3 critères sont vérifiés — classes et polices de marque présentes dans le HTML exporté (`grep class=... out/index.html`), `/health` et `/sante` toujours 200 après redéploiement. ⚠️ Le rendu visuel réel (couleurs, espacements à l'écran) n'a pas pu être capturé par une capture d'écran sur cette machine : la même dépendance système manquante (`libnspr4.so`) bloque aussi les outils de capture headless, pas seulement la démo Playwright. À confirmer par le développeur dans son navigateur.
  - Rien de reporté sur cette itération.
  - Le harnais n'a rien bloqué : `npm test` passe (6 tests), `./scripts/verifier-deployabilite.sh` ne signale aucune borne, `./scripts/signaler-version.sh 3` a été accepté (`moteur_avance: false`, version 3 enregistrée).
  - **Modifications** :
    - `frontend/src/app/globals.css` (réécrit) — tokens de couleur (cerise, pancho, creme, encre) et classes partagées (page, contenu, liste-profils, en-tête, cta) ; critères 1 et 2.
    - `frontend/src/app/layout.tsx` (modifié) — polices Fredoka (titres) et Work Sans (texte) via `next/font/google`, métadonnées réelles ; critère 1.
    - `frontend/src/app/page.module.css` (supprimé) — gabarit par défaut inutilisé, remplacé par les classes de `globals.css`.
    - `frontend/src/app/page.tsx` (modifié) — écran « Qui êtes-vous ? » restylé en liste de profils (portes d'entrée) ; critère 1.
    - `frontend/src/app/accueil/page.tsx` (modifié) — applique les classes partagées ; critère 2.
    - `frontend/src/components/EnTete.tsx` (modifié) — en-tête restylée (identité, navigation à 3 segments) ; critère 2.

## Itération 4 : Design B — page organisateur et calendrier

- **Dans le périmètre** : restylage de `organisateur/page.tsx` et `calendrier/page.tsx` avec les tokens posés en itération 3 (aucun nouveau token).
- **Hors périmètre** : contenu réel du calendrier (toujours un stub).
- **Critères d'acceptation** :
  - Étant donné la page organisateur, quand je la consulte, alors elle utilise les mêmes classes/tokens que l'accueil (page, contenu, en-tête) et son lien vers le calendrier est un bouton d'action visible (`cta`).
  - Étant donné la page calendrier, quand je la consulte, alors elle utilise le même gabarit de page.
  - Étant donné l'application déployée, quand j'appelle `/health` et `/sante`, alors je reçois toujours 200.
- **Hypothèse de l'équipe couverte** : aucune directement — suite du changement de priorité demandé en cours de session.
- **Codage estimé** : 5 minutes.
- **Fichiers prévus** : `organisateur/page.tsx`, `calendrier/page.tsx`.
- **Tests unitaires prévus** : aucun nouveau (balisage/styles, pas de logique métier).
- **Étapes ajoutées à la démo** : aucune (pas de nouveau parcours).
- **Bilan** :
  - Durée de codage réelle : moins d'1 minute (pas de dépassement), d'après `.iterations/4.debut`/`.iterations/4.fin`.
  - Critères satisfaits : vérifiés par `curl` (`/organisateur`, `/calendrier`, `/health`, `/sante` tous 200) et par lecture du code (classes `page`, `contenu`, `cta` appliquées). ⚠️ Même limite que les itérations précédentes : pas de capture d'écran possible sur cette machine (dépendance système manquante), rendu visuel à confirmer par le développeur.
  - Rien de reporté sur cette itération.
  - Le harnais n'a rien bloqué : `npm test` passe (6 tests), `./scripts/verifier-deployabilite.sh` ne signale aucune borne, `./scripts/signaler-version.sh 4` a été accepté (`moteur_avance: false`, version 4 enregistrée).
  - **Modifications** :
    - `frontend/src/app/organisateur/page.tsx` (modifié) — classes `page`/`contenu`/`cta` ; critère 1.
    - `frontend/src/app/calendrier/page.tsx` (modifié) — classes `page`/`contenu` ; critère 2.

---

## À venir (liste ordonnée, non détaillée)

1. Calendrier des événements : filtrage par type et par période, cartes avec photo et description.
2. Fiche action solidaire : détail d'une action existante (photos, explications).
3. Page de profil donateur : dons passés, participations, impact en mode gamification, lien visible vers le don (iRaiser).
4. Parcours entreprise mécène et testateur (non cadrés dans la passation au-delà des jobs-to-be-done).
