---
{
  "id": "manage-books",
  "title": "Manage books and files",
  "summary": "Find, rename, replace or remove library items without confusing PDFs and indexes.",
  "section": "Books and PDFs",
  "order": 3,
  "platforms": [
    "ios",
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "import-pdf",
    "manual-index"
  ]
}
---
## Find a book {#find}
Open **Books** and use its search box to filter names. The list is alphabetical; it shows whether the PDF and index are available. Tap a row for the actions belonging to that book.

## Use the catalogue {#catalogue}
1. In **Books**, tap **Browse catalogue**.
2. Choose a book matching your edition.
3. Use **Download index** when a starter index is available, and **Choose PDF…** to link your copy.
4. Check the PDF pages before relying on the starter index. Different editions can have different pages or titles.

The catalogue does not provide copyrighted PDFs. Books with local PDFs or indexes appear in your library. A starter index is a starting point; edit it to match your document.

## Rename a personal book {#rename}
1. Open the imported book’s details and find **Manage files**.
2. Tap **Rename**, enter the name, and tap **Save changes**.
3. Return to the library and search for the new name.

Renaming changes the display name and preserves the book’s identity and playlist references. Catalogue names are not renamed with this action.

![Book details provide separate actions for PDFs and indexes](/screenshots/en/book-files-csv.png)

## Replace or remove files {#files}
Use **Replace PDF** to choose a replacement. Keep the original until the replacement has opened successfully. The existing index may no longer match; review its pages or generate a new one.

**Remove index** removes the accepted index, leaving the PDF available. **Remove PDF** removes the library’s PDF copy, leaving the index available. Confirm the requested action only after checking which book is open. If synchronization is enabled, these accepted deletions can propagate to the same-platform devices; paused/offline deletion is retained for later synchronization.

## Delete a personal book {#delete}
Use **Delete document** in an imported book’s details and confirm. This removes that personal book’s library assets. It does not delete the original PDF in the source app. Existing playlist references are retained and may become unavailable; remove or repair them deliberately rather than assuming they were deleted too.

Removing assets is not a repair step for a sync or OCR error. [Troubleshooting](/docs/troubleshooting/) explains safer checks.
