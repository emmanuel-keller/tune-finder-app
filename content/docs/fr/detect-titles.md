---
{
  "id": "detect-titles",
  "title": "Détecter et vérifier les titres",
  "summary": "Créez un index modifiable par OCR sur l’appareil, vérifiez les propositions et enregistrez-le.",
  "section": "Index et détection des titres",
  "order": 4,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "manual-index",
    "troubleshooting"
  ]
}
---
## Le rôle de la détection {#overview}
L’OCR lit le texte imprimé du PDF et propose des titres de morceaux et des plages de pages. Il fonctionne sur l’appareil ; TuneFinder n’envoie pas le PDF à un service d’OCR. Les propositions deviennent recherchables uniquement après vérification et enregistrement.

Commencez avec un [PDF importé](/fr/docs/import-pdf/). Un index liste les titres et leurs pages PDF ; il est distinct du PDF.

## Détecter les titres {#detect}
1. Ouvrez **Recueils** et touchez le recueil.
2. Touchez **Détecter les titres**. L’éditeur d’index s’ouvre et lance la détection.
3. Gardez TuneFinder au premier plan pendant le traitement des pages.
4. À la fin, vérifiez les entrées proposées dans l’éditeur.

## Suspendre et reprendre {#pause-resume}
Touchez **Annuler** pendant la détection pour la suspendre après la page en cours. Le passage en arrière-plan interrompt également la détection. Le PDF et la progression des pages terminées sont conservés. Revenez au recueil et touchez **Détecter les titres** pour reprendre.

Si vous avez des modifications manuelles non enregistrées, enregistrez-les ou abandonnez-les avant de lancer la détection. Le remplacement du PDF peut invalider un brouillon précédent ; générez un nouvel index pour le nouveau PDF.

## Vérifier et enregistrer {#review}
1. Vérifiez chaque titre et ses première et dernière pages PDF.
2. Ouvrez les pages PDF depuis l’éditeur pour comparer les titres et les plages de pages. Les numéros de pages PDF peuvent différer des numéros imprimés.
3. Utilisez **Modifier**, **Supprimer** ou **Ajouter un morceau** pour corriger les erreurs ou ajouter les entrées manquantes.
4. Touchez **Enregistrer** lorsque l’index est prêt.
5. Revenez aux détails. Pour la recherche gratuite dans un seul recueil, touchez **Utiliser pour la recherche** si ce recueil n’est pas sélectionné.

![Vérification des titres et des pages PDF dans l’éditeur d’index](/screenshots/fr/index-editor.png)

## Améliorer un résultat imparfait {#quality}
Les textes imprimés latins nets donnent les meilleurs résultats. Les titres manuscrits, polices décoratives, scans inclinés ou pâles, sommaires et pages contenant plusieurs morceaux peuvent entraîner des erreurs. La détection ne reconnaît pas un morceau à partir de la notation musicale seule.

Vérifiez les plages de pages : des titres répétés peuvent être réunis en une plage, et des pages de continuation sans titre peuvent nécessiter une correction manuelle. Si aucun titre n’est détecté, créez les entrées manuellement ; le PDF reste disponible.

## Reconstruire ou récupérer {#rebuild}
La suppression d’un index n’empêche pas la détection tant que le PDF est disponible. Ouvrez les détails et touchez **Détecter les titres** pour reconstruire l’index. Si le PDF est inaccessible, restaurez-le ou choisissez son fichier avant de réessayer. Ne supprimez pas la bibliothèque pour réparer une erreur de reconnaissance.

Si l’erreur persiste, [contactez l’assistance](mailto:contact@tunefinder.app) avec la version de l’app, la plateforme, l’action et la référence affichée. Pour synchroniser les index enregistrés, consultez [Synchronisation](/fr/docs/android-drive/).
