---
{
  "id": "manual-index",
  "title": "Modifier les index et échanger des CSV",
  "summary": "Créez des entrées manuellement, corrigez les pages et importez ou exportez un index.",
  "section": "Index et détection des titres",
  "order": 5,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "detect-titles",
    "search-reading"
  ]
}
---
## Créer ou modifier un index {#edit}
1. Ouvrez les détails depuis **Recueils**.
2. Touchez **Créer un index manuellement** sans index, ou **Modifier l’index** pour un index existant.
3. Touchez **Ajouter un morceau**, saisissez le titre, la **Première page** et éventuellement la **Dernière page**, puis enregistrez l’entrée.
4. Utilisez **Modifier** pour corriger une entrée ou **Supprimer** pour la retirer.
5. Touchez **Enregistrer** en haut de l’éditeur pour enregistrer l’index complet.

Enregistrer une entrée du formulaire et enregistrer l’index complet sont deux étapes distinctes. La recherche de l’éditeur retrouve une entrée dans un long index. Si vous quittez avec des modifications non enregistrées, lisez la confirmation avant de les conserver ou de les abandonner.

![L’éditeur permet de corriger les titres et pages](/screenshots/fr/index-editor.png)

## Corriger les plages de pages PDF {#pages}
Les pages sont des entiers positifs commençant à la page PDF 1. Laissez la dernière page vide pour une entrée d’une page, ou saisissez une dernière page au moins égale à la première. Ouvrez la page PDF depuis l’éditeur pour vérifier.

Les numéros imprimés peuvent différer à cause des couvertures et sommaires. Corrigez les pages PDF dans l’index ; l’app ne propose pas de réglage global du décalage. Par exemple, si la page imprimée 10 est la page PDF 14, l’entrée doit commencer à 14. Vérifiez le décalage dans le document sans supposer qu’il reste constant.

## Importer un CSV {#import-csv}
1. Conservez un export de l’index actuel avant de le remplacer.
2. Dans les détails, touchez **Importer un CSV** et choisissez un fichier CSV texte.
3. Vérifiez les entrées et pages importées avec **Modifier l’index**.

Le fichier utilise les colonnes séparées par des virgules **Title,FirstPage,LastPage**. Un en-tête avec ces noms exacts est accepté. La ligne **Blue Example,12,14** couvre les pages PDF 12–14. La troisième valeur est facultative et vaut par défaut la première page. Entourez de guillemets un titre contenant une virgule et doublez les guillemets présents dans un titre entre guillemets. Utilisez des pages entières positives, la dernière au moins égale à la première.

Un CSV invalide ou vide est refusé. L’importation remplace l’index enregistré ; elle n’ajoute pas de PDF et ne fait pas correspondre un autre PDF. Si une autre version a changé, conservez votre copie et résolvez le conflit avant de réessayer.

## Exporter et vérifier {#export}
Utilisez **Exporter au format CSV** dans les détails. Le partage contient le texte CSV ; enregistrez-le ou copiez-le vers une destination conservant les valeurs séparées par des virgules. Un export d’index ne contient pas le PDF et n’est pas une sauvegarde complète de la bibliothèque.

Après comparaison avec le PDF associé, utilisez **Marquer comme vérifié pour ce PDF** si l’action est proposée. Cela enregistre votre vérification sans corriger les pages. **Réinitialiser avec l’index de départ**, si disponible pour un recueil du catalogue, remplace vos modifications par l’index initial ; exportez d’abord pour les conserver.
