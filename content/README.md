# TuneFinder documentation sources

The 1.5.5 guide covers 11 topics in English and French: first library/search, PDF import/share, book/file management, OCR review, manual/CSV indexes, search/reading, playlists, synchronization, purchases/settings, troubleshooting and release notes. Portuguese, German, Spanish and Italian routes identify unavailable translations and link to the equivalent English/French article; they are excluded from the sitemap and use `noindex,follow`. Completing those translations and adding in-app Help links are subsequent work. Apple Intelligence belongs to the later 1.6.0 documentation update.

## Build and validate

No package installation is needed. Use Node 22 or newer:

```sh
node build-locales.mjs
node scripts/build-docs.mjs
node --test tests/*.test.mjs
git diff --check
```

GitHub Pages serves committed HTML from `main`. Commit generated pages and search indexes with their sources. CI verifies tracked and untracked output with `scripts/check-generated.mjs`. Review PR #5 before merging it into the live site.

## Add or edit an article

Each `docs/<language>/<stable-id>.md` starts with JSON metadata between `---` lines. Required fields are `id`, `title`, `summary`, `section`, `order`, `platforms`, `minVersion`, `verifiedRelease` and `related`. Keep IDs and explicit heading anchors stable across translations. Markdown supports paragraphs, numbered lists, bold text, HTTPS/mail links, local links, screenshots and level-two/three headings with `{#stable-anchor}`. Raw HTML is escaped. Platform blocks start with `::: ios` or `::: android` and end with `:::`; both remain visible without JavaScript.

Use matching-language screenshots and descriptive captions. Figures link to full-size images. The generator reads each PNG’s intrinsic dimensions to reserve the correct space; tests verify headers, compressed image payloads, row sizes and rendered dimensions for every referenced capture. Search loads the current language’s static index; queries stay in the browser. Normalized text is prepared once on index load. The browser stores the platform preference locally, carrying it across guides and reloads. Direct platform heading links select their matching visible platform without replacing the saved preference; an explicit choice overrides that view. Client helpers and the actual DOM controller have automated regressions.

Configure translated documentation languages once in `activeLocales` in `scripts/docs-ui.mjs`. Adding a language requires its complete article files and UI translations. Marketing locale generation and documentation share UI labels in this file. Refresh the glossary snapshot `terminology.json` at release time; provenance is in `terminology-source.json`. A playlist is the app’s practice/performance collection, rather than a separate setlist concept.

## Behavior audit: 1.5.5

| Coverage | Source checked | Manual review to retain |
| --- | --- | --- |
| First library, import/share, catalogue and book/file management | MainTabs, Sources, BookDetails, private import/OCR guide | Follow picker and share flows; verify edition matching and deletion confirmations |
| OCR and manual/CSV indexes | IndexEditor, bookIndex CSV parser/exporter, BookDetails | Pause/resume, entry versus complete-index save, CSV exchange and PDF-page checks |
| Search/reading and playlists | Songs, Viewer, Playlist, Playlists and searchable-source selection | Viewer controls, adding/reordering/removing entries and missing-PDF references |
| iCloud/Google Drive synchronization | Sync, native provider behavior and Drive guide | iCloud enable/pause; Google account consent; same-platform two-device propagation |
| Purchases and language | Addon, App, MainTabs, SettingsButton and LanguageOptions | Store recognition/restoration with actual accounts; language persistence |
| Troubleshooting and release notes | Stable error references, released PDF/OCR limits and release guide | Confirm user-visible explanations and references match device dialogs |

Sources describe the shipped `v1.5.5` release. Controls include **Save tune** / **Enregistrer** for the editor and **Sync now** / **Synchroniser** for manual sync. CSV uses comma-separated Title,FirstPage,LastPage; export shares CSV text. There is no global PDF page-offset control. Book deletion retains playlist references. Cloud providers remain separate across iOS and Android.

A release limitation was found during the audit: AddonScreen is registered but has no navigation entry in the shipped main views. The purchase guide documents the missing purchase/restore entry instead of inventing steps. A separate app fix should restore that entry, followed by updating the guide. Existing purchase recognition at startup is distinct from explicit restoration. Do not claim cross-store entitlement transfer.

Browser checks establish website behavior, not physical-device sync, purchase outcomes or OCR accuracy. Follow the task procedures on devices before changing the verified-release baseline. Existing screenshots are isolated 1.5.5 release captures; Android sync images use matching Android captures. The iOS example explicitly shows iCloud unavailable. No personal PDFs/accounts are used.

## Release maintenance

Review affected articles, translations, glossary, screenshots, links and release markers for each app change. Complete remaining-language coverage next; add contextual in-app Help after the routes/content are settled. Extend platform detection instructions for 1.6.0 only after its behavior is verified.
