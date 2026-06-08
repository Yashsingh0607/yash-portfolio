import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;