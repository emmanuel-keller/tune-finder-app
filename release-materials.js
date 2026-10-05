(() => {
  const copy = {
    en: {
      heading: "New in 1.5.2",
      intro:
        "Shape your own catalogue, keep your setlists together, and choose the language that suits you.",
      cards: [
        [
          "Edit your book indexes",
          "Correct tune titles and PDF pages, or add missing tunes directly in TuneFinder.",
        ],
        [
          "Import and export CSV",
          "Keep a copy of your index or bring your own catalogue in through Manage files.",
        ],
        [
          "Choose your app language",
          "Select English, French, Portuguese, German, Spanish or Italian in Settings. The choice stays on this device.",
        ],
        [
          "Optional sync, clear controls",
          "iPhone and iPad use iCloud Documents. Android connects to Google Drive. Your library works locally, with no sharing between platforms.",
        ],
      ],
    },
    fr: {
      heading: "Nouveautés de la version 1.5.2",
      intro:
        "Adaptez votre catalogue, gardez vos playlists ensemble et choisissez votre langue.",
      cards: [
        [
          "Modifiez les index de vos livres",
          "Corrigez les titres et les pages PDF, ou ajoutez les morceaux manquants dans TuneFinder.",
        ],
        [
          "Importez et exportez en CSV",
          "Conservez une copie de votre index ou importez votre catalogue depuis Gérer les fichiers.",
        ],
        [
          "Choisissez la langue de l’application",
          "Sélectionnez l’anglais, le français, le portugais, l’allemand, l’espagnol ou l’italien dans Paramètres. Ce choix reste sur cet appareil.",
        ],
        [
          "Une synchronisation facultative",
          "iPhone et iPad utilisent iCloud Documents. Android se connecte à Google Drive. La bibliothèque fonctionne localement, sans partage entre plateformes.",
        ],
      ],
    },
    pt: {
      heading: "Novidades da versão 1.5.2",
      intro:
        "Adapte o seu catálogo, mantenha as listas organizadas e escolha o idioma que prefere.",
      cards: [
        [
          "Edite os índices dos seus livros",
          "Corrija títulos e páginas do PDF ou adicione temas em falta no TuneFinder.",
        ],
        [
          "Importe e exporte CSV",
          "Guarde uma cópia do índice ou importe o seu catálogo em Gerir ficheiros.",
        ],
        [
          "Escolha o idioma da aplicação",
          "Selecione inglês, francês, português, alemão, espanhol ou italiano nas Definições. A escolha fica neste dispositivo.",
        ],
        [
          "Sincronização opcional",
          "O iPhone e o iPad utilizam o iCloud Documents. O Android liga-se ao Google Drive. A biblioteca funciona localmente, sem partilha entre plataformas.",
        ],
      ],
    },
    de: {
      heading: "Neu in Version 1.5.2",
      intro:
        "Passe deinen Katalog an, halte Setlisten zusammen und wähle deine Sprache.",
      cards: [
        [
          "Buchindizes bearbeiten",
          "Korrigiere Titel und PDF-Seiten oder ergänze fehlende Titel direkt in TuneFinder.",
        ],
        [
          "CSV importieren und exportieren",
          "Sichere deinen Index oder importiere deinen eigenen Katalog über Dateien verwalten.",
        ],
        [
          "App-Sprache wählen",
          "Wähle Englisch, Französisch, Portugiesisch, Deutsch, Spanisch oder Italienisch in den Einstellungen. Die Auswahl gilt nur auf diesem Gerät.",
        ],
        [
          "Optionale Synchronisierung",
          "iPhone und iPad nutzen iCloud Documents. Android verbindet sich mit Google Drive. Die Bibliothek funktioniert lokal, ohne Austausch zwischen den Plattformen.",
        ],
      ],
    },
    es: {
      heading: "Novedades de la versión 1.5.2",
      intro: "Adapta tu catálogo, organiza tus listas y elige tu idioma.",
      cards: [
        [
          "Edita los índices de tus libros",
          "Corrige títulos y páginas PDF o añade los temas que faltan directamente en TuneFinder.",
        ],
        [
          "Importa y exporta CSV",
          "Guarda una copia del índice o importa tu catálogo desde Gestionar archivos.",
        ],
        [
          "Elige el idioma de la aplicación",
          "Selecciona inglés, francés, portugués, alemán, español o italiano en Ajustes. La elección se guarda en este dispositivo.",
        ],
        [
          "Sincronización opcional",
          "iPhone y iPad usan iCloud Documents. Android se conecta a Google Drive. La biblioteca funciona localmente, sin compartir entre plataformas.",
        ],
      ],
    },
    it: {
      heading: "Novità della versione 1.5.2",
      intro:
        "Adatta il catalogo, tieni insieme le scalette e scegli la tua lingua.",
      cards: [
        [
          "Modifica gli indici dei libri",
          "Correggi titoli e pagine PDF o aggiungi i brani mancanti direttamente in TuneFinder.",
        ],
        [
          "Importa ed esporta CSV",
          "Conserva una copia dell’indice o importa il tuo catalogo da Gestisci file.",
        ],
        [
          "Scegli la lingua dell’app",
          "Seleziona inglese, francese, portoghese, tedesco, spagnolo o italiano nelle Impostazioni. La scelta resta su questo dispositivo.",
        ],
        [
          "Sincronizzazione facoltativa",
          "iPhone e iPad usano iCloud Documents. Android si collega a Google Drive. La libreria funziona localmente, senza condivisione tra piattaforme.",
        ],
      ],
    },
  };
  const c = copy[document.documentElement.lang] ?? copy.en;
  document.querySelector("#release-heading").textContent = c.heading;
  document.querySelector("#release-intro").textContent = c.intro;
  document
    .querySelectorAll("[data-release-title]")
    .forEach((e, i) => (e.textContent = c.cards[i][0]));
  document
    .querySelectorAll("[data-release-body]")
    .forEach((e, i) => (e.textContent = c.cards[i][1]));
  document
    .querySelectorAll(".release-card img")
    .forEach((e, i) => (e.alt = c.cards[i][0]));
})();
