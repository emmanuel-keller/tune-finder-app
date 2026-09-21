import { mkdir, readFile, writeFile } from "node:fs/promises";

const origin = "https://tunefinder.app";
const locales = {
  de: {
    title: "TuneFinder — Jeden Titel sofort finden",
    description:
      "TuneFinder findet Jazz-Titel in deinen eigenen Leadsheet-Büchern und öffnet direkt die richtige PDF-Seite.",
    label: "Deutsch",
  },
  es: {
    title: "TuneFinder — Encuentra cualquier tema al instante",
    description:
      "TuneFinder encuentra temas de jazz en tus propios libros y abre directamente la página correcta del PDF.",
    label: "Español",
  },
  fr: {
    title: "TuneFinder — Trouvez chaque morceau instantanément",
    description:
      "TuneFinder retrouve les morceaux de jazz dans vos propres recueils et ouvre directement la bonne page du PDF.",
    label: "Français",
  },
  it: {
    title: "TuneFinder — Trova subito qualsiasi brano",
    description:
      "TuneFinder trova i brani jazz nei tuoi libri e apre direttamente la pagina corretta del PDF.",
    label: "Italiano",
  },
  pt: {
    title: "TuneFinder — Encontre qualquer tema de imediato",
    description:
      "O TuneFinder encontra temas de jazz nos seus próprios livros e abre diretamente a página certa do PDF.",
    label: "Português",
  },
};

const source = await readFile(new URL("index.html", import.meta.url), "utf8");
for (const [locale, meta] of Object.entries(locales)) {
  const url = `${origin}/${locale}/`;
  let html = source
    .replace('<html lang="en">', `<html lang="${locale}">`)
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]+("\s*\/?>)/,
      `$1${meta.description}$2`
    )
    .replace(
      '<link rel="canonical" href="https://tunefinder.app/" />',
      `<link rel="canonical" href="${url}" />`
    )
    .replace(
      '<meta property="og:url" content="https://tunefinder.app/" />',
      `<meta property="og:url" content="${url}" />`
    )
    .replace(
      '<summary aria-label="Choose language">English</summary>',
      `<summary aria-label="Choose language">${meta.label}</summary>`
    );
  await mkdir(new URL(`${locale}/`, import.meta.url), { recursive: true });
  await writeFile(new URL(`${locale}/index.html`, import.meta.url), html);
}
