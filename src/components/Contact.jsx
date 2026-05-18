import React, { useMemo, useState } from "react";
import emailjs from "emailjs-com";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailJsConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }),
    []
  );

  const fallbackRecipient = import.meta.env.VITE_CONTACT_EMAIL || "";
  const isEmailJsConfigured = Object.values(emailJsConfig).every(Boolean);
  const canSubmit = isEmailJsConfigured || Boolean(fallbackRecipient);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const sendWithFallbackEmail = () => {
    const params = new URLSearchParams({
      subject: formData.subject,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    });

    window.location.href = `mailto:${fallbackRecipient}?${params.toString()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isEmailJsConfigured) {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          formData,
          emailJsConfig.publicKey
        );
      } else if (fallbackRecipient) {
        sendWithFallbackEmail();
      } else {
        throw new Error("Contact form is not configured.");
      }

      setSubmitted(true);
      resetForm();
    } catch {
      setError(
        "Contact form is not configured yet or failed to send. Add EmailJS keys or VITE_CONTACT_EMAIL."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Contact" id="contact">
      <div className="contactContainer">
        <h2 className="contactTitle">Get In Touch</h2>
        <p className="contactSubtitle">Have a question or project in mind?</p>

        {!canSubmit && !error && (
          <p className="contactError">
            Contact is currently disabled. Add EmailJS keys or set `VITE_CONTACT_EMAIL`.
          </p>
        )}
        {submitted && <p className="contactSuccess">Message sent successfully.</p>}
        {error && <p className="contactError">{error}</p>}

        <form onSubmit={handleSubmit} className="contactForm">
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

          <button type="submit" className="contactButton" disabled={loading || !canSubmit}>
            {loading ? "Sending..." : canSubmit ? "Send Message" : "Contact Unavailable"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
