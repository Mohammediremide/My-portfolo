// ============================================================
// components/Contact/Contact.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// The conversion point of the whole page. It owns three pieces
// of state: the form's field values, validation errors, and the
// submission status (idle/sending/success/error) — all local,
// since nothing else on the page needs to read or react to them.
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

// EmailJS account identifiers. These are public-facing IDs (not
// secrets — EmailJS is designed to be called from the browser),
// but they're still pulled out as named constants rather than
// inlined, so swapping accounts later is a one-line change.
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

// The form's initial/reset shape, defined once so both the
// initial useState call and the post-submit reset use the exact
// same object structure.
const INITIAL_FORM = { name: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  // status drives which UI state renders: 'idle' | 'sending' |
  // 'success' | 'error'. A single string is simpler here than
  // multiple booleans (isSending, isSuccess, isError) that could
  // otherwise contradict each other.
  const [status, setStatus] = useState('idle');

  // A single handler for every field, keyed off the input's
  // `name` attribute — this is why each <input> below has a
  // `name` matching a key in formData, instead of writing three
  // near-identical handlers.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Pure validation function: takes the current form data, returns
  // an errors object. Kept separate from handleSubmit so it could
  // be unit-tested independently if needed.
  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Name is required.';
    if (!data.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!data.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    // Prevent the browser's native form submission, which would
    // cause a full page reload — we're handling this with
    // JavaScript and EmailJS instead.
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    // Stop here if validation failed — don't attempt to send.
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch (error) {
      // Logged for debugging; the visitor just sees the error
      // state in the UI rather than a raw error object.
      console.error('EmailJS send failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="section-header">
          <span className="section-eyebrow">007 / Contact</span>
          <h2 className="section-heading">Let's build something.</h2>
          <p className="section-subheading">
            Have a project, a role, or a question about a lesson? Send a
            message and I'll get back to you.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              className="contact-success glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FaCheckCircle className="contact-success-icon" />
              <h3>Message sent.</h3>
              <p>Thanks for reaching out — I'll reply as soon as I can.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error">
                    {errors.message}
                  </span>
                )}
              </div>

              {status === 'error' && (
                <p className="form-error form-error-banner">
                  Something went wrong sending your message. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                <FaPaperPlane />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
