import React, { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="right-contact">
      <form onSubmit={handleClick}>
        <div className="form">
          <label htmlFor="name">
            Imię
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className="form">
          <label htmlFor="email">
            E-mail
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className="form">
          <label htmlFor="message">
            Twoja wiadomość
            <br />
            <textarea
              name="message"
              id="message"
              value={message}
              type="text"
              onChange={(e) => setMessage(e.target.value)}></textarea>
          </label>
        </div>
        <button className="btn-contact">Wyślij</button>
      </form>
    </div>
  );
};
export default ContactForm;
