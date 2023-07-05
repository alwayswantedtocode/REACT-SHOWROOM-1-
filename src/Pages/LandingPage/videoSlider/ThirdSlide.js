import React, { useState, useRef } from "react";

import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";
import EsLexus from "../../../Images/LEXUS/ES/Lexus-Es-use.mp4";

// h

const ThirdSlide = () => {
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
        <source src={EsLexus}/>
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">lexus E 350</h3>
        <p className="chasephrase">Simple and elegant on the road</p>
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

export default ThirdSlide;
