---
{
  "id": "detect-titles",
  "title": "Detect and review tune titles",
  "summary": "Create an editable index with on-device OCR, check the suggestions, and save it.",
  "section": "Indexes and title detection",
  "order": 2,
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
## What detection does {#overview}
OCR reads printed text in your PDF and proposes tune titles and page ranges. It runs on the device; TuneFinder does not send the PDF to an OCR service. The proposed index enters search only after you review and save it.

Start with an [imported PDF](/docs/import-pdf/). An index is a list of titles and their PDF pages; it is separate from the PDF itself.

## Detect titles {#detect}
1. Open **Books** and tap the book.
2. Tap **Detect tune titles**. The index editor opens and starts detection.
3. Keep TuneFinder in the foreground while pages are processed.
4. When detection finishes, review the proposed entries in the editor.

## Pause and resume {#pause-resume}
Tap **Cancel** during detection to pause after the current page. Backgrounding the app also interrupts detection. Your PDF and completed-page progress are kept. Return to the book and tap **Detect tune titles** again to resume.

If you have unsaved manual edits, finish or discard those edits before starting detection. Replacing the PDF can invalidate an earlier draft; generate a new index for the replacement rather than applying old suggestions.

## Review and save {#review}
1. Check each proposed title and its first and last PDF pages.
2. Open PDF pages from the editor to compare the title and page range with the document. PDF page numbers may differ from printed page numbers.
3. Use **Edit**, **Delete**, or **Add tune** to correct mistakes or supply missing entries.
4. Tap **Save tune** when the index is ready.
5. Return to the book details. For free single-book search, tap **Use for search** if the book is not already selected.

![Review titles and PDF page ranges in the index editor](/screenshots/en/index-editor.png)

## Improve an imperfect result {#quality}
Clear printed Latin text works best. Handwritten headings, decorative fonts, skewed or faint scans, contents pages, and multiple tunes on one page can produce missed or incorrect titles. Detection cannot identify a tune from notation alone.

Check consecutive page ranges carefully: repeated headings may be joined into one range, while untitled continuation pages may need manual corrections. If detection finds no titles, create entries manually; your imported PDF remains available.

## Rebuild or recover {#rebuild}
Removing an index does not prevent detection while the PDF is still available. Open the book details and tap **Detect tune titles** to rebuild it. If the PDF is unavailable, restore or choose its PDF before retrying. Do not delete your library to repair a recognition failure.

If an error persists, [contact support](mailto:contact@tunefinder.app) with your app version, platform, action, and displayed error reference. For optional synchronization of accepted indexes, see [Synchronization](/docs/android-drive/).
