import React from "react";

const Offers = () => {
  return (
    <>
      <header className="heading-content">
        <h1 className="title-offers">Usługi Księgowe KMS</h1>
        <p className="incentive">
          Z nami Twoje finanse będą bezpieczne i opłacalne. Skorzystaj z naszych
          usług księgowych już dziś!
        </p>
      </header>
      <div className="ornament"></div>
      <section className="services">
        <div className="service">
          <h2 className="destiny">Księgowość Dla Firm</h2>
          <ul className="list">
            <li className="list-item">
              Pomoc przy zakładaniu oraz likwidacji działalności gospodarczej
            </li>
            <li className="list-item">Prowadzenie ksiąg handlowych</li>
            <li className="list-item">Książki przychodów i rozchodów</li>
            <li className="list-item">Ryczałt</li>
            <li className="list-item">Rozliczenia kadrowe i płace</li>
            <li className="list-item">Deklaracja PIT, VAT, ZUS</li>
            <li className="list-item">Rozliczenia podatkowe</li>
            <li className="list-item">Planowanie finansowe</li>
            <li className="list-item">Doradztwo podatkowe</li>
            <li className="list-item">Analizy i raporty</li>
          </ul>
        </div>
        <div className="service service-secondary">
          <h2 className="destiny">Księgowość Dla Osób Prywatnych</h2>
          <ul className="list">
            <li className="list-item">Doradztwo podatkowe</li>
            <li className="list-item">Konsultacje podatkowe</li>
            <li className="list-item">Rozliczenia podatkowe</li>
            <li className="list-item">Zarządzanie finansami osobistymi</li>
          </ul>
        </div>
      </section>
      <div className="ornament"></div>
    </>
  );
};

export default Offers;
