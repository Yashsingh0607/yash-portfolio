import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/Extras/ScrollProgress";
import Marquee from "./components/Extras/Marquee";
import CommandPalette from "./components/Extras/CommandPalette";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
