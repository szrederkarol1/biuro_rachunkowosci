import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = ({ Component, pageProps }) => {
  const [state, handleSubmit] = useForm("myyqzjvd");
  if (state.succeeded) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
        }}
      >
        <p style={{ fontSize: "36px", textAlign: "center" }}>
          Dziękujemy za wypełnienie formularza!
          <br></br>
          Dołożymy wszelkich starań abyś dostał odpowiedź jak najszybciej!
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="contact-content">
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="form">
            <div className="email-container">
              <label htmlFor="email" alt="Twój adres e-mail">
                Twój Adres e-mail
              </label>
              <input
                type="email"
                className="email-input"
                placeholder="email@email.com"
                name="email"
                id="email"
              ></input>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="message-container">
              <label htmlFor="message" alt="Wiadomość">
                Wiadomość
              </label>
              <textarea id="message" name="message"></textarea>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="btn-form"
              disabled={state.submitting}
            >
              Wyślij
            </button>
          </form>
          <div className="contact-details">
            <h2>Skontaktuj się z nami</h2>
            <div className="details">
              <div className="adress">
                <h6>Adres</h6>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgba(33, 33, 33, 0.75)",
                  }}
                  href="https://www.google.com/maps?q=84-215 Gowino ul. Cicha 13/1"
                >
                  84-215 Gowino ul. Cicha 13/1
                </a>
              </div>
              <div className="email">
                <h6 style={{ width: "170px" }}>Adres e-mail</h6>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgba(33, 33, 33, 0.75)",
                  }}
                  href="mailto:biuro@rachunkowosckms.pl"
                >
                  biuro@rachunkowosckms.pl
                </a>
              </div>
              <div className="number">
                <h6>Nr telefonu</h6>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgba(33, 33, 33, 0.75)",
                  }}
                  href="tel:+48669753700"
                >
                  +48669753700
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
