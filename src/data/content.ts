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
    title: 'I build Linux platforms.', titleAccent: 'And tools for developers.',
    intro: 'From embedded Linux in production to open-source tools in Go, I turn complex systems into practical software. Curiosity gets me started; understanding the details keeps me building.',
    explore: 'Explore the work', download: 'Download CV', github: 'GitHub profile',
    repos: 'public repositories', stars: 'GitHub stars across my projects', thread: 'THE COMMON THREAD', threadText: 'Practical software. A Linux state of mind.',
    selected: '01 / SELECTED WORK', projectsTitle: 'Useful tools. Built with purpose.', projectsIntro: 'The problems, the software, and the decisions behind it.',
    repository: 'Repository', docs: 'Website & docs', readDocs: 'Read the docs', caseStudy: 'Behind the build',
    demo: 'Watch the terminal demo', demoCaption: 'Original recording from the project repository. Play and pause using the video controls.',
    demoFallback: 'Download the demo video',
    archive: 'More from the workbench', more: 'more repositories', fallback: 'Explore the repository',
    snapshot: 'Repository snapshot: October 3, 2026. Stars and releases refresh from GitHub when available.',
    behind: '02 / BEHIND THE CODE', aboutTitle: 'Systems thinker. Hands-on builder.',
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
    careerEyebrow: '03 / EXPERIENCE', careerTitle: 'From firmware to platforms.', careerIntro: 'Production systems. Concrete engineering work.',
    education: 'EDUCATION', university: 'University of Ferrara',
    degrees: [['Master’s degree in Computer and Automation Engineering', '2016–2018'], ['Bachelor’s degree in Computer and Electronic Engineering', '2012–2016']],
    credentialsEyebrow: '04 / CERTIFICATIONS & TRAINING', credentialsTitle: 'Always learning.', credentialsIntro: 'Formal foundations. Curiosity in practice.',
    certification: 'CERTIFICATION', training: 'TRAINING', yoctoCourse: 'Embedded Linux and Yocto Project course',
    contactEyebrow: '05 / KEEP IN TOUCH', contactTitle: 'Let’s build something useful.', contactIntro: 'Have a question, a project, or a shared interest? Connect with me on LinkedIn or GitHub.', linkedinAction: 'Connect on LinkedIn', githubAction: 'Explore my GitHub',
    footer: 'Built with Astro. Fueled by curiosity.', top: 'Back to top',
    back: 'Back to projects', caseEyebrow: 'BEHIND THE BUILD', problem: 'The problem', approach: 'The approach', decisions: 'Engineering decisions', outcome: 'What it delivers', sources: 'Explore the implementation', next: 'Another project',
  },
  it: {
    description: 'Luca Padovan — Senior Software Engineer a Bologna. Piattaforme Linux embedded, Yocto, aggiornamenti OTA e strumenti open source in Go.',
    skip: 'Vai al contenuto', navigation: 'Navigazione principale', language: 'Scegli la lingua',
    projects: 'Progetti', about: 'Chi sono', experience: 'Esperienza', contact: 'Contatti',
    location: 'BOLOGNA, ITALIA', hello: 'Ciao, sono Luca Padovan.',
    title: 'Creo piattaforme Linux.', titleAccent: 'E strumenti per sviluppatori.',
    intro: 'Da Linux embedded in produzione agli strumenti open source in Go, trasformo sistemi complessi in software pratico. La curiosità mi fa iniziare; capire i dettagli mi spinge a continuare.',
    explore: 'Esplora i progetti', download: 'Scarica il CV', github: 'Profilo GitHub',
    repos: 'repository pubblici', stars: 'stelle GitHub sui miei progetti', thread: 'IL FILO CONDUTTORE', threadText: 'Software pratico. Una mentalità Linux.',
    selected: '01 / PROGETTI SELEZIONATI', projectsTitle: 'Strumenti utili. Idee concrete.', projectsIntro: 'I problemi, il software e le scelte che ci sono dietro.',
    repository: 'Repository', docs: 'Sito e documentazione', readDocs: 'Documentazione', caseStudy: 'Dietro il progetto',
    demo: 'Guarda la demo da terminale', demoCaption: 'Registrazione originale dal repository del progetto. Usa i controlli del video per avviare e mettere in pausa.',
    demoFallback: 'Scarica il video della demo',
    archive: 'Altri progetti dal laboratorio', more: 'altri repository', fallback: 'Esplora il repository',
    snapshot: 'Dati dei repository: 3 ottobre 2026. Stelle e versioni si aggiornano da GitHub quando disponibile.',
    behind: '02 / DIETRO IL CODICE', aboutTitle: 'Una visione di sistema. Le mani nel codice.',
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
    careerEyebrow: '03 / ESPERIENZA', careerTitle: 'Dal firmware alle piattaforme.', careerIntro: 'Sistemi in produzione. Lavoro ingegneristico concreto.',
    education: 'FORMAZIONE', university: 'Università di Ferrara',
    degrees: [['Laurea magistrale in Ingegneria Informatica e dell’Automazione', '2016–2018'], ['Laurea triennale in Ingegneria Elettronica e Informatica', '2012–2016']],
    credentialsEyebrow: '04 / CERTIFICAZIONI E CORSI', credentialsTitle: 'Continuare a imparare.', credentialsIntro: 'Basi solide. Curiosità nella pratica.',
    certification: 'CERTIFICAZIONE', training: 'CORSO', yoctoCourse: 'Corso Linux embedded e Yocto Project',
    contactEyebrow: '05 / RESTIAMO IN CONTATTO', contactTitle: 'Costruiamo qualcosa di utile.', contactIntro: 'Hai una domanda, un progetto o un interesse in comune? Contattami su LinkedIn o GitHub.', linkedinAction: 'Collegati su LinkedIn', githubAction: 'Esplora il mio GitHub',
    footer: 'Creato con Astro. Alimentato dalla curiosità.', top: 'Torna in cima',
    back: 'Torna ai progetti', caseEyebrow: 'DIETRO IL PROGETTO', problem: 'Il problema', approach: 'L’approccio', decisions: 'Scelte ingegneristiche', outcome: 'Cosa offre', sources: 'Esplora l’implementazione', next: 'Un altro progetto',
  },
};

