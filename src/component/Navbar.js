import React, { useState, useEffect } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isCross, setIsCross] = useState(false);

  const ontoggle = () => {
    setNavbarOpen(!navbarOpen);
    setIsCross(!isCross);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    ontoggle();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Nikhil Shinde</h2>
      </div>
      <div className="links">
      <a className="nav-link" href="#homeSection" onClick={() => scrollToSection('homeSection')} >Home</a>
        <a className="nav-link" href="#aboutSection" onClick={() => scrollToSection('aboutSection')} >About</a>
        <a className="nav-link" href="#skillsSection" onClick={() => scrollToSection('skillsSection')}>Skills</a>
        <a className="nav-link" href="#portfolioSection" onClick={() => scrollToSection('portfolioSection')}>Portfolio</a>
        <a className="nav-link" href="#contactSection" onClick={() => scrollToSection('contactSection')}>Contact</a>
        {/* Add more navigation items as needed */}
      </div>
      <>
        <div
          className={`menu-toggle ${isCross ? "cross" : ""}`}
          id="mobile-menu"
          onClick={ontoggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`hanburger-menu ${navbarOpen ? "show" : ""}`}>
        <a className="nav-link" href="#homeSection" onClick={() => scrollToSection('homeSection')} >Home</a>
        <a className="nav-link" href="#aboutSection" onClick={() => scrollToSection('aboutSection')} >About</a>
        <a className="nav-link" href="#skillsSection" onClick={() => scrollToSection('skillsSection')}>Skills</a>
        <a className="nav-link" href="#portfolioSection" onClick={() => scrollToSection('portfolioSection')}>Portfolio</a>
        <a className="nav-link" href="#contactSection" onClick={() => scrollToSection('contactSection')}>Contact</a>
          {/* Add more navigation items as needed */}
        </div>
      </>
    </nav>
  );
}

export default Navbar;
