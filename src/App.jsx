import { useState } from "react";
import "./index.css";
import "./App.css";
import { Navbar } from "./sections/Navbar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Products } from "./sections/Products.jsx";

function App() {
  return (
    <>
      <div className="bg-black ">
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
