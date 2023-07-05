import React, { useState, useRef } from "react";
import data from "./Data";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import "./ElectricMercedes.css";

const ElectricMercedes = () => {
  const [index, setIndex] = useState(0);

  // Access the image slide DOM
  const mercedesSlideRef = useRef();
  let electricMercedesSlide = mercedesSlideRef.current?.clientWidth;

  // Access the details slide DOM
  const mercedesDetailsRef = useRef();
  let mercedesDetailSlide = mercedesDetailsRef.current?.clientWidth;

  // Slide bottons. Left and right
  const leftBtnhandle = () => {
    const imageSlide = index > 0 ? index - 1 : 0;
    setIndex(imageSlide);
  };
  const rightBtnhandle = () => {
    const imageSlide = index < data.length - 1 ? index + 1 : data.length - 1;
    setIndex(imageSlide);
  };

  return (
    // Go green image slider
    <div className="M-Green-container">
      <div className="M-Green-slide-container">
        {data.map((mercedes, Index) => {
          const { image, name, id } = mercedes;
          return (
            <div
              className="M-Green-slider-frame"
              key={id}
              style={{
                transform:
                  "translateX(-" + electricMercedesSlide * index + "px",
              }}
              ref={mercedesSlideRef}
            >
              <img
                src={image}
                alt={name}
                style={{ left: Index * 100 + "%" }}
                className={Index === index ? "active" : ""}
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="M-Green-btn-container">
        <button className="M-left-click" onClick={leftBtnhandle}>
          <BiChevronLeftCircle />
        </button>
        <button className="M-right-click" onClick={rightBtnhandle}>
          <BiChevronRightCircle />
        </button>
      </div>

      {/* Go green details slider */}
      
      <div className="M-Green-details-container">
        {data.map((detail, Index) => {
          const { id, heading, desc } = detail;
          return (
            <div
              className="M-Green-details-slide"
              key={id}
              style={{
                transform: "translateX(-" + mercedesDetailSlide * index + "px",
              }}
              ref={mercedesDetailsRef}
            >
              <div
                className={`M-Green-details ${Index === index ? "active" : ""}`}
                style={{ left: Index * 100 + "%" }}
              >
                <h4>{heading}</h4>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider indicator */}

      <div className="M-green-count-container">
        {data.map((indicator, Index) => {
          const { id } = indicator;
          return (
            <div
              className={`M-green-count ${Index === index ? "active" : ""}`}
              key={id}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ElectricMercedes;
