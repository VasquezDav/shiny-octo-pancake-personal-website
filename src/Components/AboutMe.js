import React from "react";
import waterfall from "../Images/waterfall.jpeg";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div
       className="about-me-image">
        <img src={waterfall}></img>
        <div className="overlay"></div>
        <div className="about-me-text-container">
          <div className="text">
            <h1>About Me</h1>
            <p>
              Personal Background Greetings! I'm thrilled to welcome you to my
              corner of the internet. Before we delve into the technical
              details, let me share a bit about who I am and what drives me in
              my journey as a software engineer. Accessibility and inclusivity
              are not just buzzwords for me; they're principles I actively
              incorporate
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default AboutMe;
