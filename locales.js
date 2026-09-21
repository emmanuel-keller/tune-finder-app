(() => {
  const locale = document.documentElement.lang;
  if (locale === "en") return;

  const copy = {
    de: {
      English: "Deutsch",
      Features: "Funktionen",
      "How to use": "Anleitung",
      Support: "Hilfe",
      "Get the app": "App laden",
      "Your songbook, searchable": "Dein Songbook, durchsuchbar",
      "Find the tune. Play the music.": "Finde den Titel. Spiele die Musik.",
      "TuneFinder puts every tune in your own lead-sheet books at your fingertips, then takes you straight to the right PDF page.":
        "TuneFinder macht jeden Titel in deinen eigenen Leadsheet-Büchern auffindbar und öffnet direkt die richtige PDF-Seite.",
      "Download TuneFinder": "TuneFinder laden",
      "See how it works": "So funktioniert es",
      "Available for iPhone and iPad · Android coming soon":
        "Für iPhone und iPad verfügbar · Android folgt bald",
      "Made for the bandstand": "Für die Bühne gemacht",
      "Less searching. More playing.": "Weniger suchen. Mehr spielen.",
      "Build a library around the books you use, keep your setlists close, and find a lead sheet before the count-in.":
        "Baue deine Bibliothek mit den Büchern auf, die du nutzt, halte Setlisten bereit und finde ein Leadsheet vor dem Einzählen.",
      "Search every book": "Alle Bücher durchsuchen",
      "Jump to the page": "Direkt zur Seite",
      "Keep your setlists ready": "Setlisten griffbereit halten",
      "Getting started": "Erste Schritte",
      "From book to bandstand in three steps.":
        "Vom Buch zur Bühne in drei Schritten.",
      "Prepare your library": "Bibliothek vorbereiten",
      "Add a book index and its PDF": "Buchindex und PDF hinzufügen",
      "Find a tune": "Titel finden",
      "Search by title and open the exact page":
        "Nach Titel suchen und die genaue Seite öffnen",
      "Organise your music": "Musik organisieren",
      "Build playlists for rehearsals and gigs":
        "Playlists für Proben und Auftritte erstellen",
      "Optional iCloud sync": "Optionale iCloud-Synchronisierung",
      "Keep TuneFinder in step across your Apple devices.":
        "Halte TuneFinder auf deinen Apple-Geräten synchron.",
      "Set it up": "Einrichten",
      "How it behaves": "So funktioniert die Synchronisierung",
      "Good to know:": "Gut zu wissen:",
      "Your next tune is already in the book.":
        "Der nächste Titel ist schon im Buch.",
      "Coming soon on": "Demnächst für",
      Android: "Android",
      "Support & feedback": "Hilfe & Feedback",
      "Privacy first": "Datenschutz zuerst",
    },
    es: {
      English: "Español",
      Features: "Funciones",
      "How to use": "Cómo usarla",
      Support: "Ayuda",
      "Get the app": "Obtener la app",
      "Your songbook, searchable": "Tu cancionero, con búsqueda",
      "Find the tune. Play the music.": "Encuentra el tema. Toca la música.",
      "TuneFinder puts every tune in your own lead-sheet books at your fingertips, then takes you straight to the right PDF page.":
        "TuneFinder pone a tu alcance cada tema de tus propios libros y te lleva directamente a la página correcta del PDF.",
      "Download TuneFinder": "Descargar TuneFinder",
      "See how it works": "Ver cómo funciona",
      "Available for iPhone and iPad · Android coming soon":
        "Disponible para iPhone y iPad · Android próximamente",
      "Made for the bandstand": "Hecha para el escenario",
      "Less searching. More playing.": "Menos buscar. Más tocar.",
      "Build a library around the books you use, keep your setlists close, and find a lead sheet before the count-in.":
        "Crea una biblioteca con los libros que usas, ten tus repertorios a mano y encuentra una partitura antes de la entrada.",
      "Search every book": "Busca en todos tus libros",
      "Jump to the page": "Ve directamente a la página",
      "Keep your setlists ready": "Ten tus repertorios preparados",
      "Getting started": "Primeros pasos",
      "From book to bandstand in three steps.":
        "Del libro al escenario en tres pasos.",
      "Prepare your library": "Prepara tu biblioteca",
      "Add a book index and its PDF": "Añade un índice y su PDF",
      "Find a tune": "Encuentra un tema",
      "Search by title and open the exact page":
        "Busca por título y abre la página exacta",
      "Organise your music": "Organiza tu música",
      "Build playlists for rehearsals and gigs":
        "Crea listas para ensayos y actuaciones",
      "Optional iCloud sync": "Sincronización opcional con iCloud",
      "Keep TuneFinder in step across your Apple devices.":
        "Mantén TuneFinder sincronizado en tus dispositivos Apple.",
      "Set it up": "Configúrala",
      "How it behaves": "Cómo funciona",
      "Good to know:": "Conviene saberlo:",
      "Your next tune is already in the book.":
        "Tu próximo tema ya está en el libro.",
      "Coming soon on": "Próximamente en",
      Android: "Android",
      "Support & feedback": "Ayuda y comentarios",
      "Privacy first": "Privacidad ante todo",
    },
    fr: {
      English: "Français",
      Features: "Fonctionnalités",
      "How to use": "Mode d’emploi",
      Support: "Assistance",
      "Get the app": "Télécharger",
      "Your songbook, searchable": "Votre bibliothèque, consultable",
      "Find the tune. Play the music.": "Trouvez le morceau. Jouez la musique.",
      "TuneFinder puts every tune in your own lead-sheet books at your fingertips, then takes you straight to the right PDF page.":
        "TuneFinder retrouve chaque morceau dans vos propres recueils et ouvre directement la bonne page du PDF.",
      "Download TuneFinder": "Télécharger TuneFinder",
      "See how it works": "Voir comment ça marche",
      "Available for iPhone and iPad · Android coming soon":
        "Disponible sur iPhone et iPad · Android bientôt disponible",
      "Made for the bandstand": "Pensée pour la scène",
      "Less searching. More playing.": "Moins chercher. Plus jouer.",
      "Build a library around the books you use, keep your setlists close, and find a lead sheet before the count-in.":
        "Créez votre bibliothèque avec les recueils que vous utilisez, gardez vos setlists à portée de main et trouvez une grille avant le décompte.",
      "Search every book": "Recherchez dans tous vos recueils",
      "Jump to the page": "Ouvrez directement la page",
      "Keep your setlists ready": "Gardez vos setlists prêtes",
      "Getting started": "Bien démarrer",
      "From book to bandstand in three steps.":
        "Du recueil à la scène en trois étapes.",
      "Prepare your library": "Préparez votre bibliothèque",
      "Add a book index and its PDF": "Ajoutez l’index d’un recueil et son PDF",
      "Find a tune": "Trouvez un morceau",
      "Search by title and open the exact page":
        "Recherchez un titre et ouvrez la bonne page",
      "Organise your music": "Organisez votre musique",
      "Build playlists for rehearsals and gigs":
        "Créez des playlists pour vos répétitions et concerts",
      "Optional iCloud sync": "Synchronisation iCloud facultative",
      "Keep TuneFinder in step across your Apple devices.":
        "Gardez TuneFinder synchronisé sur vos appareils Apple.",
      "Set it up": "Configuration",
      "How it behaves": "Fonctionnement",
      "Good to know:": "Bon à savoir :",
      "Your next tune is already in the book.":
        "Votre prochain morceau est déjà dans le recueil.",
      "Coming soon on": "Bientôt sur",
      Android: "Android",
      "Support & feedback": "Assistance et avis",
      "Privacy first": "Confidentialité avant tout",
    },
    it: {
      English: "Italiano",
      Features: "Funzioni",
      "How to use": "Come si usa",
      Support: "Assistenza",
      "Get the app": "Scarica l’app",
      "Your songbook, searchable": "I tuoi spartiti, ricercabili",
      "Find the tune. Play the music.": "Trova il brano. Suona la musica.",
      "TuneFinder puts every tune in your own lead-sheet books at your fingertips, then takes you straight to the right PDF page.":
        "TuneFinder trova ogni brano nei tuoi libri e apre direttamente la pagina corretta del PDF.",
      "Download TuneFinder": "Scarica TuneFinder",
      "See how it works": "Scopri come funziona",
      "Available for iPhone and iPad · Android coming soon":
        "Disponibile per iPhone e iPad · Android in arrivo",
      "Made for the bandstand": "Pensata per il palco",
      "Less searching. More playing.": "Meno ricerche. Più musica.",
      "Build a library around the books you use, keep your setlists close, and find a lead sheet before the count-in.":
        "Crea una libreria con i libri che usi, tieni le scalette a portata di mano e trova uno spartito prima del conteggio.",
      "Search every book": "Cerca in tutti i libri",
      "Jump to the page": "Vai subito alla pagina",
      "Keep your setlists ready": "Tieni pronte le scalette",
      "Getting started": "Per iniziare",
      "From book to bandstand in three steps.":
        "Dal libro al palco in tre passaggi.",
      "Prepare your library": "Prepara la libreria",
      "Add a book index and its PDF":
        "Aggiungi l’indice di un libro e il relativo PDF",
      "Find a tune": "Trova un brano",
      "Search by title and open the exact page":
        "Cerca il titolo e apri la pagina esatta",
      "Organise your music": "Organizza la musica",
      "Build playlists for rehearsals and gigs":
        "Crea playlist per prove e concerti",
      "Optional iCloud sync": "Sincronizzazione iCloud facoltativa",
      "Keep TuneFinder in step across your Apple devices.":
        "Mantieni TuneFinder sincronizzato sui tuoi dispositivi Apple.",
      "Set it up": "Configurazione",
      "How it behaves": "Come funziona",
      "Good to know:": "Da sapere:",
      "Your next tune is already in the book.":
        "Il tuo prossimo brano è già nel libro.",
      "Coming soon on": "Prossimamente su",
      Android: "Android",
      "Support & feedback": "Assistenza e feedback",
      "Privacy first": "La privacy prima di tutto",
    },
    pt: {
      English: "Português",
      Features: "Funcionalidades",
      "How to use": "Como utilizar",
      Support: "Apoio",
      "Get the app": "Obter a aplicação",
      "Your songbook, searchable": "Os seus livros, pesquisáveis",
      "Find the tune. Play the music.": "Encontre o tema. Toque a música.",
      "TuneFinder puts every tune in your own lead-sheet books at your fingertips, then takes you straight to the right PDF page.":
        "O TuneFinder encontra qualquer tema nos seus próprios livros e abre diretamente a página certa do PDF.",
      "Download TuneFinder": "Descarregar o TuneFinder",
      "See how it works": "Veja como funciona",
      "Available for iPhone and iPad · Android coming soon":
        "Disponível para iPhone e iPad · Android em breve",
      "Made for the bandstand": "Feito para o palco",
      "Less searching. More playing.": "Menos procura. Mais música.",
      "Build a library around the books you use, keep your setlists close, and find a lead sheet before the count-in.":
        "Crie uma biblioteca com os livros que utiliza, mantenha os alinhamentos por perto e encontre uma partitura antes da contagem.",
      "Search every book": "Pesquise em todos os livros",
      "Jump to the page": "Abra diretamente a página",
      "Keep your setlists ready": "Mantenha os alinhamentos prontos",
      "Getting started": "Primeiros passos",
      "From book to bandstand in three steps.":
        "Do livro ao palco em três passos.",
      "Prepare your library": "Prepare a biblioteca",
      "Add a book index and its PDF":
        "Adicione o índice de um livro e o respetivo PDF",
      "Find a tune": "Encontre um tema",
      "Search by title and open the exact page":
        "Pesquise pelo título e abra a página certa",
      "Organise your music": "Organize a sua música",
      "Build playlists for rehearsals and gigs":
        "Crie listas para ensaios e atuações",
      "Optional iCloud sync": "Sincronização iCloud opcional",
      "Keep TuneFinder in step across your Apple devices.":
        "Mantenha o TuneFinder sincronizado nos seus dispositivos Apple.",
      "Set it up": "Configuração",
      "How it behaves": "Como funciona",
      "Good to know:": "Convém saber:",
      "Your next tune is already in the book.":
        "O seu próximo tema já está no livro.",
      "Coming soon on": "Em breve no",
      Android: "Android",
      "Support & feedback": "Apoio e comentários",
      "Privacy first": "Privacidade em primeiro lugar",
    },
  }[locale];

  if (!copy) return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const value = node.nodeValue;
    const key = value.trim().replace(/\s+/g, " ");
    if (copy[key]) node.nodeValue = value.replace(value.trim(), copy[key]);
  }
})();
