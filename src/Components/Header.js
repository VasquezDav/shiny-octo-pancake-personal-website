import React, { useState, useEffect } from "react";

function Header() {
  const [selected, setSelected] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  const handleSelect = (section) => {
    const offset = 100;
    const targetElement = document.getElementById(section);
    const targetPosition = targetElement.offsetTop - offset;

    setIsScrolling(true); 
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });


    setTimeout(() => {
      setIsScrolling(false);
      setSelected(section);
    }, 1000); 

    setSelected(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const offset = 100;

      const aboutMeSection =
        document.getElementById("about-me").offsetTop - offset;
      const projectsSection =
        document.getElementById("projects").offsetTop - offset;
      const resumeSection =
        document.getElementById("resume").offsetTop - offset;
      const contactMeSection =
        document.getElementById("contact-me").offsetTop - offset;

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
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setSelected("contact-me");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]); 
  return (
    <div className="header">
      <h2>David A. Vasquez</h2>
      <div className="header-button-container">
        <button
          className={selected === "about-me" ? "selected" : ""}
          onClick={() => handleSelect("about-me")}
        >
          About Me
        </button>
        <button
          className={selected === "projects" ? "selected" : ""}
          onClick={() => handleSelect("projects")}
        >
          Projects
        </button>
        <button
          className={selected === "resume" ? "selected" : ""}
          onClick={() => handleSelect("resume")}
        >
          Resume
        </button>
        <button
          className={selected === "contact-me" ? "selected" : ""}
          onClick={() => handleSelect("contact-me")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Header;
