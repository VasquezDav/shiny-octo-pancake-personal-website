import React, { useState, useEffect } from "react";

function Header() {
  const [selected, setSelected] = useState("");

  const handleSelect = (section) => {
    setSelected(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Get the positions of the sections
      const aboutMeSection = document.getElementById("about-me").offsetTop;
      const projectsSection = document.getElementById("projects").offsetTop;
      const resumeSection = document.getElementById("resume").offsetTop;
      const contactMeSection = document.getElementById("contact-me").offsetTop;

      // Determine which section is currently in view
      if (
        scrollPosition >= aboutMeSection &&
        scrollPosition < projectsSection
      ) {
        setSelected("about-me");
      } else if (
        scrollPosition >= projectsSection &&
        scrollPosition < resumeSection
      ) {
        setSelected("projects");
      } else if (
        scrollPosition >= resumeSection &&
        scrollPosition < contactMeSection
      ) {
        setSelected("resume");
      } else if (scrollPosition >= contactMeSection) {
        setSelected("contact-me");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <h2>David A. Vasquez</h2>
      <div className="header-button-container">
        <a href="#about-me">
          <button
            className={selected === "about-me" ? "selected" : ""}
            onClick={() => handleSelect("about-me")}
          >
            About Me
          </button>
        </a>
        <a href="#projects">
          <button
            className={selected === "projects" ? "selected" : ""}
            onClick={() => handleSelect("projects")}
          >
            Projects
          </button>
        </a>
        <a href="#resume">
          <button
            className={selected === "resume" ? "selected" : ""}
            onClick={() => handleSelect("resume")}
          >
            Resume
          </button>
        </a>
        <a href="#contact-me">
          <button
            className={selected === "contact-me" ? "selected" : ""}
            onClick={() => handleSelect("contact-me")}
          >
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
