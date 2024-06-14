import React from "react";
import waterfall from "../Images/waterfall.jpeg";
import elpasoMountains from "../Images/el-paso.jpg";
import utepCentenial from "../Images/SBD_6309_HDR.jpg";
import mePicture from "../Images/5613C7C5-6CC9-48CE-B2B3-E96C7FE82DC8_1_105_c.jpeg";
import utepSign from "../Images/utep.jpg";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-section">
        <img src={waterfall} className="about-me-background"></img>
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
        <div class="panel-image-container-portrait">
          <img src={mePicture} class="panel-image"></img>
        </div>
      </div>
      <div className="about-me-section">
        <img src={elpasoMountains} className="about-me-background"></img>
        <div className="overlay"></div>

        <div class="panel-image-container-landscape">
          <img src={elpasoMountains} class="panel-image"></img>
        </div>
        <div className="about-me-text-container">
          <div className="text">
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
      <div className="about-me-section">
        <img src={utepCentenial} className="about-me-background"></img>
        <div className="overlay"></div>
        <div className="about-me-text-container">
          <div className="text">
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
        <div class="panel-image-container-landscape">
          <img src={utepSign} class="panel-image"></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
