---
{
  "id": "troubleshooting",
  "title": "Troubleshooting and support",
  "summary": "Check common import, OCR, search and sync problems while keeping your library safe.",
  "section": "Troubleshooting",
  "order": 10,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "import-pdf",
    "android-drive"
  ]
}
---
## Import or inaccessible PDF {#pdf}
Open the original PDF in its source app and download it fully. Share an actual PDF rather than a link, or try **Import PDF** in TuneFinder. Imports require an unlocked PDF of at most 500 MB and 1,000 pages. A readable first page does not guarantee every later page is readable.

**TF-SYNC-4610** indicates a copying problem; **TF-SYNC-4611** an invalid PDF; **TF-SYNC-4612** excessive size; **TF-SYNC-4613** password protection; **TF-SYNC-4614** excessive pages. Keep the original while obtaining an unlocked, smaller or repaired copy. **TF-SYNC-4606** means installation could not finish safely; it does not prove the file is missing or corrupt. Retry in the foreground and report a persistent reference.

## OCR is inaccurate or interrupted {#ocr}
Keep the app in the foreground and resume from **Detect tune titles** after interruption. Check the PDF remains present. Clear printed titles work better than decorative fonts, handwriting and poor scans. Review suggestions, add missed tunes and correct page ranges manually. OCR is optional; [manual indexing](/docs/manual-index/) remains available.

## Search finds nothing or opens the wrong page {#search}
Check the selected indexed book, saved changes and title spelling. Try a shorter title. Unsaved OCR drafts are not searchable. If the PDF is missing, restore the matching file. For a wrong page, check PDF numbering rather than printed numbering and [correct the entry](/docs/manual-index/#pages).

## Synchronization or conflict {#sync}
Check the provider account, connection and free storage. Request **Sync now** on each relevant device and wait for completion. On Android, refresh authorization with **Reconnect Google Drive**; on iOS, check iCloud Drive and whether sync is paused.

For a conflict, compare the device and cloud versions before choosing a copy. Keep unsynchronized edits and original PDFs. Do not assume the cloud version is newer, delete the library, or change accounts as a repair attempt. If the state changes during resolution, refresh and compare again.

**TF-SYNC-4004** identifies a download failure, **TF-SYNC-4005** a replacement failure, **TF-SYNC-4006** a change during synchronization, and **TF-SYNC-4300** a synchronization/refresh failure. Their safe next step is to check availability, retry after changes settle, and report a persistent error. A reference identifies a category or step; it does not establish that data was lost. Follow the app’s displayed explanation alongside [Synchronization](/docs/android-drive/).

## Contact support {#support}
Email [contact@tunefinder.app](mailto:contact@tunefinder.app) with the app version, platform and OS version, the action, exact displayed reference, and whether the problem repeats. Include a screenshot only after checking it for private titles, names or account details. Do not send a private PDF, passwords or payment information unless an appropriate file is explicitly requested and you agree.

Keep the original document and local library while investigating. Store review, purchase restoration and cloud connection are different operations; say which one failed. For purchase and restoration controls, see [Search access and app language](/docs/settings-purchases/).
