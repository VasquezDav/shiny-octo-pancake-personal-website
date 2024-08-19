import React, { useEffect, useRef, useState } from "react";

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const containerRef = useRef(null);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setIsZoomed(false);
  };
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    if (containerRef.current) {
      const selectedThumbnail = containerRef.current.querySelector(
        ".thumbnail.selected"
      );
      if (selectedThumbnail) {
        selectedThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest", // Ensure it doesn't scroll vertically
          inline: "center", // Center the thumbnail horizontally
        });
      }
    }
  }, [currentIndex]);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={toggleFullScreen}>
          <img
            src={images[currentIndex].heading}
            alt="Full-Screen View"
            className={`fullscreen-image ${isZoomed ? "zoomed" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent the full-screen toggle on image click
              toggleZoom();
            }}
          />
        </div>
      )}
      <div className="imageWrapper">
        <div className="image-container">
          <img
            src={images[currentIndex].heading}
            alt={`Slide ${currentIndex}`}
            className="image"
            onClick={toggleFullScreen}
          />
        </div>

        <div className="image-description">
          <p className="description">
            {images[currentIndex]["img-description"]}
          </p>
        </div>
      </div>

      <div className="image-selection">
        <button onClick={goToPrevious} className="prev-button"></button>
        <div className="thumbnailContainer" ref={containerRef}>
          {" "}
          {images.map((image, index) => (
            <img
              key={index}
              src={image.heading}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                index === currentIndex ? "selected" : ""
              }`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
        <button onClick={goToNext} className="next-button"></button>
      </div>
    </div>
  );
};

export default ImageGallery;
