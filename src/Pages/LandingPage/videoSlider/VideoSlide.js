import React, { useState, useRef, useEffect } from "react";
import Data from "../LandingPagedata";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const VideoSlide = ({ videoref }) => {
  const [videoslide, setVideoslide] = useState(Data);
  const [index, setIndex] = useState(0);
  
  // const [childHeight, setChildHeight] = useState(0);

  const slideRef = useRef();
  const heightRef = useRef();

  let slidewidth = slideRef.current?.clientWidth;
  let slidecoverHeight = heightRef.current?.clientHeight;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((index) => (index < videoslide.length - 1 ? index + 1 : 0));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [index, videoslide]);

  const nextHandle = () => {
    const indexSlide = index < videoslide.length - 1 ? index + 1 : 0;
    setIndex(indexSlide);
  };
  const prevHandle = () => {
    const indexSlide = index > 0 ? index - 1 : videoslide.length - 1;
    setIndex(indexSlide);
  };
  return (
    <section className="first-section" style={{ height: slidecoverHeight }}>
      <article
        className="SlideContainer"
        style={{ transform: "translateX(-" + slidewidth * index + "px" }}
        ref={slideRef}
      >
        {videoslide.map((clips, clipIndex) => {
          const { video, id } = clips;
          //create active slide
          let slide = "slide";
          let position = "";
          if (clipIndex === index) {
            position = "active";
          }
          return (
            <div
              key={id}
              className={`${slide} ${position}`}
              style={{ left: clipIndex * 100 + "%" }}
              ref={heightRef}
            >
              <div className="vid-slide">{video}</div>
            </div>
          );
        })}
      </article>
      <div className="slide-btn-container">
        <button className="left-btn" onClick={prevHandle}>
          <BiChevronLeft />
        </button>
        <button className="right-btn" onClick={nextHandle}>
          <BiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default VideoSlide;
