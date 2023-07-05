import React, { useState, useRef, useEffect } from "react";

import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";
import AClassSedan from "../../../Images/BENZ/A-Class-Sedan/A-Class-SEDAN-Video-use.mp4";

const FirstSlide = () => {
  const [isplay, setIsplay] = useState(false);

  const videoRef = useRef();
  const containerRef = useRef();

  const handlePlay = () => {
    if (!isplay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsplay((currentplaying) => !currentplaying);
  };

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const container = containerRef.current;

  //   const handleScroll = () => {
  //     const { top, bottom, left, right } = container.getBoundingClientRect();

  //     // Pause the video if it's not visible on both the x and y axis
  //     if (
  //       bottom < 0 ||
  //       top > window.innerHeight ||
  //       left > window.innerWidth ||
  //       right < 0
  //     ) {
  //       video.pause();
  //     } else {
  //       video.play();
  //     }
  //   };

  //   // Add a scroll listener to the window to detect when the user scrolls
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the scroll listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  
  // }, []);

  return (
    <div className="video-container" ref={containerRef}>
      <video ref={videoRef}>
        <source src={AClassSedan} />
      </video>

      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">A-Class Sedan</h3>
        <p className="chasephrase">The value is in the virtues</p>
      </div>
      <div className="more-info-container">
        <div className="more-info">Learn More</div>
        <div className="nav-arrow">
          <BiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
