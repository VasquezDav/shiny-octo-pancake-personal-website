import React from "react";


import data from "../data/about-me-data.json";
function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-section">
      <div className="about-me-background">
          <img
            src={data.aboutme.backgroundImage}
            className="pan-image"
          ></img>
          <img
            src={data.aboutme.backgroundImage}
            className="pan-image"
          ></img>
        </div>
        <div className="overlay"></div>
        <div className="about-me-text-container">
          <div className="text">
            <h1>About Me</h1>
            <p>{data.aboutme.description} </p>
          </div>
        </div>
        <div class="panel-image-container-portrait">
          <img src={data.aboutme.mainImage} class="panel-image"></img>
        </div>
      </div>
      <div className="about-me-section">
        <div className="about-me-background faster">
          <img
            src={data.background.backgroundImage}
            className="pan-image"
          ></img>
          <img
            src={data.background.backgroundImage}
            className="pan-image"
          ></img>
        </div>
        <div className="overlay"></div>

        <div class="panel-image-container-landscape">
          <img src={data.background.backgroundImage} class="panel-image"></img>
        </div>
        <div className="about-me-text-container">
          <div className="text">
            <p>{data.background.description}</p>
          </div>
        </div>
      </div>
      <div className="about-me-section">
        <div className="about-me-background">
          <img src={data.values.backgroundImage} className="pan-image"></img>
          <img src={data.values.backgroundImage} className="pan-image"></img>
        </div>
        <div className="overlay"></div>
        <div className="about-me-text-container">
          <div className="text">
            <p>{data.values.description}</p>
          </div>
        </div>
        <div class="panel-image-container-landscape">
          <img src={data.values.mainImage} class="panel-image"></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
