import { useState } from "react";
import Customers from "./components/Customers";
import DevApi from "./components/DevApi";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <DevApi />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
