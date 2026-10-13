---
{
  "id": "manual-index",
  "title": "Indizes bearbeiten und CSV austauschen",
  "summary": "Erstelle Einträge, korrigiere Seiten und importiere oder exportiere Indizes.",
  "section": "Indizes und Titelerkennung",
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
## Index erstellen oder bearbeiten {#edit}
1. Öffne Details aus **Bücher**.
2. Nutze **Index manuell erstellen** ohne Index oder **Index bearbeiten**.
3. **Titel hinzufügen**: Titel, **Erste Seite** und optional **Letzte Seite**; speichere den Eintrag.
4. Korrigiere mit **Bearbeiten** oder entferne mit **Löschen**.
5. Tippe oben auf **Speichern** für den gesamten Index.
Eintrag und gesamten Index speichern sind getrennte Schritte. Suche Einträge im Editor. Lies beim Verlassen mit ungespeicherten Änderungen die Bestätigung zum Behalten/Verwerfen.
![Titel und Seiten bearbeiten](/screenshots/de/index-editor.png)
## PDF-Seitenbereiche korrigieren {#pages}
Seiten sind positive ganze Zahlen ab PDF-Seite 1. Leere letzte Seite bedeutet eine Seite; sonst muss sie mindestens der ersten entsprechen. Prüfe durch Öffnen im Editor.
Deckblatt/Inhalt können gedruckte Nummern verschieben. Korrigiere PDF-Nummern; es gibt keinen globalen Versatzregler. Ist gedruckte Seite 10 PDF-Seite 14, nutze 14 und prüfe den Versatz im ganzen Dokument.
## CSV importieren {#import-csv}
1. Exportiere den aktuellen Index vor dem Ersetzen.
2. Wähle **CSV importieren** in Details und eine Text-CSV.
3. Prüfe Einträge und Seiten mit **Index bearbeiten**.
Kommagetrennte Spalten: **Title,FirstPage,LastPage**; dieser Kopf ist erlaubt. **Blue Example,12,14** umfasst PDF 12–14. Die dritte Spalte ist optional und übernimmt die erste Seite. Titel mit Kommas stehen in Anführungszeichen, innere Anführungszeichen werden verdoppelt. Nutze positive ganze Zahlen und ein Ende nicht vor dem Anfang.
Leere/ungültige CSV wird abgelehnt. Import ersetzt den Index, fügt keine PDF hinzu und repariert keine falsche Verknüpfung. Behalte die Kopie und kläre Versionskonflikte vor erneutem Versuch.
## Exportieren und prüfen {#export}
**CSV exportieren** teilt CSV-Text: speichere/kopiere ihn in ein Ziel, das Kommas erhält. Er enthält keine PDF und ist keine vollständige Bibliothekssicherung.
**Für diese PDF als geprüft markieren** dokumentiert bei verfügbarer Aktion deine Prüfung, korrigiert aber keine Seiten. **Starter-Index wiederherstellen** ersetzt Änderungen durch den Katalog-Startindex; exportiere sie vorher.
