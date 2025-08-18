import { useState } from "react";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black h-screen w-full">
        <Navbar />
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
