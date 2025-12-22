import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
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
                    Have a question or project in mind?
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
