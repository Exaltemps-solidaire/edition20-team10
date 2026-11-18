# Déploiement

Site de parcours par profil pour **Imagine for Margo**, association de lutte contre les cancers pédiatriques : oriente chaque visiteur (organisateur, donateur, entreprise, testateur) vers son propre parcours, au lieu d'un site unique organisé par thème.

## Services

- `frontend/` : Next.js en export statique, servi par nginx sur le port 80 du conteneur (8080 sur la VM). **C'est le service exposé au public.**
- `api/` : Node sans dépendance, port 8081. Ne sert pour l'instant que `/health` et `/sante` ; aucune route métier encore.

## Services externes

Aucun pour l'instant (pas de base de données, pas d'appel IA, pas d'e-mail). Le choix de persona et les données affichées sont en dur côté frontend.

## Fragile / inachevé

- Pas de prototype ni de description écran par écran dans la passation de l'équipe : les écrans de cette version sont une proposition de l'agent, à confronter aux cadreurs.
- Le choix de persona est mémorisé dans le `localStorage` du navigateur, sans compte ni authentification (conforme à la passation : « pas de connexion pour cette version »).
- Seuls les écrans « Qui êtes-vous ? » et « Accueil » existent ; les parcours organisateur, calendrier, fiche action et profil donateur restent à construire.

## Contacts

- Équipe : Équipe 10 (hackathon eXaltemps Solidaire).
- Association : Imagine for Margo — contact à confirmer par les cadreurs.
