---
{
  "id": "troubleshooting",
  "title": "Dépannage et assistance",
  "summary": "Vérifiez les problèmes d’importation, d’OCR, de recherche ou de synchronisation en conservant la bibliothèque.",
  "section": "Dépannage",
  "order": 10,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "import-pdf",
    "android-drive"
  ]
}
---
## Importation ou PDF inaccessible {#pdf}
Ouvrez le PDF d’origine dans son app et téléchargez-le entièrement. Partagez un PDF réel plutôt qu’un lien, ou essayez **Importer un PDF** dans TuneFinder. Le PDF doit être déverrouillé, de 500 Mo et 1 000 pages maximum. Une première page lisible ne garantit pas toutes les pages suivantes.

**TF-SYNC-4610** indique un problème de copie ; **TF-SYNC-4611** un PDF invalide ; **TF-SYNC-4612** une taille excessive ; **TF-SYNC-4613** un mot de passe ; **TF-SYNC-4614** trop de pages. Conservez l’original en obtenant une copie déverrouillée, réduite ou réparée. **TF-SYNC-4606** indique une installation impossible à terminer en sécurité ; ce n’est pas une preuve de fichier absent ou corrompu. Réessayez au premier plan et signalez la référence persistante.

## OCR imprécis ou interrompu {#ocr}
Gardez l’app au premier plan et reprenez avec **Détecter les titres** après interruption. Vérifiez la présence du PDF. Des titres imprimés nets fonctionnent mieux que les polices décoratives, l’écriture manuscrite ou les scans dégradés. Vérifiez les propositions et corrigez les titres et pages. L’OCR est facultatif ; [l’indexation manuelle](/fr/docs/manual-index/) reste disponible.

## Recherche vide ou mauvaise page {#search}
Vérifiez le recueil indexé sélectionné, l’enregistrement et l’orthographe. Essayez un titre plus court. Les brouillons OCR non enregistrés ne sont pas recherchables. Restaurez le PDF correspondant s’il manque. En cas de mauvaise page, vérifiez la numérotation PDF plutôt qu’imprimée et [corrigez l’entrée](/fr/docs/manual-index/#pages).

## Synchronisation ou conflit {#sync}
Vérifiez le compte cloud, la connexion et l’espace libre. Demandez **Synchroniser** sur chaque appareil concerné et attendez la fin. Sur Android, renouvelez l’autorisation avec **Reconnecter Google Drive** ; sur iOS, vérifiez iCloud Drive et que la synchronisation n’est pas suspendue.

Comparez les versions de l’appareil et du cloud avant de résoudre un conflit. Conservez les modifications non synchronisées et PDF d’origine. Ne supposez pas que le cloud est plus récent, ne supprimez pas la bibliothèque et ne changez pas de compte pour réparer. Si l’état change pendant la résolution, actualisez et comparez à nouveau.

**TF-SYNC-4004** indique un échec de téléchargement, **TF-SYNC-4005** un échec de remplacement, **TF-SYNC-4006** une modification pendant la synchronisation et **TF-SYNC-4300** un échec de synchronisation/actualisation. Vérifiez la disponibilité, réessayez une fois les changements terminés et signalez une erreur persistante. La référence désigne une catégorie ou étape, pas une preuve de perte de données. Suivez aussi l’explication affichée et [Synchronisation](/fr/docs/android-drive/).

## Contacter l’assistance {#support}
Écrivez à [contact@tunefinder.app](mailto:contact@tunefinder.app) avec la version de l’app, la plateforme et sa version, l’action, la référence exacte et la répétition éventuelle. Vérifiez l’absence de titres, noms ou comptes privés dans une capture avant de la joindre. N’envoyez pas de PDF privé, mots de passe ou données de paiement sans demande appropriée et votre accord.

Conservez le document d’origine et la bibliothèque locale pendant l’enquête. Examen par la boutique, restauration d’achat et connexion cloud sont des opérations distinctes ; précisez celle qui échoue. [Accès à la recherche et langue](/fr/docs/settings-purchases/) explique la limitation d’accès à l’écran d’achat de la version 1.5.5.
