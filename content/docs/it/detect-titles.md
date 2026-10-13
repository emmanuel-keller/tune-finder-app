---
{
  "id": "detect-titles",
  "title": "Rilevare e verificare i titoli",
  "summary": "Crea un indice modificabile con OCR locale e controlla le proposte.",
  "section": "Indici e rilevamento",
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
## Cosa fa il rilevamento {#overview}
L’OCR legge testo stampato e propone titoli/intervalli sul dispositivo, senza inviare il PDF a un servizio OCR. Solo le proposte controllate e salvate entrano nella ricerca.
Inizia con un [PDF importato](/it/docs/import-pdf/). L’indice elenca titoli e pagine, separatamente dal PDF.
## Rilevare titoli {#detect}
1. Apri **Libri** e il libro.
2. Tocca **Rileva titoli**; l’editor si apre e avvia il rilevamento.
3. Mantieni TuneFinder in primo piano.
4. Verifica le voci al termine.
## Sospendere e riprendere {#pause-resume}
**Annulla** sospende dopo la pagina corrente. Anche passare in background interrompe. PDF e pagine completate restano; **Rileva titoli** riprende.
Salva o scarta modifiche pendenti prima. Sostituire il PDF può invalidare una bozza precedente: generane una nuova.
## Verificare e salvare {#review}
1. Controlla titoli e prima/ultima pagina.
2. Apri pagine dall’editor; numeri stampati possono differire dal PDF.
3. Correggi con **Modifica**, **Elimina** o **Aggiungi brano**.
4. Tocca **Salva** per salvare l’indice.
5. Nei dettagli, scegli **Usa per la ricerca** se non è selezionato per ricerca gratuita.
![Verifica di titoli e intervalli di pagine](/screenshots/it/index-editor.png)
## Migliorare risultati imperfetti {#quality}
Testo latino stampato nitido funziona meglio. Scrittura manuale, caratteri decorativi, scansioni inclinate/pallide, sommari e più brani sulla stessa pagina causano errori. La sola notazione non identifica un brano.
Controlla intervalli: titoli ripetuti possono unirsi e continuazioni senza titolo richiedere correzioni. Se mancano titoli, aggiungi manualmente; il PDF rimane disponibile.
## Ricostruire o recuperare {#rebuild}
Puoi rigenerare un indice eliminato se il PDF è presente. Ripristina o scegli il PDF se manca. Non eliminare la libreria per riparare OCR.
[Contatta l’assistenza](mailto:contact@tunefinder.app) con versione, piattaforma, azione e riferimento persistente. Gli indici accettati possono [sincronizzarsi](/it/docs/android-drive/).
