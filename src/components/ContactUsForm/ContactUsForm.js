import React, { useState } from "react";
import './ContactUsForm.css';

export default function ContactUsForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()

    const contactUsFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="ContactUsForm">
            <form className="ContactUsForm-wrapper" onSubmit={contactUsFormSubmit}>
                <div className="ContactUsForm-name-email-wrapper">
                    <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <input
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={8}
                    maxLength={1000}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button className="ContactUsForm-submit-button" type="submit">Send message</button>
            </form>
        </div>
    );
}