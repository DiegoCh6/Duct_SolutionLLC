import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import AboutUS from "./components/AboutUS";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

// Simplified App component with default system cursor (custom cursor removed)
const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <OurWork />
      <AboutUS />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
