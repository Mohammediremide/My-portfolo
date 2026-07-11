// ============================================================
// App.jsx
// ------------------------------------------------------------
// WHY THIS FILE EXISTS:
// App is the top-level layout component. Its only responsibility
// is composition — deciding WHAT sections exist and in WHAT
// order, not HOW any of them work internally. Each import below
// is a self-contained component that manages its own markup,
// styles, and local state. This keeps App.jsx readable even as
// the site grows: you can see the entire page structure in one
// glance without scrolling through implementation details.
// ============================================================

// Global, page-level UI — these aren't "sections" of content,
// they're persistent chrome that sits above or alongside the
// page (a loading screen, a cursor effect, a progress bar, a
// scroll-to-top button).
import Loader from './components/Loader/Loader.jsx';
import Cursor from './components/Cursor/Cursor.jsx';
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

// Content sections, in the order they appear on the page. Each
// one is its own folder under components/ with its own JSX and
// CSS file, so a change to (say) Projects never risks breaking
// Skills.
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Stats from './components/Stats/Stats.jsx';
import Skills from './components/Skills/Skills.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';

import './App.css';

function App() {
  // App itself holds no state. Every section that needs state
  // (the active project filter, the contact form values, the
  // mobile nav open/closed flag) owns that state internally,
  // because no sibling section ever needs to read or change it.
  // Lifting state up to App would only be justified if two
  // sections needed to share it — none currently do.
  return (
    <>
      {/* Loader renders on top of everything during initial load,
          then unmounts itself once assets are ready — handled
          inside the Loader component via its own effect. */}
      <Loader />

      {/* Cursor and ScrollProgress are fixed-position overlays
          that live outside the normal document flow, so they're
          declared once here rather than inside individual
          sections. */}
      <Cursor />
      <ScrollProgress />

      <Navbar />

      {/* <main> is the semantic landmark screen readers use to
          skip straight to page content, bypassing the nav. */}
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
