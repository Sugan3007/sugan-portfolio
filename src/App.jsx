import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/01_Hero/Hero";
import About from "./components/sections/02_About/About";
import Services from "./components/sections/03_Services/Services";
import Skills from "./components/sections/04_Skills/Skills";
import Projects from "./components/sections/05_Projects/Projects";
import Achievements from "./components/sections/06_Achievements/Achievements";
import Certifications from "./components/sections/07_Certifications/Certifications";
import Contact from "./components/sections/08_Contact/Contact";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;