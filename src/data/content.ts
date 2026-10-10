export type Language = 'en' | 'it';
export const profile = {
  name: 'Luca Padovan',
  github: 'https://github.com/padovanl', linkedin: 'https://www.linkedin.com/in/lucapadovan/',
};
export const homePath = (lang: Language) => lang === 'it' ? '/it/' : '/';
export const projectPath = (lang: Language, slug: string) => `${homePath(lang)}projects/${slug}/`;
export const cvPath = (lang: Language) => `/cv/Luca_Padovan_CV_${lang.toUpperCase()}.pdf`;
export const content = {
  en: {
    description: 'Luca Padovan — Senior Software Engineer in Bologna. Embedded Linux platforms, Yocto, OTA updates, and open-source developer tools in Go.',
    skip: 'Skip to content', navigation: 'Main navigation', language: 'Choose language',
    projects: 'Projects', about: 'About', experience: 'Experience', contact: 'Contact',
    location: 'BOLOGNA, ITALY', hello: "Hi, I'm Luca Padovan.",
    title: 'Senior Software Engineer', titleAccent: 'Embedded Linux & platforms',
    intro: 'Over seven years of experience delivering software on Linux. At QubicaAMF, I own the Yocto-based platform, from system integration and graphics to OTA updates, CI/CD and observability.',
    explore: 'View experience', download: 'Download CV', github: 'GitHub profile',
    repos: 'public repositories', stars: 'GitHub stars across my projects', thread: 'THE COMMON THREAD', threadText: 'Practical software. A Linux state of mind.',
    selected: '02 / OPEN SOURCE', projectsTitle: 'Selected projects', projectsIntro: 'The problems, the software, and the decisions behind it.',
    repository: 'Repository', docs: 'Website & docs', readDocs: 'Read the docs', caseStudy: 'Read case study',
    demo: 'Watch the terminal demo',
    archive: 'Other repositories', more: 'more repositories', fallback: 'Explore the repository',
    snapshot: 'Repository snapshot: October 3, 2026. Stars and releases refresh from GitHub when available.',
    behind: '03 / PROFILE', aboutTitle: 'About me', skillsTitle: 'Core expertise', personalNote: 'Outside engineering: travel, manga, anime and games.',
    aboutParagraphs: [
      'I’m a Senior Software Engineer in Bologna with over seven years of experience shipping software on Linux, from C/C++ on ARM devices to Go services and the platforms underneath them.',
      'At QubicaAMF, I’m responsible for the Yocto-based embedded Linux platform: system integration, graphics, OTA updates, recovery, CI/CD, and observability. I enjoy connecting low-level details with the architecture of the whole system.',
      'Outside work, I build open-source tools that start with an everyday annoyance or a question. Away from the keyboard, you’ll find me exploring a new place, watching anime, reading manga, or getting absorbed in a game or TV series.',
    ],
    interestsLabel: 'Personal interests', interests: ['Manga & anime', 'TV series', 'Travel', 'Video games'],
    focus: [
      ['Embedded Linux', 'Yocto images, boot, graphics, and system integration.'],
      ['Platform & delivery', 'Reproducible builds, shared caches, and CI/CD.'],
      ['Software updates', 'OTA strategies, recovery, and device lifecycles.'],
    ],
    careerEyebrow: '01 / CAREER', careerTitle: 'Experience', careerIntro: 'Embedded software, Linux platforms and delivery infrastructure.',
    education: 'EDUCATION', university: 'University of Ferrara',
    degrees: [['Master’s degree in Computer and Automation Engineering', '2016–2018'], ['Bachelor’s degree in Computer and Electronic Engineering', '2012–2016']],
    credentialsEyebrow: '04 / CERTIFICATIONS & TRAINING', credentialsTitle: 'Certifications & training', credentialsIntro: 'Programming certifications and embedded Linux training.',
    certification: 'CERTIFICATION', training: 'TRAINING', yoctoCourse: 'Embedded Linux and Yocto Project course',
    contactEyebrow: '05 / CONTACT', contactTitle: 'Get in touch', contactIntro: 'For professional enquiries, contact me on LinkedIn. My CV is available below.', linkedinAction: 'Connect on LinkedIn', githubAction: 'Explore my GitHub',
    footer: 'Senior Software Engineer · Bologna, Italy', top: 'Back to top',
    back: 'Back to projects', caseEyebrow: 'PROJECT CASE STUDY', contribution: 'My contribution', tradeoffs: 'Trade-offs & constraints', evidence: 'Technical references', problem: 'The problem', approach: 'The approach', decisions: 'Engineering decisions', outcome: 'What it delivers', sources: 'Explore the implementation', next: 'Another project',
  },
  it: {
    description: 'Luca Padovan — Senior Software Engineer a Bologna. Piattaforme Linux embedded, Yocto, aggiornamenti OTA e strumenti open source in Go.',
    skip: 'Vai al contenuto', navigation: 'Navigazione principale', language: 'Scegli la lingua',
    projects: 'Progetti', about: 'Chi sono', experience: 'Esperienza', contact: 'Contatti',
    location: 'BOLOGNA, ITALIA', hello: 'Ciao, sono Luca Padovan.',
    title: 'Senior Software Engineer', titleAccent: 'Linux embedded e piattaforme',
    intro: 'Oltre sette anni di esperienza nello sviluppo software su Linux. In QubicaAMF sono responsabile della piattaforma Yocto: integrazione di sistema, grafica, aggiornamenti OTA, CI/CD e osservabilità.',
    explore: 'Vedi l’esperienza', download: 'Scarica il CV', github: 'Profilo GitHub',
    repos: 'repository pubblici', stars: 'stelle GitHub sui miei progetti', thread: 'IL FILO CONDUTTORE', threadText: 'Software pratico. Una mentalità Linux.',
    selected: '02 / OPEN SOURCE', projectsTitle: 'Progetti selezionati', projectsIntro: 'I problemi, il software e le scelte che ci sono dietro.',
    repository: 'Repository', docs: 'Sito e documentazione', readDocs: 'Documentazione', caseStudy: 'Approfondisci il progetto',
    demo: 'Guarda la demo da terminale',
    archive: 'Altri repository', more: 'altri repository', fallback: 'Esplora il repository',
    snapshot: 'Dati dei repository: 3 ottobre 2026. Stelle e versioni si aggiornano da GitHub quando disponibile.',
    behind: '03 / PROFILO', aboutTitle: 'Chi sono', skillsTitle: 'Competenze principali', personalNote: 'Fuori dal lavoro: viaggi, manga, anime e videogiochi.',
    aboutParagraphs: [
      'Sono un Senior Software Engineer a Bologna con oltre sette anni di esperienza nello sviluppo di software in produzione su Linux, dal C/C++ su dispositivi ARM ai servizi in Go e alle piattaforme su cui girano.',
      'In QubicaAMF sono responsabile della piattaforma Linux embedded basata su Yocto: integrazione di sistema, grafica, aggiornamenti OTA, recovery, CI/CD e osservabilità. Mi piace collegare i dettagli di basso livello all’architettura dell’intero sistema.',
      'Nel tempo libero sviluppo strumenti open source che nascono da un fastidio quotidiano o da una domanda. Lontano dalla tastiera mi piace viaggiare, guardare anime, leggere manga e immergermi in un videogioco o in una serie TV.',
    ],
    interestsLabel: 'Interessi personali', interests: ['Manga e anime', 'Serie TV', 'Viaggi', 'Videogiochi'],
    focus: [
      ['Linux embedded', 'Immagini Yocto, boot, grafica e integrazione di sistema.'],
      ['Piattaforme e delivery', 'Build riproducibili, cache condivise e CI/CD.'],
      ['Aggiornamenti software', 'Strategie OTA, recovery e ciclo di vita dei dispositivi.'],
    ],
    careerEyebrow: '01 / PERCORSO', careerTitle: 'Esperienza', careerIntro: 'Software embedded, piattaforme Linux e infrastruttura di rilascio.',
    education: 'FORMAZIONE', university: 'Università di Ferrara',
    degrees: [['Laurea magistrale in Ingegneria Informatica e dell’Automazione', '2016–2018'], ['Laurea triennale in Ingegneria Elettronica e Informatica', '2012–2016']],
    credentialsEyebrow: '04 / CERTIFICAZIONI E CORSI', credentialsTitle: 'Certificazioni e corsi', credentialsIntro: 'Certificazioni di programmazione e formazione Linux embedded.',
    certification: 'CERTIFICAZIONE', training: 'CORSO', yoctoCourse: 'Corso Linux embedded e Yocto Project',
    contactEyebrow: '05 / CONTATTI', contactTitle: 'Contattami', contactIntro: 'Per richieste professionali, contattami su LinkedIn. Qui trovi anche il mio CV.', linkedinAction: 'Collegati su LinkedIn', githubAction: 'Esplora il mio GitHub',
    footer: 'Senior Software Engineer · Bologna, Italia', top: 'Torna in cima',
    back: 'Torna ai progetti', caseEyebrow: 'APPROFONDIMENTO', contribution: 'Il mio contributo', tradeoffs: 'Compromessi e vincoli', evidence: 'Riferimenti tecnici', problem: 'Il problema', approach: 'L’approccio', decisions: 'Scelte ingegneristiche', outcome: 'Cosa offre', sources: 'Esplora l’implementazione', next: 'Un altro progetto',
  },
};

