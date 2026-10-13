# TuneFinder documentation sources

The initial prototype covers three tasks in English and French for the shipped 1.5.5 release. Portuguese, German, Spanish and Italian routes explicitly identify unavailable translations and link to the equivalent English/French guide. They are not included in the sitemap and use `noindex,follow`. Complete the broader guide and its six-language coverage after reviewing this prototype. Apple Intelligence belongs to a future 1.6.0 update.

## Build and validate

No package installation is needed. Use Node 22 or newer:

```sh
node build-locales.mjs
node scripts/build-docs.mjs
node --test tests/*.test.mjs
git diff --check
```

GitHub Pages continues to serve committed HTML from `main`. Commit generated pages and search indexes together with their sources. CI checks reproducibility; it does not deploy a documentation preview. Review the branch before merging into the live site.

## Add or edit an article

Each `docs/<language>/<stable-id>.md` starts with JSON metadata between `---` lines. Required fields: `id`, `title`, `summary`, `section`, `order`, `platforms`, `minVersion`, `verifiedRelease`, `related`. Keep the ID and explicit heading anchors stable across translations. Supported Markdown is deliberately small: paragraphs, numbered lists, bold text, HTTPS/mail links, relative site links, screenshots, and level-two/three headings with `{#stable-anchor}`. Raw HTML is escaped. Platform blocks use `::: ios` or `::: android`, followed by `:::`. Both remain visible without JavaScript.

Use matching-language screenshots and descriptive captions. Images link directly to their full-size version. Documentation search fetches only the current language’s static index; queries stay in the browser. Platform preference is stored locally and can be changed explicitly. Direct links to a platform heading remain readable even if a saved preference differs.

The glossary snapshot is `terminology.json`; its provenance is recorded in `terminology-source.json`. Refresh it with the app release, then check translated prose and exact control labels. A playlist is also the app’s performance collection; do not introduce a separate setlist concept.

## Content audit: 1.5.5

| Guide | Source behavior checked | Screenshot | Remaining review |
| --- | --- | --- | --- |
| Import/share PDF | Books tab; Import PDF; copy ownership; duplicate handling; PDF/page limits; iOS/Android share paths; error references | localized book library | Owner should follow Apple Books and Android source-app share steps on devices |
| Detect/review titles | Book Details; Detect tune titles; pause/resume; editor page checks, add/edit/delete and Save tune; free Use for search | localized index editor | Owner should follow the pause/resume and acceptance steps on devices |
| Android Google Drive | Settings gear; Connect/Reconnect Google Drive; same account; no folder picker; local-first preservation; bounded sync triggers | localized Device Sync | Owner should follow account connection and two-device propagation steps |

Sources were audited against TuneFinder `v1.5.5`, including `MainTabs`, `SettingsButton`, `IndexEditor`, `Sync`, and the import/OCR/Drive engineering guides. Button labels are **Save tune** / **Enregistrer**, and **Sync now** / **Synchroniser**, matching this release. Browser checks establish web behavior, not device synchronization or OCR accuracy.

Existing captures cover the three overview states. Detailed share-sheet, consent and recognition-progress captures can be added later if task review demonstrates that they help; do not use personal PDFs or account details.

## Next scope

Expand to first search, catalogue/file management, manual/CSV indexing, playlists, iCloud, purchase restoration/settings, troubleshooting and release notes. Translate that coverage into all six languages. In-app Help links are a subsequent app change. Every release should review affected articles, glossary, screenshots, links and verified-release metadata.
