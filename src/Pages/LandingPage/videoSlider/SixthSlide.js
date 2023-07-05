import React, { useState, useRef } from "react";
import LxLexus from "../../../Images/LEXUS/LX600/Lx-Video-Edit-2-use.mp4";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";

// e

const SixthSlide = () => {
  const [isplay, setIsplay] = useState(false);

  const videoRef = useRef();
  // const containerRef =useRef();

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
        <source src={LxLexus} />
      </video>
      {/* if button is active show if  not dont show */}
      <div className="btn-container">
        <button className="btn-play   " onClick={handlePlay}>
          {isplay ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
      </div>
      <div className="description">
        <h3 className="brand-type">Lexus Lx 600 </h3>
        <p className="chasephrase">Luxury re-imagined on wheels</p>
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

export default SixthSlide;
