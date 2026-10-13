---
{
  "id": "manual-index",
  "title": "Modificare indici e scambiare CSV",
  "summary": "Crea voci, correggi pagine e importa o esporta indici.",
  "section": "Indici e rilevamento",
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
## Creare o modificare un indice {#edit}
1. Apri i dettagli da **Libri**.
2. Usa **Crea indice manualmente** senza indice, oppure **Modifica indice**.
3. **Aggiungi brano**: titolo, **Prima pagina** e **Ultima pagina** facoltativa; salva la voce.
4. Correggi con **Modifica** o rimuovi con **Elimina**.
5. Tocca **Salva** in alto per l’indice completo.
Salvare voce e indice completo sono passaggi distinti. Cerca voci nell’editor. Uscendo con modifiche pendenti, leggi la conferma prima di mantenerle o scartarle.
![Modifica di titoli e pagine](/screenshots/it/index-editor.png)
## Correggere intervalli PDF {#pages}
Pagine: interi positivi da PDF 1. Ultima pagina vuota indica una pagina; altrimenti deve essere almeno la prima. Verifica aprendola nell’editor.
Copertine e sommari possono spostare numeri stampati. Correggi pagine PDF: non esiste regolazione globale dello scarto. Se la pagina stampata 10 è PDF 14, usa 14 e controlla lo scarto nel documento.
## Importare CSV {#import-csv}
1. Esporta l’indice corrente prima di sostituirlo.
2. Usa **Importa CSV** nei dettagli e scegli un CSV di testo.
3. Verifica voci e pagine con **Modifica indice**.
Colonne separate da virgole: **Title,FirstPage,LastPage**; questa intestazione è valida. **Blue Example,12,14** copre PDF 12–14. La terza colonna è facoltativa e prende la prima pagina. Racchiudi titoli con virgole tra virgolette e raddoppia quelle interne. Usa interi positivi e fine non precedente all’inizio.
CSV vuoti/invalidi sono rifiutati. Importare sostituisce l’indice, non aggiunge PDF né corregge associazioni errate. Conserva la copia e risolvi conflitti di versioni prima di riprovare.
## Esportare e verificare {#export}
**Esporta CSV** condivide testo CSV: salva/copia verso una destinazione che conservi le virgole. Non contiene PDF e non è backup completo della libreria.
**Segna come verificato per questo PDF**, se offerto dopo verifica, registra il controllo senza correggere pagine. **Ripristina l’indice iniziale** sostituisce modifiche con l’indice iniziale del catalogo: esporta prima per conservarle.
