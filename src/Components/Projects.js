import React, { useState } from "react";
import data from "../data/pageData.json";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const openProject = (projectName) => {

  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        {/* Jamz */}
        <div
          className="box spotify-journal "
          onMouseEnter={() => setHoveredProject("jamz")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject("jamz")}
        >
          {hoveredProject === "jamz" ? (
            <div className="project-info">
              <div className="title-box">
                <h3>Spotify Journal Application</h3>
              </div>
              <p>{data.projects.jamz.description}</p>
              <button className="learn-more">Learn More--{">"}</button>
            </div>
          ) : null}
          <div className="logo"></div>
        </div>

        {/* ARCANA */}
        <div
          className="box arcana"
          onMouseEnter={() => setHoveredProject("arcana")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject("arcana")}
        >
          {hoveredProject === "arcana" ? (
            <div className="project-info">
              <div className="title-box">
                <h3>{data.projects.arcana.title}</h3>
              </div>
              <p>{data.projects.jamz.description}</p>
              <button className="learn-more">Learn More--{">"}</button>
            </div>
          ) : null}

          <div className="logo"></div>
        </div>

        {/* UWC */}
        <div
          className="box uwc-queue"
          onMouseEnter={() => setHoveredProject("uwc")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject("uwc")}
        >
          {hoveredProject === "uwc" ? (
            <div className="project-info">
              <div className="title-box">
                <h3>{data.projects.uwc.title}</h3>
              </div>
              <p>{data.projects.jamz.description}</p>
              <button className="learn-more">Learn More--{">"}</button>
            </div>
          ) : null}
          <div className="logo"></div>
        </div>

        {/* Fithub */}
        <div
          className="box fithub "
          onMouseEnter={() => setHoveredProject("fithub")}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => setSelectedProject("fithub")}
        >
          {hoveredProject === "fithub" ? (
            <div className="project-info">
              <div className="title-box">
                <h3>{data.projects.fithub.title}</h3>
              </div>
              <p>{data.projects.jamz.description}</p>
              <button className="learn-more">Learn More--{">"}</button>
            </div>
          ) : null}
          <div className="logo"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
