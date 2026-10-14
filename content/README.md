# TuneFinder documentation sources

The complete guide covers 11 topics in English, French, Portuguese, German, Spanish and Italian: first library/search, PDF import/share, book/file management, OCR review, manual/CSV indexes, search/reading, playlists, synchronization, purchases/settings, troubleshooting and what’s new. Every article has equivalent stable routes and heading anchors in all six languages, its own localized search data, UI labels and matching screenshots. Portuguese uses the neutral `pt` language/route. The documentation always describes the current app. Update all six languages alongside app changes; public pages do not display release numbers.

## Build and validate

No package installation is needed. Use Node 22 or newer:

```sh
node build-locales.mjs
node scripts/build-docs.mjs
node --test tests/*.test.mjs
git diff --check
```

GitHub Pages serves committed HTML from `main`. Commit generated pages and search indexes with their sources. CI verifies tracked and untracked output with `scripts/check-generated.mjs`. Review generated output before merging it into the live site.

## Add or edit an article

Each `docs/<language>/<stable-id>.md` starts with JSON metadata between `---` lines. Required fields are `id`, `title`, `summary`, `section`, `order`, `platforms`, `minVersion`, `verifiedRelease` and `related`. Keep IDs and explicit heading anchors stable across translations. Markdown supports paragraphs, numbered lists, bold text, HTTPS/mail links, local links, screenshots and level-two/three headings with `{#stable-anchor}`. Raw HTML is escaped. Platform blocks start with `::: ios` or `::: android` and end with `:::`; both remain visible without JavaScript.

Use matching-language screenshots and descriptive captions. Figures link to full-size images. The generator reads each PNG’s intrinsic dimensions to reserve the correct space; tests verify headers, compressed image payloads, row sizes and rendered dimensions for every referenced capture. Search loads the current language’s static index; queries stay in the browser. Normalized text is prepared once on index load. The browser stores the platform preference locally, carrying it across guides and reloads. Direct platform heading links select their matching visible platform without replacing the saved preference; an explicit choice overrides that view. Client helpers and the actual DOM controller have automated regressions.

Configure translated documentation languages once in `activeLocales` in `scripts/docs-ui.mjs`. Adding a language requires its complete article files and UI translations. Marketing locale generation and documentation share UI labels in this file. Refresh the glossary snapshot `terminology.json` at release time; provenance is in `terminology-source.json`. A playlist is the app’s practice/performance collection, rather than a separate setlist concept.

## Behavior audit

| Coverage | Source checked | Manual review to retain |
| --- | --- | --- |
| First library, import/share, catalogue and book/file management | MainTabs, Sources, BookDetails, private import/OCR guide | Follow picker and share flows; verify edition matching and deletion confirmations |
| OCR and manual/CSV indexes | IndexEditor, bookIndex CSV parser/exporter, BookDetails | Pause/resume, entry versus complete-index save, CSV exchange and PDF-page checks |
| Search/reading and playlists | Songs, Viewer, Playlist, Playlists and searchable-source selection | Viewer controls, adding/reordering/removing entries and missing-PDF references |
| iCloud/Google Drive synchronization | Sync, native provider behavior and Drive guide | iCloud enable/pause; Google account consent; same-platform two-device propagation |
| Purchases and language | Addon, App, MainTabs, SettingsButton and LanguageOptions | Store recognition/restoration with actual accounts; language persistence |
| Troubleshooting and what’s new | Stable error references, released PDF/OCR limits and what’s new guide | Confirm user-visible explanations and references match device dialogs |

Sources describe the shipped `v1.5.5` release. Controls include **Save tune** / **Enregistrer** for the editor and **Sync now** / **Synchroniser** for manual sync. CSV uses comma-separated Title,FirstPage,LastPage; export shares CSV text. There is no global PDF page-offset control. Book deletion retains playlist references. Cloud providers remain separate across iOS and Android.

Purchase and restore controls are accessed through Settings → Multi-Book Search. The app patch and updated instructions must ship together. Existing purchase recognition at startup is distinct from explicit restoration. Do not claim cross-store entitlement transfer.

Browser checks establish website behavior, not physical-device sync, purchase outcomes or OCR accuracy. Follow the task procedures on devices before changing the verified-release baseline. Existing screenshots are isolated 1.5.5 release captures; Android sync images use matching Android captures. The iOS example explicitly shows iCloud unavailable. No personal PDFs/accounts are used.

## Release maintenance

Review affected articles, translations, glossary, screenshots and links for each app change. Keep all six translations current with the latest app. Internal minVersion and verifiedRelease metadata records audit provenance only and is never shown to readers. Keep the versionless whats-new route current; old release routes redirect to it. Document new platform detection options only after their behavior is verified.

## What’s new maintenance policy

`whats-new` is a curated overview of the current app, not a cumulative changelog. At each app update, revise or replace its highlights in all six languages to reflect what users can use now. Retain stable topical anchors (`library`, `ocr`, `search-sync`, `limits`) while updating their content. Do not add versioned or dated entries to this guide. Historical release notes belong in the app repository’s GitHub Releases; they are not stored in the user guide. Add retired article routes to `scripts/docs-redirects.mjs`; the builder excludes those exact paths from the sitemap and labels redirect links with the translated destination title.

`content/app-ui-labels.json` is an audited snapshot of purchase-navigation labels from the app localization dictionary, with its source commit recorded. When these app labels change, read the effective translations (including overrides), refresh the snapshot and corresponding guide text together, then run the website tests. This snapshot keeps website CI independent of an adjacent app checkout; it does not automatically detect later changes in the app repository.

## App platform hints

App Help links use `?platform=ios` or `?platform=android` before any section fragment. Valid hints override the saved browser preference on arrival and are remembered even on the documentation landing page. Existing platform-specific section links can still reveal their target instructions. Choosing a platform manually removes the URL hint and saves the explicit choice, so reloads and further guides respect it. Unsupported hints leave the existing preference unchanged.

Platform-specific section links temporarily override the configured preference for the displayed page. Returning to a shared section restores the app hint or explicit user preference without changing saved storage. Regression tests parse actual replacement URLs and cover neutral, matching and opposing section fragments.
