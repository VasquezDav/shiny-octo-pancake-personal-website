import React, { useState } from "react";

function Projects() {

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="box spotify-journal">
          <div className="title-box">
            <span>Spotify Journal Application</span>
          </div>
          <div className="logo"></div>
        </div>
        <div className="box arcana">
          <div className="title-box">
            <span>
              Advanced Resiliency Chronicling for Analysis in Network
              Assessments
            </span>
          </div>
          <div className="logo"></div>
        </div>
        <div className="box uwc-queue">
          <div className="title-box">
            <span>The University of Texas at El Paso Writing Center Queue App</span>
          </div>
          <div className="logo"></div>
        </div>
        <div className="box fithub">
          <div className="title-box"><span>Personal Fitness Web-App</span></div>
          <div className="logo"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
