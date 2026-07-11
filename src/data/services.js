// ============================================================
// data/services.js
// ------------------------------------------------------------
// Plain data describing what Daniel offers, kept separate from
// the Services component so the offerings can be edited without
// touching any JSX or layout code.
// ============================================================

export const services = [
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description:
      'Production React front ends paired with Spring Boot or Node APIs — built for real traffic, not just a demo.',
    icon: 'FaReact',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description:
      'Cross-platform apps in React Native, sharing logic with the web product where it makes sense to.',
    icon: 'FaMobileAlt',
  },
  {
    id: 'backend',
    title: 'Backend & API Engineering',
    description:
      'Java and Spring Boot services — authentication, data modeling, and APIs designed to be consumed by more than one client.',
    icon: 'FaServer',
  },
  {
    id: 'devops',
    title: 'Containerization & Deployment',
    description:
      'Docker images and Kubernetes manifests that take a project from "runs on my machine" to a reproducible deployment.',
    icon: 'FaDocker',
  },
  {
    id: 'curriculum',
    title: 'Technical Curriculum Design',
    description:
      'Structured, beginner-accessible course material — one new concept per lesson, built for real classroom use.',
    icon: 'FaChalkboardTeacher',
  },
  {
    id: 'code-review',
    title: 'Code Review & Mentorship',
    description:
      'Hands-on review and pairing for teams and individual engineers working through unfamiliar parts of the stack.',
    icon: 'FaCode',
  },
];
