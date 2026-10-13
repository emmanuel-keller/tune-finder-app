---
{
  "id": "android-drive",
  "title": "Connect Google Drive on Android",
  "summary": "Keep your local library and synchronize it with your other Android devices.",
  "section": "Sync and recovery",
  "order": 3,
  "platforms": [
    "android"
  ],
  "minVersion": "1.5.5",
  "verifiedRelease": "1.5.5",
  "related": [
    "import-pdf",
    "detect-titles"
  ]
}
---
## Before connecting {#before-connecting}
Your library works locally without a cloud connection. Google Drive synchronization is optional and requires an internet connection and a Google account. Use the same account on every Android device you want to synchronize.

This guide is for Android. iPhone and iPad use iCloud Documents; TuneFinder does not synchronize libraries between iOS and Android.

## Connect your account {#connect}
1. Open **Settings** using the gear button.
2. Tap **Connect Google Drive**.
3. Choose your Google account and approve the requested access.
4. Wait for the initial synchronization and check the status before leaving the screen.
5. Repeat these steps with the same account on your other Android devices, including devices that have local edits.

TuneFinder creates and manages its **TuneFinder Sync** folder in Drive. You do not choose a folder in the file picker. If you cancel account selection or decline access, your local library stays available.

![Device Sync and app language settings](/screenshots/en/device-sync.png)

## What synchronizes {#what-syncs}
Accepted book PDFs, indexes, book names, and playlists participate in synchronization. Unsaved index edits and OCR checkpoints stay on their original device. Save an index before expecting it on another device.

All indexes may synchronize, but free search still uses only one selected indexed book. Cloud files do not unlock Multi-Book Search.

## When changes arrive {#when}
TuneFinder synchronizes after launch when the provider is ready, and after accepted local playlist or book changes. It does not continuously poll for changes or start synchronization merely because you return to the foreground.

To request an update, open **Settings** and tap **Sync now**, or pull to refresh **Books** or **Playlists**. Repeat a manual sync on the other device when checking that a change has arrived. Wait for both devices to finish before comparing.

## Connection or sync trouble {#troubleshooting}
Check your connection, Google account, and available device and Drive storage. If authorization needs refreshing, use **Reconnect Google Drive**. Keep the same intended account when reconnecting; do not switch accounts as a repair attempt.

Large PDFs can take time to transfer. A failure does not mean you should delete and reimport your library. Keep local copies and original PDFs. If TuneFinder shows a conflict, compare the copies before choosing which to keep; do not assume the cloud copy is newer.

For **TF-SYNC-4300** or another displayed reference, [contact support](mailto:contact@tunefinder.app) with the app version, Android version, the action, and the reference. Android system backup is a separate recovery mechanism and does not replace synchronization.

To add a new document, follow [Import and share a PDF](/docs/import-pdf/), then [detect and review its titles](/docs/detect-titles/).
