import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {validateEnrollmentLinks} from '../scripts/build-beta.mjs';
const root=new URL('../',import.meta.url);
const data=JSON.parse(await readFile(new URL('content/beta-1.6.json',root),'utf8'));
test('preview pages are localized and keep pending enrollment inactive',async()=>{
  assert.deepEqual(Object.keys(data.locales).sort(),['de','en','es','fr','it','pt']);
  assert.deepEqual(data.links,{ios:null,android:null});
  for(const [locale,c] of Object.entries(data.locales)) {
    const prefix=locale==='en'?'':`${locale}/`;
    const html=await readFile(new URL(`${prefix}beta/index.html`,root),'utf8');
    const home=await readFile(new URL(`${prefix}index.html`,root),'utf8');
    assert.ok(html.includes(`<html lang="${locale}">`));
    assert.ok(html.includes(c.title));assert.ok(html.includes(c.pending));
    assert.match(html,/Apple Intelligence/);assert.match(html,/Gemini Nano/);assert.match(html,/iOS 27/);
    assert.doesNotMatch(html,/href="https:\/\/(testflight\.apple\.com|play\.google\.com)/);
    assert.ok(home.includes(`href="/${prefix}beta/"`));
    await access(new URL(`screenshots/${locale}/search-results.png`,root));
  }
});
test('enrollment configuration rejects wrong destinations and unsafe URLs',()=>{
  assert.doesNotThrow(()=>validateEnrollmentLinks({ios:null,android:null}));
  assert.doesNotThrow(()=>validateEnrollmentLinks({ios:'https://testflight.apple.com/join/Abcd1234',android:'https://play.google.com/apps/testing/uk.co.ekeller.tunefinder'}));
  for(const ios of ['http://testflight.apple.com/join/abc','https://evil.example/join/abc','https://user@testflight.apple.com/join/abc','https://testflight.apple.com/apps/abc'])assert.throws(()=>validateEnrollmentLinks({ios,android:null}));
  assert.throws(()=>validateEnrollmentLinks({ios:null,android:'https://play.google.com/apps/testing/another.app'}));
  assert.throws(()=>validateEnrollmentLinks({ios:null,android:null,extra:null}));
});
