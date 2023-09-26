import "./App.scss";
import Header from "./components/header/Header";
import AboutUs from "./components/about_us/AboutUs";
import Offers from "./components/offers/Offers";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./components/header/Header.scss";
import "./components/offers/Offers.scss";
import "./components/about_us/AboutUs.scss";
import "./components/contact/Contact.scss";
import "./components/footer/Footer.scss";
import "./height";
import "./index.scss";

const App = () => {
  return (
    <div className="all-website">
      <Header />
      <AboutUs />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
