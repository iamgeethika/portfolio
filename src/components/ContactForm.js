import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './ContactForm.css';
import manali from '../images/manali.jpeg';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Implement backend logic or EmailJS integration here
    };

    return (
        <div className="contact-section">
            {/* Title Section */}
            <div className="contact-title-section">
                <h1 className={`main-title ${mounted ? 'visible' : ''}`}>
                    Let's Build Something 
                    <span className="gradient-text"> Amazing Together</span>
                </h1>
                <p className={`subtitle ${mounted ? 'visible' : ''}`}>
                    Ready to turn ideas into reality? I'm excited to collaborate on your next project.
                </p>
            </div>

            {/* Contact Card */}
            <div className="pink-contact-container">
                <div className="contact-content">
                    <div className="contact-left">
                        <h1 style={{ color: "#FF004F" }} className={`slide-in ${mounted ? 'visible' : ''}`}>
                            Get in Touch
                        </h1>
                        <p className={`fade-in ${mounted ? 'visible' : ''}`}>
                            I'm always open to new ideas, opportunities, or a friendly chat.
                            Drop a message — I'd love to hear from you!
                        </p>

                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/thota-geethika/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <FaLinkedin size={30} color="#0077b5" />
                            </a>
                            <a
                                href="mailto:thotageethika12@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <SiGmail size={30} color="#D44638" />
                            </a>
                            <a
                                href="https://www.instagram.com/geethu_613/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <FaInstagram size={30} color="#E4405F" />
                            </a>
                            <a
                                href="https://github.com/iamgeethika"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <FaGithub size={30} color="#000000" />
                            </a>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                />
                                <span className="input-highlight"></span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                />
                                <span className="input-highlight"></span>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                ></textarea>
                                <span className="input-highlight"></span>
                            </div>
                            <button type="submit" className="btn submit-btn">
                                <span>Send Message</span>
                                <div className="liquid"></div>
                            </button>
                        </form>
                    </div>

                    <div className="contact-right floating">
                        <img
                            src={manali}
                            alt="Contact Illustration"
                            className="contact-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;