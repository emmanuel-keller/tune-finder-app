---
{
  "id": "android-drive",
  "title": "Connecter Google Drive sur Android",
  "summary": "Conservez votre bibliothèque locale et synchronisez-la avec vos autres appareils Android.",
  "section": "Synchronisation et récupération",
  "order": 3,
  "platforms": [
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "import-pdf",
    "detect-titles"
  ]
}
---
## Avant la connexion {#before-connecting}
Votre bibliothèque fonctionne localement sans connexion cloud. La synchronisation Google Drive est facultative et nécessite une connexion internet et un compte Google. Utilisez le même compte sur chaque appareil Android à synchroniser.

Ce guide concerne Android. L’iPhone et l’iPad utilisent iCloud Documents ; TuneFinder ne synchronise pas les bibliothèques entre iOS et Android.

## Connecter votre compte {#connect}
1. Ouvrez **Paramètres** avec le bouton en forme d’engrenage.
2. Touchez **Connecter Google Drive**.
3. Choisissez votre compte Google et autorisez l’accès demandé.
4. Attendez la synchronisation initiale et vérifiez l’état avant de quitter l’écran.
5. Répétez ces étapes avec le même compte sur vos autres appareils Android, y compris ceux contenant des modifications locales.

TuneFinder crée et gère son dossier **TuneFinder Sync** dans Drive. Vous ne choisissez pas de dossier dans le sélecteur de fichiers. Si vous annulez le choix du compte ou refusez l’accès, votre bibliothèque locale reste disponible.

![Synchronisation et réglage de la langue de l’app](/screenshots/fr/device-sync.png)

## Les éléments synchronisés {#what-syncs}
Les PDF, index enregistrés, noms des recueils et playlists participent à la synchronisation. Les modifications d’index non enregistrées et la progression OCR restent sur leur appareil d’origine. Enregistrez l’index avant de l’attendre sur un autre appareil.

Tous les index peuvent se synchroniser, mais la recherche gratuite utilise toujours un seul recueil indexé sélectionné. La présence de fichiers dans le cloud n’active pas la Recherche multi-recueils.

## Quand les changements arrivent {#when}
TuneFinder synchronise après le lancement lorsque le service est prêt, et après les modifications locales enregistrées des playlists ou recueils. Il ne recherche pas continuellement les changements et ne lance pas de synchronisation simplement au retour au premier plan.

Pour demander une mise à jour, ouvrez **Paramètres** et touchez **Synchroniser**, ou tirez pour actualiser **Recueils** ou **Playlists**. Lancez aussi une synchronisation manuelle sur l’autre appareil pour vérifier l’arrivée d’un changement. Attendez la fin sur les deux appareils avant de comparer.

## Problèmes de connexion ou de synchronisation {#troubleshooting}
Vérifiez la connexion, le compte Google et l’espace disponible sur l’appareil et dans Drive. Pour renouveler l’autorisation, utilisez **Reconnecter Google Drive**. Gardez le compte prévu ; ne changez pas de compte comme tentative de réparation.

Le transfert de gros PDF peut prendre du temps. Un échec ne justifie pas la suppression et la réimportation de la bibliothèque. Conservez vos copies locales et les PDF d’origine. En cas de conflit, comparez les copies avant de choisir ; ne supposez pas que la copie cloud est plus récente.

Pour **TF-SYNC-4300** ou toute autre référence affichée, [contactez l’assistance](mailto:contact@tunefinder.app) avec la version de l’app, la version d’Android, l’action et la référence. La sauvegarde système Android est un mécanisme de récupération distinct qui ne remplace pas la synchronisation.

Pour ajouter un document, suivez [Importer et partager un PDF](/fr/docs/import-pdf/), puis [détectez et vérifiez ses titres](/fr/docs/detect-titles/).
