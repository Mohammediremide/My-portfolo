// ============================================================
// components/Testimonials/Testimonials.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// Social proof in other people's words. Built as a simple
// one-at-a-time carousel rather than a grid, so each quote gets
// full attention instead of competing for space with the others.
// ============================================================

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials.js';
import './Testimonials.css';

function Testimonials() {
  // Index of the currently displayed testimonial. Local state
  // because nothing outside this section cares which quote is
  // showing.
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () =>
    setActiveIndex((current) => (current + 1) % testimonials.length);

  const goPrev = () =>
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">006 / Testimonials</span>
          <h2 className="section-heading">In their words.</h2>
        </div>

        <div className="testimonial-carousel">
          <FaQuoteLeft className="testimonial-quote-icon" aria-hidden="true" />

          {/* AnimatePresence + key=current.id cross-fades between
              quotes instead of swapping text instantly. */}
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="testimonial-quote"
            >
              <p>{current.quote}</p>
              <footer>
                <span className="testimonial-name">{current.name}</span>
                <span className="testimonial-role">{current.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="testimonial-controls">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <div className="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`testimonial-dot ${
                    index === activeIndex ? 'active' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={goNext} aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
