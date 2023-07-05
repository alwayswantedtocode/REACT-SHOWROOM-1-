import React, { useState, useRef } from "react";
import ToyotaCrown from "../../../Images/TOYOTAL/crown/Toyota-crown-use.mp4";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";

// j

const FirthSlide = () => {
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
        <source src={ToyotaCrown} />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">Toyota Crown</h3>
        <p className="chasephrase">Innovation dialed up.</p>
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

export default FirthSlide;
