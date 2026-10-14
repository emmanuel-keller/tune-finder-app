import {activeLocales} from './docs-ui.mjs';
import {route} from './docs-core.mjs';

// Retired public article IDs and their current destinations.
export const redirects = [{from: 'release-1-5-5', to: 'whats-new'}];

export function buildRedirects(articles, occupiedPaths, definitions = redirects) {
 const paths = new Set(occupiedPaths), entries = [];
 // Placeholder locales have no translated article metadata yet.
 for (const {from,to} of definitions) {
  for (const locale of activeLocales) {
   const destination=route(locale,to), path=route(locale,from);
   const target=articles.find(a=>a.locale===locale && a.id===to);
   if (!target || paths.has(path)) throw new Error(`Invalid redirect ${path} to ${destination}`);
   paths.add(path);
   entries.push({locale,path,destination,title:target.title});
  }
 }
 return entries;
}
