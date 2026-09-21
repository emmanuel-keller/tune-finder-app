(() => {
  const locale = document.documentElement.lang;
  if (locale === "en") return;

  const copy = {
    de: {
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

  const details = {
    de: {
      features: [
        "Suche einmal nach einem Titel und sieh, in welchen hinzugefügten Indizes er vorkommt.",
        "Tippe auf ein Ergebnis, um dein PDF direkt auf der passenden Leadsheet-Seite zu öffnen.",
        "Speichere zusammengehörige Titel in Playlists und synchronisiere sie bei Bedarf zwischen Geräten.",
      ],
      guideIntro:
        "TuneFinder durchsucht die Indizes deiner eigenen Songbooks. Verknüpfe ein PDF mit einem Index, um von einem Suchergebnis direkt zur passenden Leadsheet-Seite zu gelangen.",
      descriptions: [
        "Öffne Bücher auf dem TuneFinder-Startbildschirm. Wähle ein Buch, das du besitzt, und lade den Index herunter.",
        "Gib einen Teil des Titels ein. Die Ergebnisse zeigen das passende Buch und die gedruckte Seitenzahl.",
        "Fasse Titel in Setlisten zusammen. Öffne einen Titel und füge ihn einer vorhandenen oder neuen Playlist hinzu.",
      ],
      instructions: [
        [
          "Wähle ein Buch und lade seinen Index herunter.",
          "Tippe auf PDF auswählen… und wähle deine Buchdatei.",
          "Sobald Bereit zum Suchen erscheint, kehre zum Startbildschirm zurück.",
        ],
        [
          "Gib den vollständigen Titel oder einen Teil davon ein.",
          "Wähle das Ergebnis aus dem gewünschten Buch.",
          "TuneFinder öffnet das verknüpfte PDF auf der passenden Seite.",
        ],
        [
          "Öffne einen Titel aus den Suchergebnissen.",
          "Tippe auf + und wähle oder erstelle eine Playlist.",
          "Öffne Listen, um Setlisten anzusehen, umzubenennen, zu sortieren oder Einträge zu entfernen.",
        ],
      ],
      notes: [
        "TuneFinder stellt keine Songbook-PDFs bereit. Du verknüpfst eine legal erworbene Datei auf deinem Gerät.",
        "PDF-Ausgaben können zusätzliche Umschlagseiten enthalten. Passe bei Bedarf den Seitenversatz in den Bucheinstellungen an.",
        "Ziehe Playlists zum Aktualisieren nach unten. Die optionale Gerätesynchronisierung hält Playlists auf deinen Apple-Geräten aktuell.",
      ],
      captions: [
        "Index laden und anschließend das PDF verknüpfen.",
        "Einmal suchen und Buch sowie Seite sehen.",
        "Setlisten für Proben und Auftritte zusammenhalten.",
      ],
      syncIntro:
        "Auf iPhone und iPad kann TuneFinder eine Kopie deiner Bibliothek in iCloud Documents speichern. Nutze auf allen Geräten dasselbe iCloud-Konto.",
      syncSetup: [
        "Aktiviere iCloud Drive für TuneFinder in den iOS- oder iPadOS-Einstellungen.",
        "Öffne Gerätesynchronisierung und tippe auf iCloud-Sync aktivieren.",
        "Wiederhole dies auf weiteren Apple-Geräten und tippe bei Bedarf auf Jetzt synchronisieren.",
      ],
      syncBehavior: [
        "Änderungen werden beim Start und bei der Rückkehr zur App synchronisiert.",
        "Ziehe Playlists oder Buchindizes nach unten, um eine Aktualisierung anzufordern.",
        "Bei gleichzeitigen Änderungen gewinnt die zuletzt bearbeitete Playlist.",
        "Beim Pausieren bleiben die Kopien auf Gerät und iCloud erhalten.",
      ],
      syncScope:
        "Gut zu wissen: TuneFinder bleibt lokal nutzbar und funktioniert ohne iCloud. Die kommende Android-Version nutzt ein separates System; Bibliotheken werden nicht zwischen iOS und Android übertragen.",
      download:
        "Lade TuneFinder herunter und nutze deine eigene Songbook-Bibliothek einfacher.",
      support:
        "Brauchst du Hilfe oder hast du eine Idee? Kontaktiere den TuneFinder-Support.",
      privacy:
        "TuneFinder benötigt kein Konto und sammelt keine personenbezogenen Daten. Deine Bibliothek bleibt deine.",
    },
    es: {
      features: [
        "Busca un tema una sola vez y comprueba en qué índices añadidos aparece.",
        "Toca un resultado para abrir tu PDF directamente en la página correspondiente.",
        "Guarda temas relacionados en listas y sincronízalos entre dispositivos de forma opcional.",
      ],
      guideIntro:
        "TuneFinder busca en los índices de los libros que posees. Vincula un PDF con un índice para abrir directamente la página correspondiente desde un resultado.",
      descriptions: [
        "Abre Libros desde la pantalla principal. Busca un libro que tengas y descarga su índice.",
        "Escribe cualquier parte del título. Los resultados muestran el libro y el número de página impreso.",
        "Agrupa temas en repertorios. Abre un tema y añádelo a una lista existente o nueva.",
      ],
      instructions: [
        [
          "Elige un libro y descarga su índice.",
          "Toca Elegir PDF… y selecciona tu copia del libro.",
          "Cuando aparezca Listo para buscar, vuelve a la pantalla principal.",
        ],
        [
          "Introduce el título completo o una parte.",
          "Elige el resultado del libro que quieras utilizar.",
          "TuneFinder abre el PDF vinculado en la página correspondiente.",
        ],
        [
          "Abre un tema desde los resultados.",
          "Toca + y selecciona o crea una lista.",
          "Abre Listas para consultar, renombrar, ordenar o eliminar elementos de tus repertorios.",
        ],
      ],
      notes: [
        "TuneFinder no proporciona los PDF. Debes vincular una copia legal almacenada en tu dispositivo.",
        "Algunas ediciones incluyen portadas adicionales. Ajusta el desplazamiento de página en la configuración del libro si es necesario.",
        "Desliza hacia abajo en Listas para actualizar. La sincronización opcional mantiene las listas al día en tus dispositivos Apple.",
      ],
      captions: [
        "Descarga un índice y vincula su PDF.",
        "Busca una vez y consulta el libro y la página.",
        "Mantén juntos tus repertorios de ensayos y actuaciones.",
      ],
      syncIntro:
        "En iPhone y iPad, TuneFinder puede guardar una copia de tu biblioteca en iCloud Documents. Utiliza la misma cuenta de iCloud en cada dispositivo.",
      syncSetup: [
        "Activa iCloud Drive para TuneFinder en los ajustes de iOS o iPadOS.",
        "Abre Sincronización de dispositivos y toca Activar sincronización con iCloud.",
        "Repítelo en los demás dispositivos Apple y toca Sincronizar ahora si es necesario.",
      ],
      syncBehavior: [
        "Los cambios se sincronizan al iniciar y al volver a la aplicación.",
        "Desliza hacia abajo en Listas o Índices para solicitar una actualización.",
        "Si una lista cambia dos veces, prevalece la edición más reciente.",
        "Pausar la sincronización conserva las copias del dispositivo y de iCloud.",
      ],
      syncScope:
        "Conviene saberlo: TuneFinder funciona localmente sin iCloud. La futura versión para Android utilizará un sistema independiente; las bibliotecas no se transferirán entre iOS y Android.",
      download:
        "Descarga TuneFinder y utiliza tu propia biblioteca con mayor facilidad.",
      support:
        "¿Necesitas ayuda o tienes una idea? Ponte en contacto con el equipo de TuneFinder.",
      privacy:
        "TuneFinder no requiere una cuenta ni recopila datos personales. Tu biblioteca sigue siendo tuya.",
    },
    fr: {
      features: [
        "Recherchez un titre une seule fois et voyez dans quels index ajoutés il apparaît.",
        "Touchez un résultat pour ouvrir votre PDF directement à la bonne page.",
        "Regroupez vos morceaux dans des playlists et synchronisez-les entre appareils si vous le souhaitez.",
      ],
      guideIntro:
        "TuneFinder recherche dans les index des recueils que vous possédez. Associez un PDF à un index pour ouvrir directement la bonne page depuis un résultat.",
      descriptions: [
        "Ouvrez Livres depuis l’accueil. Trouvez un recueil que vous possédez et téléchargez son index.",
        "Saisissez une partie du titre. Les résultats affichent le recueil correspondant et le numéro de page imprimé.",
        "Regroupez vos morceaux en setlists. Ouvrez un morceau et ajoutez-le à une playlist existante ou nouvelle.",
      ],
      instructions: [
        [
          "Choisissez un recueil et téléchargez son index.",
          "Touchez Choisir le PDF… et sélectionnez votre exemplaire.",
          "Lorsque Prêt pour la recherche apparaît, revenez à l’accueil.",
        ],
        [
          "Saisissez le titre complet ou une partie.",
          "Choisissez le résultat du recueil souhaité.",
          "TuneFinder ouvre le PDF associé à la page correspondante.",
        ],
        [
          "Ouvrez un morceau depuis les résultats.",
          "Touchez +, puis sélectionnez ou créez une playlist.",
          "Ouvrez Listes pour consulter, renommer, réorganiser ou supprimer des éléments de vos setlists.",
        ],
      ],
      notes: [
        "TuneFinder ne fournit pas les PDF des recueils. Vous associez une copie légale déjà présente sur votre appareil.",
        "Certaines éditions comportent des pages de couverture supplémentaires. Ajustez le décalage dans les réglages du recueil si nécessaire.",
        "Tirez l’écran Playlists vers le bas pour actualiser. La synchronisation facultative garde vos playlists à jour sur vos appareils Apple.",
      ],
      captions: [
        "Téléchargez un index, puis associez son PDF.",
        "Une recherche affiche le recueil et la page.",
        "Regroupez vos setlists de répétition et de concert.",
      ],
      syncIntro:
        "Sur iPhone et iPad, TuneFinder peut conserver une copie de votre bibliothèque dans iCloud Documents. Utilisez le même compte iCloud sur chaque appareil.",
      syncSetup: [
        "Activez iCloud Drive pour TuneFinder dans les réglages iOS ou iPadOS.",
        "Ouvrez Synchronisation des appareils et touchez Activer la synchronisation iCloud.",
        "Répétez sur vos autres appareils Apple, puis touchez Synchroniser maintenant si nécessaire.",
      ],
      syncBehavior: [
        "Les changements se synchronisent au démarrage et au retour dans l’application.",
        "Tirez Playlists ou Index vers le bas pour demander une actualisation.",
        "En cas de modifications concurrentes, la playlist modifiée en dernier est conservée.",
        "La mise en pause conserve les copies sur l’appareil et dans iCloud.",
      ],
      syncScope:
        "Bon à savoir : TuneFinder reste local et fonctionne sans iCloud. La future version Android utilisera un système distinct ; les bibliothèques ne seront pas transférées entre iOS et Android.",
      download:
        "Téléchargez TuneFinder pour utiliser plus facilement votre propre bibliothèque.",
      support:
        "Besoin d’aide ou envie de partager une idée ? Contactez l’assistance TuneFinder.",
      privacy:
        "TuneFinder ne nécessite aucun compte et ne collecte aucune donnée personnelle. Votre bibliothèque reste la vôtre.",
    },
    it: {
      features: [
        "Cerca un brano una sola volta e scopri in quali indici aggiunti compare.",
        "Tocca un risultato per aprire il PDF direttamente alla pagina corretta.",
        "Raggruppa i brani nelle playlist e sincronizzali facoltativamente tra dispositivi.",
      ],
      guideIntro:
        "TuneFinder cerca negli indici dei libri che possiedi. Collega un PDF a un indice per aprire direttamente la pagina corretta da un risultato.",
      descriptions: [
        "Apri Libri dalla schermata iniziale. Trova un libro che possiedi e scarica il relativo indice.",
        "Digita una parte del titolo. I risultati mostrano il libro e il numero di pagina stampato.",
        "Raggruppa i brani nelle scalette. Apri un brano e aggiungilo a una playlist esistente o nuova.",
      ],
      instructions: [
        [
          "Scegli un libro e scarica il suo indice.",
          "Tocca Scegli PDF… e seleziona la tua copia.",
          "Quando compare Pronto per la ricerca, torna alla schermata iniziale.",
        ],
        [
          "Inserisci il titolo completo o una parte.",
          "Scegli il risultato dal libro desiderato.",
          "TuneFinder apre il PDF collegato alla pagina corretta.",
        ],
        [
          "Apri un brano dai risultati.",
          "Tocca +, quindi seleziona o crea una playlist.",
          "Apri Liste per consultare, rinominare, riordinare o rimuovere elementi dalle scalette.",
        ],
      ],
      notes: [
        "TuneFinder non fornisce i PDF. Collega una copia legale già presente sul dispositivo.",
        "Alcune edizioni includono pagine di copertina aggiuntive. Regola l’offset nelle impostazioni del libro se necessario.",
        "Trascina verso il basso in Playlist per aggiornare. La sincronizzazione facoltativa mantiene le playlist aggiornate sui dispositivi Apple.",
      ],
      captions: [
        "Scarica un indice e collega il relativo PDF.",
        "Una ricerca mostra libro e pagina.",
        "Tieni insieme le scalette per prove e concerti.",
      ],
      syncIntro:
        "Su iPhone e iPad, TuneFinder può conservare una copia della libreria in iCloud Documents. Usa lo stesso account iCloud su ogni dispositivo.",
      syncSetup: [
        "Attiva iCloud Drive per TuneFinder nelle impostazioni di iOS o iPadOS.",
        "Apri Sincronizzazione dispositivi e tocca Attiva sincronizzazione iCloud.",
        "Ripeti sugli altri dispositivi Apple e tocca Sincronizza ora se necessario.",
      ],
      syncBehavior: [
        "Le modifiche si sincronizzano all’avvio e quando torni nell’app.",
        "Trascina Playlist o Indici verso il basso per richiedere un aggiornamento.",
        "In caso di modifiche simultanee, prevale la playlist modificata più di recente.",
        "La pausa conserva entrambe le copie sul dispositivo e su iCloud.",
      ],
      syncScope:
        "Da sapere: TuneFinder funziona localmente anche senza iCloud. La futura versione Android userà un sistema separato; le librerie non saranno trasferite tra iOS e Android.",
      download:
        "Scarica TuneFinder e usa più facilmente la tua libreria personale.",
      support:
        "Ti serve aiuto o hai un’idea? Contatta l’assistenza TuneFinder.",
      privacy:
        "TuneFinder non richiede un account e non raccoglie dati personali. La libreria resta tua.",
    },
    pt: {
      features: [
        "Pesquise um tema uma vez e veja em que índices adicionados aparece.",
        "Toque num resultado para abrir o PDF diretamente na página certa.",
        "Agrupe temas em listas e sincronize-os opcionalmente entre dispositivos.",
      ],
      guideIntro:
        "O TuneFinder pesquisa os índices dos livros que possui. Associe um PDF a um índice para abrir diretamente a página certa a partir de um resultado.",
      descriptions: [
        "Abra Livros no ecrã inicial. Encontre um livro que possua e descarregue o respetivo índice.",
        "Escreva parte do título. Os resultados mostram o livro correspondente e o número de página impresso.",
        "Agrupe temas em alinhamentos. Abra um tema e adicione-o a uma lista existente ou nova.",
      ],
      instructions: [
        [
          "Escolha um livro e descarregue o respetivo índice.",
          "Toque em Escolher PDF… e selecione a sua cópia.",
          "Quando aparecer Pronto para pesquisar, volte ao ecrã inicial.",
        ],
        [
          "Introduza o título completo ou parte dele.",
          "Escolha o resultado do livro que pretende utilizar.",
          "O TuneFinder abre o PDF associado na página correspondente.",
        ],
        [
          "Abra um tema nos resultados.",
          "Toque em + e selecione ou crie uma lista.",
          "Abra Listas para consultar, mudar o nome, reordenar ou remover itens dos alinhamentos.",
        ],
      ],
      notes: [
        "O TuneFinder não fornece os PDF. Associe uma cópia legal já guardada no dispositivo.",
        "Algumas edições incluem páginas de capa adicionais. Ajuste o desvio nas definições do livro, se necessário.",
        "Puxe o ecrã Listas para baixo para atualizar. A sincronização opcional mantém as listas atualizadas nos dispositivos Apple.",
      ],
      captions: [
        "Descarregue um índice e associe o respetivo PDF.",
        "Uma pesquisa mostra o livro e a página.",
        "Mantenha juntos os alinhamentos para ensaios e atuações.",
      ],
      syncIntro:
        "No iPhone e iPad, o TuneFinder pode guardar uma cópia da biblioteca no iCloud Documents. Utilize a mesma conta iCloud em cada dispositivo.",
      syncSetup: [
        "Ative o iCloud Drive para o TuneFinder nas definições do iOS ou iPadOS.",
        "Abra Sincronização de dispositivos e toque em Ativar sincronização iCloud.",
        "Repita nos outros dispositivos Apple e toque em Sincronizar agora, se necessário.",
      ],
      syncBehavior: [
        "As alterações são sincronizadas ao iniciar e ao regressar à aplicação.",
        "Puxe Listas ou Índices para baixo para pedir uma atualização.",
        "Em caso de alterações simultâneas, prevalece a lista editada mais recentemente.",
        "Pausar mantém intactas as cópias no dispositivo e no iCloud.",
      ],
      syncScope:
        "Convém saber: o TuneFinder funciona localmente sem iCloud. A futura versão Android utilizará um sistema separado; as bibliotecas não serão transferidas entre iOS e Android.",
      download:
        "Descarregue o TuneFinder e utilize mais facilmente a sua biblioteca pessoal.",
      support:
        "Precisa de ajuda ou tem uma ideia? Contacte o apoio do TuneFinder.",
      privacy:
        "O TuneFinder não exige uma conta nem recolhe dados pessoais. A biblioteca continua a ser sua.",
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

  if (!details) return;
  const setAll = (selector, values) =>
    document.querySelectorAll(selector).forEach((element, index) => {
      if (values[index]) element.textContent = values[index];
    });
  setAll(".feature-card p", details.features);
  document.querySelector(".guide-heading > p:last-child").textContent =
    details.guideIntro;
  setAll(
    ".guide-step .guide-copy > p:not(.eyebrow,.guide-note)",
    details.descriptions
  );
  document
    .querySelectorAll(".guide-step")
    .forEach((step, index) =>
      setAll.call(
        null,
        `.guide-step:nth-of-type(${index + 1}) .instruction-list li`,
        details.instructions[index]
      )
    );
  setAll(".guide-step .guide-note", details.notes);
  setAll(".guide-step figcaption", details.captions);
  document.querySelector(".sync-intro > p:last-child").textContent =
    details.syncIntro;
  setAll(".sync-card:first-child .instruction-list li", details.syncSetup);
  setAll(".sync-card:last-child .check-list li", details.syncBehavior);
  document.querySelector(".sync-scope").textContent = details.syncScope;
  document.querySelector(".download-panel p:last-child").textContent =
    details.download;
  document.querySelector(
    ".support-card:first-child p"
  ).innerHTML = `${details.support} <a href="mailto:contact@tunefinder.app">contact@tunefinder.app</a>`;
  document.querySelector(".support-card:last-child p").textContent =
    details.privacy;
})();
