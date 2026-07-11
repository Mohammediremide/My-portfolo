// ============================================================
// data/projects.js
// ------------------------------------------------------------
// Each project is plain data — title, description, the
// technologies used (which double as filter tags), and links.
// The Projects component reads this array to render cards and
// to derive its filter buttons, so adding a new project never
// requires touching the component itself.
// ============================================================

export const projects = [
  {
    id: 'cashpilot',
    title: 'CashPilot',
    description:
      'Full-stack invoicing platform for small businesses — React front end, Node/Express API, PostgreSQL via Prisma, Redis for job queues.',
    tags: ['React', 'Java', 'Docker'],
    image: '/src/assets/images/projects/cashpilot.jpg',
    liveUrl: 'https://cashpilot.example.com',
    githubUrl: 'https://github.com/danielcollins/cashpilot',
  },
  {
    id: 'vendiq',
    title: 'VendIQ',
    description:
      'Offline-first point-of-sale app for Nigerian retail, built in React Native with local-first sync and conflict resolution.',
    tags: ['React Native', 'JavaScript'],
    image: '/src/assets/images/projects/vendiq.jpg',
    liveUrl: 'https://vendiq.example.com',
    githubUrl: 'https://github.com/danielcollins/vendiq',
  },
  {
    id: 'univote',
    title: 'UniVote',
    description:
      'University election platform with a live organizer dashboard and Recharts-powered results visualization.',
    tags: ['React', 'Java'],
    image: '/src/assets/images/projects/univote.jpg',
    liveUrl: 'https://univote.example.com',
    githubUrl: 'https://github.com/danielcollins/univote',
  },
  {
    id: 'cognifyiq',
    title: 'CognifyIQ',
    description:
      'Multi-page IQ assessment single-page app, built around a single-file JS router pattern for predictable navigation.',
    tags: ['JavaScript', 'HTML/CSS'],
    image: '/src/assets/images/projects/cognifyiq.jpg',
    liveUrl: 'https://cognifyiq.example.com',
    githubUrl: 'https://github.com/danielcollins/cognifyiq',
  },
  {
    id: 'signal',
    title: 'Signal',
    description:
      'A todo app with Web Audio API feedback on task completion and full localStorage persistence — no backend required.',
    tags: ['React', 'JavaScript'],
    image: '/src/assets/images/projects/signal.jpg',
    liveUrl: 'https://signal-todo.example.com',
    githubUrl: 'https://github.com/danielcollins/signal',
  },
  {
    id: 'arrivederci',
    title: 'Arrivederci',
    description:
      'A World Cup 2026 apartment-hunting concept site featuring a custom Stadium Radar SVG and Recharts price comparisons.',
    tags: ['React', 'JavaScript'],
    image: '/src/assets/images/projects/arrivederci.jpg',
    liveUrl: 'https://arrivederci.example.com',
    githubUrl: 'https://github.com/danielcollins/arrivederci',
  },
];

// Derived, not hand-maintained: the filter bar's "All" plus
// every unique tag used across the projects above. Computing
// this from the data means a new tag on a new project
// automatically becomes a working filter button.
export const projectFilters = [
  'All',
  ...new Set(projects.flatMap((project) => project.tags)),
];
