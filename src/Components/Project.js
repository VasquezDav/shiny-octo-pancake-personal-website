import React from "react";
import utep from "../Images/CB_UTEP-6457-e1633559395129.webp";
import ImageGallery from "./ImageGallery";
function Project(props) {
  const data = props.data;

  const handleNext = (e) => {
    e.stopPropagation();
    props.onNext();
  };
  const handlePrevious = (e) => {
    e.stopPropagation();
    props.onPrevious();
  };
  const handleClose = (e) => {
    e.stopPropagation();
    props.onClose();
  };

  return (
    <div
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <div className="logo"></div>
      {props.hoveredProject === data.projectName && !props.isSelected ? (
        <div className="project-info">
          <div className="title-box">
            <h3>{data.title}</h3>
          </div>
          <div className="project-description">
            <p>{data.description}</p>
          </div>
        </div>
      ) : null}
      {props.isSelected && (
        <>
          <div className="selected-container">
            <div className="information descriptions">
              <div className="left-section">
                <div className="description">
                  <h3>Description</h3>
                  <p>
                    Inspiration: What fuels my passion for software engineering?
                    It's the prospect of making a tangible difference in
                    people's lives. Whether it's simplifying everyday tasks.
                  </p>
                </div>
                <div className="background-info">
                  <h3>Background</h3>
                  <p>
                    Inspiration: What fuels my passion for software engineering?
                    It's the prospect of making a tangible difference in
                    people's lives. Whether it's simplifying everyday tasks.
                  </p>
                </div>
              </div>
              <div className="right-section">
                <div className="purpose">
                  <h3>Purpose</h3>
                  <p>
                    Inspiration: What fuels my passion for software engineering?
                    It's the prospect of making a tangible difference in
                    people's lives. Whether it's simplifying everyday tasks.
                    What fuels my passion for software engineering? It's the
                    prospect of making a tangible difference in people's lives.
                    Whether it's simplifying everyday tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="information images">
              <ImageGallery images={data.images} />
            </div>

            <button className="close-project" onClick={handleClose}></button>
            <button className="next-button" onClick={handleNext}></button>
            <button className="prev-button" onClick={handlePrevious}></button>
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