interface ProjectCopy { tagline: string; description: string; alt: string; capabilities?: string[]; }
interface Project {
  name: string; title: string; badge: string; image?: string; imageTitle?: string; website?: string;
  study?: string; demo?: string; en: ProjectCopy; it: ProjectCopy;
  screenshots?: { image: string; thumbnail?: string; en: { title: string; alt: string }; it: { title: string; alt: string } }[];
}
export const projects: Project[] = [
  {
    name: 'portop', title: 'portop', badge: 'NETWORKING · GO', image: '/assets/portop-web-dashboard.webp', imageTitle: 'Web', website: 'https://padovanl.github.io/portop/', study: 'portop',
    en: { tagline: 'Network diagnostics for Linux.', description: 'Inspect ports, processes, systemd services, and Docker containers in a terminal interface, web dashboard, or Cockpit.', alt: 'Portop web dashboard showing network ports and process details' },
    it: { tagline: 'Diagnostica di rete per Linux.', description: 'Esplora porte, processi, servizi systemd e container Docker dal terminale, dalla dashboard web o da Cockpit.', alt: 'Dashboard web di Portop con porte di rete e dettagli dei processi' },
    screenshots: [
      { image: '/assets/demos/portop.gif', thumbnail: '/assets/demos/portop-poster.webp', en: { title: 'Terminal', alt: 'Animated Portop terminal demo showing filtering, process inspection, and confirmation dialogs' }, it: { title: 'Terminale', alt: 'Demo animata di Portop nel terminale con filtri, ispezione dei processi e finestre di conferma' } },
      { image: '/assets/portop-cockpit.webp', en: { title: 'Cockpit', alt: 'Portop integrated into Cockpit with the network ports table and navigation sidebar' }, it: { title: 'Cockpit', alt: 'Portop integrato in Cockpit con la tabella delle porte di rete e la barra di navigazione' } },
    ],
  },
  {
    name: 'auroraOS', title: 'Aurora OS', badge: 'LINUX · DEBIAN', image: '/assets/aurora-desktop.webp', website: 'https://padovanl.github.io/auroraOS/',
    en: { tagline: 'A Debian desktop for developers.', description: 'A developer-focused Debian distribution with a custom desktop, system snapshots, and built-in development tools.', alt: 'Updated Aurora OS desktop with Files, widgets, and the application dock' },
    it: { tagline: 'Un desktop Debian per sviluppatori.', description: 'Una distribuzione Debian pensata per sviluppatori, con desktop personalizzato, snapshot di sistema e strumenti di sviluppo integrati.', alt: 'Desktop aggiornato di Aurora OS con Files, widget e dock delle applicazioni' },
    screenshots: [
      { image: '/assets/aurora-devhub.webp', en: { title: 'Dev Hub', alt: 'Aurora Dev Hub showing development tool categories and one-click installers' }, it: { title: 'Dev Hub', alt: 'Dev Hub di Aurora con categorie di strumenti di sviluppo e installer' } },
      { image: '/assets/aurora-assistant.webp', en: { title: 'AI Assistant', alt: 'Aurora AI Assistant floating beside the Files application' }, it: { title: 'Assistente AI', alt: 'Assistente AI di Aurora in una finestra flottante accanto a Files' } },
    ],
  },
  {
    name: 'pkgtui', title: 'pkgtui', badge: 'PACKAGES · GO', demo: 'pkgtui', website: 'https://padovanl.github.io/pkgtui/',
    en: { tagline: 'A unified interface for package management.', description: 'Search, install, remove, and upgrade packages from APT, Snap, Flatpak, Homebrew, and MacPorts in one terminal interface.', alt: 'pkgtui terminal demo: package search, dependencies, and disk usage' },
    it: { tagline: 'Un’interfaccia unica per gestire i pacchetti.', description: 'Cerca, installa, rimuovi e aggiorna pacchetti con APT, Snap, Flatpak, Homebrew e MacPorts in un’unica interfaccia da terminale.', alt: 'Demo di pkgtui: ricerca di pacchetti, dipendenze e utilizzo del disco' },
  },
  {
    name: 'termdock', title: 'termdock', badge: 'TERMINAL · GO', demo: 'termdock', website: 'https://padovanl.github.io/termdock/',
    en: { tagline: 'Persistent terminal sessions in Go.', description: 'A terminal multiplexer written from scratch in Go. Split panes, persistent sessions, detach and reattach — even from another machine.', alt: 'termdock terminal demo showing split panes and session management' },
    it: { tagline: 'Sessioni da terminale persistenti in Go.', description: 'Un multiplexer da terminale scritto da zero in Go. Pannelli divisi, sessioni persistenti, disconnessione e riconnessione, anche da un’altra macchina.', alt: 'Demo di termdock con pannelli divisi e gestione delle sessioni' },
  },
  {
    name: 'qawk', title: 'qawk', badge: 'OTA · GO · POSTGRESQL', study: 'qawk', website: 'https://padovanl.github.io/qawk/',
    en: { tagline: 'OTA release management for device fleets.', description: 'A hawkBit-compatible OTA server with release channels, staged rollouts, and coordinated updates for device fleets.', alt: '', capabilities: ['Release channels', 'Staged rollouts', 'Device orchestration', 'hawkBit compatibility'] },
    it: { tagline: 'Gestione dei rilasci OTA per flotte di dispositivi.', description: 'Un server OTA compatibile con hawkBit, con canali di rilascio, rollout graduali e aggiornamenti coordinati per flotte di dispositivi.', alt: '', capabilities: ['Canali di rilascio', 'Rollout graduali', 'Orchestrazione dispositivi', 'Compatibilità hawkBit'] },
  },
];

