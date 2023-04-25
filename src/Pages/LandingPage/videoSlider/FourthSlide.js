import React, { useState, useRef } from "react";

import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";

const FourthSlide = () => {
  const [isplay, setIsplay] = useState(false);

  const videoRef = useRef();

  const handlePlay = () => {
    if (!isplay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsplay((currentplaying) => !currentplaying);
  };

  return (
    <div className="video-container">
      <video ref={videoRef}>
        <source src="./images/BENZ/Mercedes-Maybach/Maybach-use.mp4" />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="maybach-Description">
        <p className="maybach-chasephrase">THE MERCEDES-MAYBACH ---</p>
        <h3 className="maybach-brand-type">GLS SUV</h3>
        <p className="maybach-chasephrase">The value is in the virtues</p>
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

export default FourthSlide;
