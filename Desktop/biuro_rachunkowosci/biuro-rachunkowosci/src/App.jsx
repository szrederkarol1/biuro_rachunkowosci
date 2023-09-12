import "./App.scss";
import Header from "./components/header/Header";
import "./components/header/Header.scss";
import "./height";
import AboutUs from "./components/about_us/AboutUs";
import "./components/about_us/AboutUs.scss";

const App = () => {
  return (
    <div>
      <Header />
      <AboutUs />
    </div>
  );
};

export default App;
