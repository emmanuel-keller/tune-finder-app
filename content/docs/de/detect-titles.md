---
{
  "id": "detect-titles",
  "title": "Titel erkennen und prüfen",
  "summary": "Erstelle einen bearbeitbaren Index mit lokaler OCR und prüfe die Vorschläge.",
  "section": "Indizes und Titelerkennung",
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
## Was die Erkennung macht {#overview}
OCR liest gedruckten Text und schlägt Titel/Seitenbereiche vor. Sie läuft lokal und sendet keine PDF an einen OCR-Dienst. Nur geprüfte und gespeicherte Vorschläge werden suchbar.
Beginne mit einer [importierten PDF](/de/docs/import-pdf/). Der Index listet Titel und Seiten getrennt von der PDF.
## Titel erkennen {#detect}
1. Öffne **Bücher** und das Buch.
2. Tippe auf **Titel erkennen**; der Editor startet die Erkennung.
3. Halte TuneFinder im Vordergrund.
4. Prüfe die Einträge nach Abschluss.
## Pausieren und fortsetzen {#pause-resume}
**Abbrechen** pausiert nach der aktuellen Seite. Hintergrundwechsel unterbricht ebenfalls. PDF und verarbeitete Seiten bleiben; **Titel erkennen** setzt fort.
Speichere oder verwerfe offene Bearbeitungen zuerst. Eine ersetzte PDF kann einen alten Entwurf ungültig machen: generiere einen neuen.
## Prüfen und speichern {#review}
1. Prüfe Titel und erste/letzte Seite.
2. Öffne PDF-Seiten im Editor; gedruckte Zahlen können abweichen.
3. Korrigiere mit **Bearbeiten**, **Löschen** oder **Titel hinzufügen**.
4. Nutze **Speichern** für den Index.
5. Wähle in Details **Für die Suche verwenden**, falls für kostenlose Suche noch nicht ausgewählt.
![Titel und Seitenbereiche prüfen](/screenshots/de/index-editor.png)
## Unvollständige Ergebnisse verbessern {#quality}
Klarer gedruckter lateinischer Text funktioniert am besten. Handschrift, dekorative Schrift, schiefe/blasse Scans, Inhaltsseiten und mehrere Titel pro Seite führen zu Fehlern. Notation allein identifiziert keinen Titel.
Prüfe Bereiche: Wiederholte Überschriften können zusammengeführt werden, Fortsetzungen ohne Überschrift brauchen manuelle Korrektur. Ohne erkannte Titel kannst du manuell eintragen; die PDF bleibt.
## Neu aufbauen oder wiederherstellen {#rebuild}
Nach Indexlöschung kannst du erneut erkennen, solange die PDF verfügbar ist. Stelle sie wieder her oder wähle sie neu. Lösche nicht die Bibliothek zur OCR-Reparatur.
[Kontaktiere die Hilfe](mailto:contact@tunefinder.app) mit Version, Plattform, Aktion und dauerhafter Referenz. Akzeptierte Indizes lassen sich [synchronisieren](/de/docs/android-drive/).
