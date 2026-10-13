---
{
  "id": "android-drive",
  "title": "Synchronisierung",
  "summary": "Synchronisiere mit iCloud auf iPhone/iPad oder Google Drive auf Android.",
  "section": "Synchronisierung und Wiederherstellung",
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
## Vor der Verbindung {#before-connecting}
Die Bibliothek funktioniert lokal. Optionale Synchronisierung braucht Internet: iCloud Documents auf iPhone/iPad, Google Drive auf Android. Nutze dieselbe Cloudkonto-Anmeldung auf Geräten je Plattform.
Zwischen iOS und Android wird nicht synchronisiert. Wähle oben deine Plattform.
## Konto verbinden {#connect}
::: ios
### iPhone und iPad: iCloud {#connect-ios}
1. Melde dich bei iCloud an und aktiviere iCloud Drive für TuneFinder in den Geräteeinstellungen.
2. Öffne **Einstellungen** per Zahnrad.
3. Tippe auf **iCloud aktivieren**, wenn verfügbar.
4. Warte auf Abschluss und prüfe den Status.
5. Aktiviere auf dem anderen iPhone/iPad mit demselben Konto.
Falls nicht verfügbar, prüfe Anmeldung und Drive. Das Bild zeigt diesen Zustand; lokale Nutzung bleibt möglich.
![iOS-Einstellungen mit iCloud-Verfügbarkeit](/screenshots/de/device-sync.png)
**iCloud pausieren** pausiert, ohne lokale/Cloudkopien zu löschen. Aktiviere erneut und halte Geräte mit ausstehenden Änderungen verfügbar.
:::
::: android
### Android: Google Drive {#connect-android}
1. Öffne **Einstellungen**.
2. Tippe auf **Google Drive verbinden**.
3. Wähle das Konto und erlaube Zugriff.
4. Warte auf erste Synchronisierung und prüfe vor dem Verlassen.
5. Wiederhole auf anderen Android-Geräten mit demselben Konto, auch denen mit lokalen Änderungen.
TuneFinder verwaltet **TuneFinder Sync**; kein Ordner wird im Dateidialog gewählt. Abbrechen/Ablehnen behält die lokale Bibliothek.
![Android-Einstellungen mit Google-Drive-Verbindung](/screenshots/de/device-sync-android.png)
:::
## Was synchronisiert wird {#what-syncs}
PDFs, akzeptierte Indizes, Buchnamen und Playlists. Ungespeicherte Indexänderungen und OCR-Fortschritt bleiben lokal. Speichere vor Erwartung auf anderem Gerät.
Alle Indizes können synchronisieren, kostenlose Suche nutzt einen ausgewählten. Clouddateien schalten Käufe nicht frei.
## Wann Änderungen ankommen {#when}
Synchronisierung läuft beim Start mit bereitem Dienst und nach akzeptierten lokalen Buch-/Playlist-Änderungen. Kein ständiges Abfragen und kein Start nur beim Vordergrundwechsel.
Nutze **Jetzt synchronisieren** in **Einstellungen** oder ziehe **Bücher**/**Playlists** zur Aktualisierung herunter. Fordere auf anderem Gerät ebenfalls an und warte auf beide Abschlüsse.
## Verbindungs- oder Synchronisierungsprobleme {#troubleshooting}
Prüfe Internet, Konto (iCloud auf iOS, Google auf Android) und lokalen/Cloudspeicher. Android: **Google Drive erneut verbinden** erneuert Zugriff. iOS: prüfe Drive und Pause. Wechsle das Konto nicht zur Reparatur.
Große PDFs brauchen Zeit. Behalte Originale/lokale Kopien, lösche und importiere die Bibliothek nicht neu. Vergleiche Konfliktversionen; Cloud ist nicht automatisch neuer.
Bei **TF-SYNC-4300** oder dauerhafter Referenz [kontaktiere Hilfe](mailto:contact@tunefinder.app) mit App-/Systemversion, Aktion und Referenz. Android-Systembackup ist separate Wiederherstellung, keine Synchronisierung.
Füge mit [PDF-Import](/de/docs/import-pdf/) hinzu und [prüfe Titel](/de/docs/detect-titles/).
