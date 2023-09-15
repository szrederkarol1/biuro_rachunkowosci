import "./App.scss";
import Header from "./components/header/Header";
import AboutUs from "./components/about_us/AboutUs";
import Offers from "./components/offers/Offers";
import "./components/header/Header.scss";
import "./components/offers/Offers.scss";
import "./components/about_us/AboutUs.scss";
import "./height";

const App = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <Offers />
    </div>
  );
};

export default App;
