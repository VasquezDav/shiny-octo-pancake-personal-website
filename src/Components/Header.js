import React from "react";

function Header() {
  return (
    <div className="header">
      <h2>David A. Vasquez</h2>
      <div className="header-button-container">
        <button>About Me</button>
        <button>Projects</button>
        <button>Resume</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Header;
