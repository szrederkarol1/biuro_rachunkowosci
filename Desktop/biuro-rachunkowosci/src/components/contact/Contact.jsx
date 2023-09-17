import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-content">
        <div className="contact-container">
          <div className="form">
            <div className="email-container">
              <label htmlFor="email">Twój Adres e-mail</label>
              <input
                type="email"
                className="email-input"
                placeholder="email@email.com"
              ></input>
            </div>
            <div className="message-container">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message"></textarea>
            </div>
            <button className="btn-form">Wyślij</button>
          </div>
          <div className="contact-details">
            <h2>Skontaktuj się z nami</h2>
            <div className="details">
              <div className="adress">
                <h6>Adres</h6>
                <p>84-215 Gowino ul. Cicha 13/1</p>
              </div>
              <div className="email">
                <h6>Adres e-mail</h6>
                <p>biuro@rachunkowosckms.pl</p>
              </div>
              <div className="number">
                <h6>Nr telefonu</h6>
                <p>+48 669 753 700</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