export const careers = [
  {
    company: 'QubicaAMF', role: 'Platform & Senior Software Engineer',
    en: { date: 'FEB 2024 — PRESENT', points: [
      'Built the Yocto CI/CD pipeline from scratch: reproducible builds, shared sstate cache, distributed compilation with icecc, and local source mirrors over NFS.',
      'Defined the fleet’s OTA strategy: built and evaluated a Mender proof of concept, and now implementing SWUpdate.',
      'Own the Linux graphics stack for Unity applications: X11/Wayland, Mesa/Vulkan, and NVIDIA driver integration.',
      'Reduced supporting infrastructure costs through FinOps practices and coordinate external consultants from scoping to delivery.',
    ] },
    it: { date: 'FEB 2024 — OGGI', points: [
      'Ho costruito da zero la pipeline CI/CD Yocto: build riproducibili, sstate cache condivisa, compilazione distribuita con icecc e mirror locali dei sorgenti via NFS.',
      'Ho definito la strategia OTA della flotta: proof of concept e valutazione di Mender, con SWUpdate ora in fase di implementazione.',
      'Sono responsabile dello stack grafico Linux per applicazioni Unity: X11/Wayland, Mesa/Vulkan e integrazione dei driver NVIDIA.',
      'Ho ridotto i costi dell’infrastruttura con pratiche FinOps e coordino i consulenti esterni dalla definizione delle attività alla consegna.',
    ] },
  },
  {
    company: 'QubicaAMF', role: 'Senior Software Engineer',
    en: { date: 'MAY 2023 — FEB 2024', points: ['Developed embedded Linux applications and software infrastructure for entertainment systems, including system customization and operational services.'] },
    it: { date: 'MAG 2023 — FEB 2024', points: ['Ho sviluppato applicazioni Linux embedded e infrastruttura software per sistemi di intrattenimento, inclusi personalizzazione di sistema e servizi operativi.'] },
  },
  {
    company: 'HiFuture · Teoresi Group', role: 'Software Engineer',
    en: { date: 'JUL 2021 — MAY 2023', points: ['Delivered C# interfaces in WinForms and WPF for biomedical and microelectronics equipment, and authored software requirements and test plans.'] },
    it: { date: 'LUG 2021 — MAG 2023', points: ['Ho realizzato interfacce C# in WinForms e WPF per apparecchiature biomedicali e di microelettronica, redigendo requisiti software e piani di test.'] },
  },
  {
    company: 'T3LAB', role: 'Software & Firmware Engineer',
    en: { date: 'APR 2019 — JUL 2021', points: ['Developed and tested C/C++ applications on ARM multicore SoCs. Built the SBDIO Industry 4.0 cloud infrastructure with OpenStack, Kubernetes, federated authentication, and ELK logging.'] },
    it: { date: 'APR 2019 — LUG 2021', points: ['Ho sviluppato e testato applicazioni C/C++ su SoC ARM multicore. Ho realizzato l’infrastruttura cloud Industria 4.0 SBDIO con OpenStack, Kubernetes, autenticazione federata e logging ELK.'] },
  },
  {
    company: 'Datalogic', role: 'Software Engineering Intern',
    en: { date: 'OCT 2018 — MAR 2019', points: ['Researched machine learning platforms for mobile computing for my master’s thesis.'] },
    it: { date: 'OTT 2018 — MAR 2019', points: ['Tesi magistrale sulle piattaforme di machine learning per dispositivi di mobile computing.'] },
  },
];

