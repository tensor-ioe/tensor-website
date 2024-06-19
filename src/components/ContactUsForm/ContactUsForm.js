import React, { useState, useRef } from "react";
import "./ContactUsForm.css";
import emailjs from "@emailjs/browser";

export default function ContactUsForm() {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const contactUsFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="ContactUsForm">
      <form
        ref={form}
        className="ContactUsForm-wrapper"
        onSubmit={contactUsFormSubmit}
      >
        <div className="ContactUsForm-name-email-wrapper">
          <input
            name="user_name"
            id="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            name="user_email"
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
        <button className="ContactUsForm-submit-button" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
}
