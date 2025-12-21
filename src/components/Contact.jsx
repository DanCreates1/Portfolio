import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // honeypot
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // 🪤 Honeypot check (bots fill this)
    if (formData.company) {
      return;
    }

    // ⏱️ Client-side rate limit (1 msg / min)
    const lastSent = localStorage.getItem('lastEmailSent');
    if (lastSent && Date.now() - Number(lastSent) < 60_000) {
      setError('Please wait a minute before sending another message.');
      return;
    }

    // 🧼 Basic validation
    if (formData.message.length > 1000) {
      setError('Message is too long.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        localStorage.setItem('lastEmailSent', Date.now());

        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
        });

        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => {
        setError('Something went wrong. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="Contact">
      <div className="contactContainer">
        <h2 className="contactTitle">Get In Touch</h2>
        <p className="contactSubtitle">
          Have a question or a project in mind?
        </p>

        {submitted && (
          <p className="contactSuccess">
            Message sent successfully.
          </p>
        )}

        {error && (
          <p className="contactError">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="contactForm">
          {/* Honeypot field */}
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contactInput"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contactInput"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="contactInput"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="contactTextarea"
          />

          <button
            type="submit"
            className="contactButton"
            disabled={loading}
          >
            {loading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
