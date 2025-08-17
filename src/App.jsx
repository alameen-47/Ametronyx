import { useState } from "react";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