interface ProjectCopy { tagline: string; description: string; alt: string; capabilities?: string[]; }
interface Project {
  name: string; title: string; badge: string; image?: string; website?: string;
  study?: string; demo?: string; en: ProjectCopy; it: ProjectCopy;
  screenshots?: { image: string; en: { title: string; alt: string }; it: { title: string; alt: string } }[];
}
export const projects: Project[] = [
  {
    name: 'portop', title: 'portop', badge: 'NETWORKING · GO', image: '/assets/portop-dashboard.png', website: 'https://padovanl.github.io/portop/', study: 'portop',
    en: { tagline: 'What’s really using your ports?', description: 'Inspect ports, processes, systemd services, and Docker containers in a terminal interface, web dashboard, or Cockpit.', alt: 'Portop dashboard showing ports, processes, and services' },
    it: { tagline: 'Cosa sta usando davvero le tue porte?', description: 'Esplora porte, processi, servizi systemd e container Docker dal terminale, dalla dashboard web o da Cockpit.', alt: 'Dashboard di Portop con porte, processi e servizi' },
  },
  {
    name: 'auroraOS', title: 'Aurora OS', badge: 'LINUX · DEBIAN', image: '/assets/aurora-desktop.webp', website: 'https://padovanl.github.io/auroraOS/',
    en: { tagline: 'A Linux desktop, with a fresh perspective.', description: 'A developer-focused Debian distribution with a custom desktop, system snapshots, and built-in development tools.', alt: 'Updated Aurora OS desktop with Files, widgets, and the application dock' },
    it: { tagline: 'Un desktop Linux, con una prospettiva diversa.', description: 'Una distribuzione Debian pensata per sviluppatori, con desktop personalizzato, snapshot di sistema e strumenti di sviluppo integrati.', alt: 'Desktop aggiornato di Aurora OS con Files, widget e dock delle applicazioni' },
    screenshots: [
      { image: '/assets/aurora-devhub.webp', en: { title: 'Dev Hub', alt: 'Aurora Dev Hub showing development tool categories and one-click installers' }, it: { title: 'Dev Hub', alt: 'Dev Hub di Aurora con categorie di strumenti di sviluppo e installer' } },
      { image: '/assets/aurora-assistant.webp', en: { title: 'AI Assistant', alt: 'Aurora AI Assistant floating beside the Files application' }, it: { title: 'Assistente AI', alt: 'Assistente AI di Aurora in una finestra flottante accanto a Files' } },
    ],
  },
  {
    name: 'pkgtui', title: 'pkgtui', badge: 'PACKAGES · GO', demo: 'pkgtui', website: 'https://padovanl.github.io/pkgtui/',
    en: { tagline: 'One terminal. Your package managers.', description: 'Search, install, remove, and upgrade packages from APT, Snap, Flatpak, Homebrew, and MacPorts in one terminal interface.', alt: 'pkgtui terminal demo: package search, dependencies, and disk usage' },
    it: { tagline: 'Un terminale. I tuoi gestori di pacchetti.', description: 'Cerca, installa, rimuovi e aggiorna pacchetti con APT, Snap, Flatpak, Homebrew e MacPorts in un’unica interfaccia da terminale.', alt: 'Demo di pkgtui: ricerca di pacchetti, dipendenze e utilizzo del disco' },
  },
  {
    name: 'termdock', title: 'termdock', badge: 'TERMINAL · GO', demo: 'termdock', website: 'https://padovanl.github.io/termdock/',
    en: { tagline: 'Your sessions, still running.', description: 'A terminal multiplexer written from scratch in Go. Split panes, persistent sessions, detach and reattach — even from another machine.', alt: 'termdock terminal demo showing split panes and session management' },
    it: { tagline: 'Le tue sessioni continuano a girare.', description: 'Un multiplexer da terminale scritto da zero in Go. Pannelli divisi, sessioni persistenti, disconnessione e riconnessione, anche da un’altra macchina.', alt: 'Demo di termdock con pannelli divisi e gestione delle sessioni' },
  },
  {
    name: 'qawk', title: 'qawk', badge: 'OTA · GO · POSTGRESQL', study: 'qawk',
    en: { tagline: 'Updates that move together.', description: 'A hawkBit-compatible OTA server with release channels, staged rollouts, and coordinated updates for device fleets.', alt: '', capabilities: ['Release channels', 'Staged rollouts', 'Device orchestration', 'hawkBit compatibility'] },
    it: { tagline: 'Aggiornamenti che procedono insieme.', description: 'Un server OTA compatibile con hawkBit, con canali di rilascio, rollout graduali e aggiornamenti coordinati per flotte di dispositivi.', alt: '', capabilities: ['Canali di rilascio', 'Rollout graduali', 'Orchestrazione dispositivi', 'Compatibilità hawkBit'] },
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
    badge: 'GO · LINUX · DEVELOPER TOOLS', image: '/assets/portop-dashboard.png',
    source: 'https://github.com/padovanl/portop#readme', website: 'https://padovanl.github.io/portop/',
    en: {
      title: 'From an open port to the process behind it.',
      intro: 'A practical tool for understanding the services running on a machine, without piecing together multiple command outputs.',
      problem: 'A port number alone is rarely enough to diagnose a conflict. The useful context is the process that owns it and the service or container it belongs to.',
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
    badge: 'GO · POSTGRESQL · OTA', source: 'https://github.com/padovanl/qawk#readme',
    en: {
      title: 'Coordinating updates across a device fleet.',
      intro: 'An OTA server that combines hawkBit compatibility with release channels, staged delivery, and multi-device orchestration.',
      problem: 'An update can succeed on one device and fail on another. For systems made of multiple connected components, release management needs to consider the whole system, not just individual downloads.',
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
