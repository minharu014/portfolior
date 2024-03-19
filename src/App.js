import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mid from "./components/Mid";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mid />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
