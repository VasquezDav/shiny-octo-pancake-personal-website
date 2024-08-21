import React from "react";
import { Document, Page } from "react-pdf";
// import myResume from "../Images/Resume.pdf";

function Resume() {
  return (
    <div className="resume" id="resume">
      <h1>Resume</h1>
      <iframe
        src="/shiny-octo-pancake-personal-website//myResume.pdf"
        title="PDF Viewer"
      />
    </div>
  );
}

export default Resume;
