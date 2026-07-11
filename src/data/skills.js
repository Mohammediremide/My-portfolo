// ============================================================
// data/skills.js
// ------------------------------------------------------------
// WHY THIS FILE EXISTS:
// Both the Hero (the typed "build log" animation) and the Skills
// section need to display the same list of technologies. Rather
// than hard-coding that list twice and risking the two copies
// drifting apart, it lives here ONCE as plain data. Components
// import it and decide how to RENDER it — the data itself
// doesn't know or care whether it ends up in a terminal-style
// animation or a grid of cards. This separation (data file vs.
// presentation component) is what makes the Projects section
// pattern, used later, easy to extend too: adding a new skill
// is a one-line change here, not a hunt through JSX.
// ============================================================

// Each entry maps directly to a react-icons component name.
// Components that render this list import the icon themselves
// and look it up by `icon`, so this file stays free of JSX.
export const skillCategories = [
  {
    id: 'languages-markup',
    label: 'Languages & Markup',
    // The category a skill belongs to controls which group it's
    // displayed under in the Skills section.
    items: [
      { name: 'HTML5', icon: 'FaHtml5', level: 'Advanced' },
      { name: 'CSS3', icon: 'FaCss3Alt', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', icon: 'FaJsSquare', level: 'Advanced' },
      { name: 'Java', icon: 'FaJava', level: 'Proficient' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: 'FaReact', level: 'Advanced' },
      { name: 'React Native', icon: 'FaReact', level: 'Proficient' },
      { name: 'Spring / Spring Boot', icon: 'SiSpring', level: 'Proficient' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure & DevOps',
    items: [
      { name: 'Docker', icon: 'FaDocker', level: 'Proficient' },
      { name: 'Kubernetes', icon: 'SiKubernetes', level: 'Working knowledge' },
    ],
  },
];

// A flattened, ordered list of just the technology names. This
// is what the Hero's Typed.js instance cycles through — Typed.js
// wants a simple array of strings, not nested category objects,
// so we derive that shape here instead of duplicating the names
// a third time inside the Hero component itself.
export const stackBuildLog = [
  'HTML/CSS',
  'JavaScript',
  'Java',
  'React',
  'Spring Boot',
  'React Native',
  'Docker',
  'Kubernetes',
];

// Used by the Stats section's animated counters. Kept here
// alongside the skills data since both describe "who Daniel is"
// at a glance — separating this into its own file would only
// make sense once it grows large enough to warrant it.
export const statHighlights = [
  { id: 'years', value: 4, suffix: '+', label: 'Years building software' },
  { id: 'stack', value: 8, suffix: '', label: 'Core technologies' },
  { id: 'students', value: 200, suffix: '+', label: 'Students taught' },
  { id: 'projects', value: 30, suffix: '+', label: 'Projects shipped' },
];
