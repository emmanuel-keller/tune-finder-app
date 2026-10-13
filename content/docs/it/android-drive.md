---
{
  "id": "android-drive",
  "title": "Sincronizzazione",
  "summary": "Sincronizza con iCloud su iPhone/iPad o Google Drive su Android.",
  "section": "Sincronizzazione e recupero",
  "order": 8,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "playlists",
    "troubleshooting"
  ]
}
---
## Prima della connessione {#before-connecting}
La libreria funziona localmente. La sincronizzazione facoltativa richiede internet: iCloud Documents su iPhone/iPad, Google Drive su Android. Usa lo stesso account cloud sui dispositivi di ogni piattaforma.
Non si sincronizza tra iOS e Android. Scegli la piattaforma sopra.
## Collegare l’account {#connect}
::: ios
### iPhone e iPad: iCloud {#connect-ios}
1. Accedi a iCloud e attiva iCloud Drive per TuneFinder nelle impostazioni del dispositivo.
2. Apri **Impostazioni** dall’ingranaggio.
3. Tocca **Attiva iCloud** quando disponibile.
4. Attendi la fine e verifica lo stato.
5. Attiva su un altro iPhone/iPad con lo stesso account.
Se indisponibile, controlla accesso e Drive. L’immagine mostra tale stato; la libreria locale resta utilizzabile.
![Impostazioni iOS con disponibilità iCloud](/screenshots/it/device-sync.png)
**Sospendi iCloud** sospende senza cancellare copie locali/cloud. Riattiva per riprendere e mantieni disponibili dispositivi con modifiche pendenti.
:::
::: android
### Android: Google Drive {#connect-android}
1. Apri **Impostazioni**.
2. Tocca **Collega Google Drive**.
3. Scegli l’account e autorizza accesso.
4. Attendi la sincronizzazione iniziale e verifica prima di uscire.
5. Ripeti sugli altri Android con lo stesso account, inclusi quelli con modifiche locali.
TuneFinder gestisce **TuneFinder Sincronizzazione**; non scegli cartelle nel selettore. Annullare o negare accesso conserva la libreria locale.
![Impostazioni Android con connessione Google Drive](/screenshots/it/device-sync-android.png)
:::
## Cosa si sincronizza {#what-syncs}
PDF, indici accettati, nomi e playlist. Modifiche non salvate e progresso OCR rimangono sul dispositivo: salva prima di aspettare l’indice altrove.
Tutti gli indici possono sincronizzarsi, ma ricerca gratuita usa uno selezionato. File cloud non sbloccano acquisti.
## Quando arrivano i cambiamenti {#when}
Sincronizza all’avvio con servizio pronto e dopo modifiche locali accettate di libri/playlist. Non controlla continuamente e non parte solo tornando in primo piano.
Usa **Sincronizza ora** in **Impostazioni** o trascina per aggiornare **Libri**/**Playlist**. Avvia manualmente anche sull’altro dispositivo e attendi entrambi prima di confrontare.
## Problemi di connessione o sincronizzazione {#troubleshooting}
Controlla internet, account (iCloud su iOS, Google su Android) e spazio locale/cloud. Android: **Ricollega Google Drive** rinnova accesso. iOS: verifica Drive e pausa. Non cambiare account per riparare.
PDF grandi richiedono tempo. Conserva originali/copie locali, non cancellare e reimportare la libreria. Nei conflitti confronta versioni senza presumere cloud più recente.
Per **TF-SYNC-4300** o riferimenti persistenti, [contatta assistenza](mailto:contact@tunefinder.app) con versioni app/sistema, azione e riferimento. Su Android il backup di sistema è recupero separato, non sincronizzazione.
Aggiungi con [Importare PDF](/it/docs/import-pdf/) e [verifica titoli](/it/docs/detect-titles/).
