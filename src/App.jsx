import { useState } from "react";
import "./index.css";
import "./App.css";
import { Navbar } from "./sections/Navbar.jsx";
import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Products } from "./sections/Products.jsx";
import { WhyChooseUs } from "./components/WhyChooseUs.jsx";
import BigText from "./components/BigText.jsx";
import { Toaster } from "react-hot-toast";
import { RevealAnimation } from "./components/RevealAnimation.jsx";

function App() {
  return (
    <>
      <div className="bg-black  snap-y snap-mandatory scroll-smooth ">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <RevealAnimation>
          <section id="home" className="snap-start flex">
            <Hero />
          </section>
        </RevealAnimation>
        <RevealAnimation>
          <section id="products" className="snap-start flex">
            <Products />
          </section>
        </RevealAnimation>
        <WhyChooseUs />
        <BigText text="AMETRONYX">
          <RevealAnimation>
            <section
              id="about"
              className="snap-start flex justify-center align-middle items-center m-auto"
            >
              <About />
            </section>
          </RevealAnimation>
          <RevealAnimation>
            <section
              id="contact"
              className="snap-start flex justify-center align-middle items-center m-auto"
            >
              <Contact />
            </section>
          </RevealAnimation>
        </BigText>
      </div>
    </>
  );
}

export default App;
