---
{
  "id": "import-pdf",
  "title": "Importer et partager un PDF",
  "summary": "Ajoutez un PDF personnel à votre bibliothèque depuis le sélecteur de fichiers ou une autre app.",
  "section": "Recueils et PDF",
  "order": 2,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "manage-books",
    "detect-titles"
  ]
}
---
## Avant de commencer {#before-you-start}
Utilisez un PDF déverrouillé, de 500 Mo maximum et de 1 000 pages maximum. Téléchargez-le entièrement dans l’app d’origine. Un lien vers un site n’est pas un document PDF.

TuneFinder copie le PDF dans votre bibliothèque privée et ne modifie pas le fichier d’origine. Les modifications ultérieures de l’original ne mettent pas à jour la copie importée. Aucune connexion cloud ni aucun achat n’est nécessaire pour importer.

## Importer dans TuneFinder {#import}
1. Ouvrez **Recueils** dans la navigation du bas.
2. Touchez **Importer un PDF** et choisissez le PDF dans le sélecteur de documents.
3. Attendez la fin de **Importation du PDF…**. Le recueil apparaît dans votre bibliothèque.
4. Touchez le recueil pour ouvrir ses détails. Vous pouvez ouvrir le PDF avant de créer un index.

![La bibliothèque de recueils avec Importer un PDF](/screenshots/fr/book-indexes.png)

## Partager depuis une autre app {#share}
::: ios
### Sur iPhone ou iPad {#share-ios}
1. Dans Apple Books, ouvrez les options du PDF et choisissez **Partager**. Dans Fichiers, utilisez l’action de partage du PDF.
2. Choisissez **TuneFinder** dans la rangée d’apps. Il peut se trouver sous **Plus**.
3. Attendez que TuneFinder importe le PDF et ouvre les détails du recueil.

L’app d’origine doit partager un PDF réel. Si TuneFinder est absent, vérifiez que vous partagez un fichier PDF et non un lien ou un document dans un autre format.
:::
::: android
### Sur Android {#share-android}
1. Dans votre app de fichiers ou de PDF, choisissez **Partager** ou **Ouvrir avec** pour le PDF.
2. Choisissez **TuneFinder** et attendez la fin de l’importation.
3. Consultez le recueil importé dans ses détails. Si l’app partage plusieurs PDF, TuneFinder les importe un par un.

Aucune autorisation de stockage supplémentaire ni connexion Google Drive n’est nécessaire. L’app d’origine doit donner accès au PDF, plutôt que partager un lien vers un site.
:::

## Après l’importation {#after-importing}
Un doublon exact ouvre le recueil personnel existant. Pour rechercher ses titres, [détectez et vérifiez les titres](/fr/docs/detect-titles/) ou créez un index manuellement dans les détails. La recherche gratuite utilise un seul recueil indexé sélectionné ; vous pouvez changer ce choix sans supprimer les autres index. La Recherche multi-recueils permet de rechercher dans plusieurs recueils à la fois.

## Si l’importation échoue {#troubleshooting}
Vérifiez que l’app d’origine peut ouvrir le PDF entièrement téléchargé, qu’il est déverrouillé et respecte les limites. Essayez le même PDF avec **Importer un PDF**. Conservez l’original.

Pour **TF-SYNC-4610**, téléchargez le PDF localement puis partagez le fichier réel. **TF-SYNC-4612** indique la limite de taille, **TF-SYNC-4613** un PDF protégé par mot de passe et **TF-SYNC-4614** la limite de pages. D’autres références, comme **TF-SYNC-4606**, peuvent indiquer une installation interrompue pour préserver les fichiers ; elles ne signifient pas à elles seules que le PDF est endommagé.

Si le problème persiste, [contactez l’assistance](mailto:contact@tunefinder.app) avec la version de l’app, la version d’iOS ou d’Android, l’action tentée et la référence affichée. N’envoyez pas de PDF privé sans demande de l’assistance et votre accord.
