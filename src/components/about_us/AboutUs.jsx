import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="section-aboutUs">
        <div className="aboutUs-content">
          <div className="company-description">
            <div className="company-description-title">O nas</div>
            <div className="company-description-paragraphs">
              <div className="logobox">
                <div className="logo"></div>
              </div>
              <div className="pclass">
                <p className="description">
                  Biuro rachunkowe KMS zlokalizowane jest w Wejherowie.
                  Świadczymy tradycyjne usługi księgowe na terenie Wejherowa i
                  okolic oraz usługi internetowego biura rachunkowego na terenie
                  całej Polski. Zapewniamy profesjonalną i kompleksową obsługę
                  księgową w zakresie ryczałtu, kpir oraz pełnych ksiąg.
                </p>
                <p className="description">
                  Nasz zespół tworzą specjaliści z bogatym doświadczeniem. Naszą
                  pracę cechuje rzetelność wykonywanych zadań, wieloletnie
                  doświadczenie w pracy z klientami biznesowymi i
                  indywidualnymi, odpowiedzialne podejście do powierzonych
                  obowiązków. Posiadamy ubezpieczenie firmy od odpowiedzialności
                  cywilnej, zapewniamy poufność oraz bezpieczeństwo
                  przechowywania informacji.
                </p>
                <p className="description">
                  Dzięki skorzystaniu z usług naszego biura rachunkowego możecie
                  Państwo w pełni skoncentrować się na rozwijaniu firmy, a
                  sprawy księgowe pozostawić w naszych rękach zyskując gwarancję
                  i pewność prawidłowo prowadzonej księgowości.
                </p>
                <p className="company-signature">
                  Zapraszamy do współpracy<br></br> Zespół KMS
                </p>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="image image-first"></div>
            <div className="image image-secondary"></div>
            <div className="image image-thirth"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