// Editorial summaries grounded in the supplied CV and linked project documentation.
export const studies = {
  portop: {
    badge: 'GO · LINUX · DEVELOPER TOOLS', image: '/assets/portop-web-dashboard.webp',
    source: 'https://github.com/padovanl/portop#readme', website: 'https://padovanl.github.io/portop/',
    en: {
      title: 'From an open port to the process behind it.',
      intro: 'A practical tool for understanding the services running on a machine, without piecing together multiple command outputs.',
      problem: 'A port number alone is rarely enough to diagnose a conflict. The useful context is the process that owns it and the service or container it belongs to.',
      contribution: 'I developed portop to connect socket data with process, service and container context, and expose it through terminal, web and Cockpit interfaces.',
      tradeoff: 'Using Linux procfs keeps collection close to the operating system and reduces integration dependencies, while tying this collection path to Linux and its permission model.',
      approach: 'On Linux, portop reads socket tables in /proc/net, matches socket inodes to process file descriptors, and uses cgroup paths to associate processes with systemd units and Docker containers.',
      decisions: [
        ['Use the operating system’s own data', 'Reading /proc and cgroups avoids dependencies on D-Bus and the Docker SDK. Container names can be enriched through read-only Docker API calls.'],
        ['Expose the same information in different workflows', 'The terminal interface supports interactive inspection; JSON snapshots make the data usable in scripts. A web dashboard and Cockpit integration provide other ways to explore it.'],
        ['Make change detection explicit', 'Save a listening-port baseline and compare later. A non-zero exit status lets a cron job or systemd timer flag changes automatically.'],
      ],
      outcomes: ['Ports, processes, services, and containers in one view.', 'Baseline comparison and JSON output for automation.', 'Packaged releases and a checksum-verifying installer.'],
      limit: 'Visibility depends on process permissions. Other users’ processes can require elevated access; service and container details depend on accessible metadata.',
      alt: 'Portop web dashboard with network ports and their owning processes',
    },
    it: {
      title: 'Da una porta aperta al processo che la usa.',
      intro: 'Uno strumento pratico per capire quali servizi girano su una macchina, senza incrociare manualmente l’output di più comandi.',
      problem: 'Il numero di una porta raramente basta a diagnosticare un conflitto. Servono il processo che la occupa e il servizio o container a cui appartiene.',
      contribution: 'Ho sviluppato portop per collegare i socket ai processi, ai servizi e ai container, rendendo questi dati accessibili da terminale, dashboard web e Cockpit.',
      tradeoff: 'L’uso di procfs riduce le dipendenze di integrazione e permette di leggere i dati del sistema operativo, ma lega questa modalità di raccolta a Linux e al suo modello di permessi.',
      approach: 'Su Linux, portop legge le tabelle dei socket in /proc/net, associa gli inode ai file descriptor dei processi e usa i percorsi dei cgroups per identificare unit systemd e container Docker.',
      decisions: [
        ['Usare i dati del sistema operativo', 'Leggere /proc e cgroups evita dipendenze da D-Bus e Docker SDK. I nomi dei container possono essere recuperati tramite chiamate in sola lettura all’API Docker.'],
        ['Adattarsi a flussi di lavoro diversi', 'L’interfaccia da terminale permette l’ispezione interattiva; gli snapshot JSON rendono i dati utilizzabili negli script. Dashboard web e integrazione Cockpit offrono altre modalità di consultazione.'],
        ['Rendere esplicito il rilevamento delle variazioni', 'Si salva una baseline delle porte in ascolto e la si confronta in seguito. Un codice di uscita diverso da zero permette a cron o ai timer systemd di segnalare automaticamente le variazioni.'],
      ],
      outcomes: ['Porte, processi, servizi e container in un’unica vista.', 'Confronto con una baseline e output JSON per l’automazione.', 'Release pacchettizzate e installer con verifica dei checksum.'],
      limit: 'La visibilità dipende dai permessi sui processi. Quelli di altri utenti possono richiedere privilegi elevati; i dettagli di servizi e container dipendono dai metadati accessibili.',
      alt: 'Dashboard web di Portop con porte di rete e relativi processi',
    },
  },
  qawk: {
    badge: 'GO · POSTGRESQL · OTA', source: 'https://github.com/padovanl/qawk#readme', website: 'https://padovanl.github.io/qawk/',
    en: {
      title: 'Coordinating updates across a device fleet.',
      intro: 'An OTA server that combines hawkBit compatibility with release channels, staged delivery, and multi-device orchestration.',
      problem: 'An update can succeed on one device and fail on another. For systems made of multiple connected components, release management needs to consider the whole system, not just individual downloads.',
      contribution: 'I developed qawk’s OTA server, including hawkBit-compatible APIs, release progression and multi-device update orchestration.',
      tradeoff: 'API compatibility adds a contract that must be tested against the reference server. Staged delivery and coordinated rollback add state and operational complexity in exchange for greater control over releases.',
      approach: 'qawk implements the Eclipse hawkBit 1.1.0 device and management APIs, then adds release channels, promotion gates, rollout waves, and coordinated rollback for multi-device systems.',
      decisions: [
        ['Verify compatibility with a real reference', 'Contract tests are replayed against a real hawkBit server to check API behavior, covering 16 device operations and 153 management operations.'],
        ['Control how releases progress', 'Channels separate release stages; promotion gates and approvals control progression. Rollout waves halt when error thresholds are exceeded.'],
        ['Treat connected components as a system', 'Orchestrated updates can roll back the whole multi-device system when a component fails. Prometheus metrics and OpenTelemetry tracing help operators observe delivery.'],
      ],
      outcomes: ['hawkBit-compatible APIs with contract-test coverage.', 'Controlled promotion, rollout waves, and coordinated rollback.', 'Mutual TLS and Kubernetes manifests for deployment.'],
      limit: 'Reported load-test result: 10,000 devices polling every 30 seconds, 333 requests/s, and 2 ms p99. This describes the benchmark in my CV; production performance depends on infrastructure and workload.',
      alt: '',
    },
    it: {
      title: 'Coordinare gli aggiornamenti di una flotta.',
      intro: 'Un server OTA che unisce compatibilità hawkBit, canali di rilascio, distribuzione graduale e orchestrazione di più dispositivi.',
      problem: 'Un aggiornamento può riuscire su un dispositivo e fallire su un altro. Nei sistemi composti da più componenti connessi, la gestione dei rilasci deve considerare l’intero sistema, oltre ai singoli download.',
      contribution: 'Ho sviluppato il server OTA qawk, incluse le API compatibili con hawkBit, la progressione dei rilasci e l’orchestrazione degli aggiornamenti multi-dispositivo.',
      tradeoff: 'La compatibilità API richiede verifiche rispetto al server di riferimento. Rollout graduali e rollback coordinato aggiungono stato e complessità operativa in cambio di un maggiore controllo sui rilasci.',
      approach: 'qawk implementa le API dispositivo e di gestione di Eclipse hawkBit 1.1.0 e aggiunge canali di rilascio, soglie di promozione, rollout a ondate e rollback coordinato di sistemi multi-dispositivo.',
      decisions: [
        ['Verificare la compatibilità con un riferimento reale', 'I contract test vengono confrontati con un server hawkBit reale per verificare il comportamento delle API: 16 operazioni dispositivo e 153 operazioni di gestione.'],
        ['Controllare la progressione dei rilasci', 'I canali separano le fasi di rilascio; soglie di promozione e approvazioni ne controllano l’avanzamento. Le ondate di rollout si fermano quando viene superata una soglia di errore.'],
        ['Considerare i componenti connessi come un sistema', 'Gli aggiornamenti orchestrati possono effettuare il rollback dell’intero sistema quando un componente fallisce. Metriche Prometheus e tracing OpenTelemetry aiutano a osservare la distribuzione.'],
      ],
      outcomes: ['API compatibili con hawkBit, verificate tramite contract test.', 'Promozione controllata, rollout a ondate e rollback coordinato.', 'TLS mutuo e manifest Kubernetes per il deployment.'],
      limit: 'Risultato del test di carico riportato nel mio CV: 10.000 dispositivi in polling ogni 30 secondi, 333 richieste/s e p99 di 2 ms. Le prestazioni in produzione dipendono da infrastruttura e carico di lavoro.',
      alt: '',
    },
  },
};
export type StudySlug = keyof typeof studies;
