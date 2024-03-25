import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mid from "./components/Mid";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div id="navbar"><Navbar /></div>
      <div id="hero"><Hero /></div>
      <div id="mid"><Mid /></div>
      <div id="projects"><Cards /></div>
      <div id="contact"><Footer /></div>
    </div>
  );
}

export default App;
