import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";

import "./Navbar.css";
import navLinks from "./navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}

        <a href="#home" className="logo">
          YS
        </a>

        {/* Navigation */}

        <nav className="nav-center">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={index === 0 ? "active" : ""}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume */}
<div className="nav-right">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    <span>Resume</span>
    <Download size={16} strokeWidth={2} />
  </a>
</div>
      </div>
    </header>
  );
}