import React, { useState } from "react";
import data from "../data/projectData.json";
import Project from "./Project";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = Object.keys(data.projects);

  const openProject = (projectName) => {
    setSelectedProject(projectName);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const openNextProject = () => {
    if (!selectedProject) return;

    const currentIndex = projects.indexOf(selectedProject);
    console.log("current", currentIndex);
    const nextIndex = (currentIndex + 1) % projects.length;
    console.log("next", nextIndex);
    setSelectedProject(projects[nextIndex]);
  };

  const openPreviousProject = () => {
    if (!selectedProject) return;

    const currentIndex = projects.indexOf(selectedProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className={`project-container ${selectedProject ? "selected" : ""}`}>
        {projects.map((projectKey) => (
          <Project
            key={projectKey}
            className={`box ${projectKey} ${
              selectedProject === projectKey ? "expanded" : ""
            }`}
            onMouseEnter={() => setHoveredProject(projectKey)}
            hoveredProject={hoveredProject}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => openProject(projectKey)}
            data={data.projects[projectKey]}
            isSelected={selectedProject === projectKey}
            onClose={closeProject}
            onNext={openNextProject}
            onPrevious={openPreviousProject}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
