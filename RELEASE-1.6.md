# TuneFinder 1.6 website assets

Draft preview content for the 1.6 app release in emmanuel-keller/tune-finder PR #12. This branch adds `/beta/`, `/fr/beta/`, `/pt/beta/`, `/de/beta/`, `/es/beta/` and `/it/beta/`, plus localized home-page preview links. It preserves the current production guides and download destinations.

`content/beta-1.6.json` contains the translated source. `scripts/build-beta.mjs` generates static pages without requiring client JavaScript. Enrollment URLs remain null until each approved/published beta has been independently installed by an eligible tester. Validate the actual store links before entering them; update the enrollment/intro wording for every locale when availability changes. Contact uses the existing public support address.

Build and test:

```
node build-locales.mjs
node scripts/build-docs.mjs
node scripts/build-beta.mjs
node --test tests/*.test.mjs
```

The existing localized search screenshot is explicitly described as the current interface. New AI action/progress/review captures are pending a compatible capture build and devices. Do not present the reused frame as new model-output evidence. Store copy is prepared separately in app PR #12. Google Play shared listing changes must be timed with the appropriate production/beta messaging.

Before publishing, check eligible hardware/model requirements, entitlement wording, verified enrollment links, screenshot provenance and localized phone/tablet layouts. Publishing occurs only when this branch is merged into the GitHub Pages source branch; this draft does not establish beta availability.
