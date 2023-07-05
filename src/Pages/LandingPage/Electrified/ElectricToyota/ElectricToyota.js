import React, { useState, useRef } from "react";
import data from "./data";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import "./ElectricToyota.css";

const ElectricToyota = () => {
  const [index, setIndex] = useState(0);

  // Access the image slide DOM
  const toyotaSlideRef = useRef();
  let electricToyotaSlide = toyotaSlideRef.current?.clientWidth;

  // Access the details slide DOM
  const toyotaDetailsRef = useRef();
  let toyotaDetailSlide = toyotaDetailsRef.current?.clientWidth;

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
    
    <div className="T-Green-container">
      <div className="T-Green-slide-container">
        {data.map((toyota, Index) => {
          const { image, name, id } = toyota;
          return (
            <div
              className="T-Green-slider-frame"
              key={id}
              style={{
                transform: "translateX(-" + electricToyotaSlide * index + "px",
              }}
              ref={toyotaSlideRef}
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
      <div className="T-Green-btn-container">
        <button className="T-left-click" onClick={leftBtnhandle}>
          <BiChevronLeftCircle />
        </button>
        <button className="T-right-click" onClick={rightBtnhandle}>
          <BiChevronRightCircle />
        </button>
      </div>

      {/* Go green details slider */}
      <div className="T-Green-details-container">
        {data.map((detail, Index) => {
          const { id, heading, desc } = detail;
          return (
            <div
              className="T-Green-details-slide"
              key={id}
              style={{
                transform: "translateX(-" + toyotaDetailSlide * index + "px",
              }}
              ref={toyotaDetailsRef}
            >
              <div
                className={`T-Green-details ${Index === index ? "active" : ""}`}
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
      <div className="T-green-count-container">
        {data.map((indicator, Index) => {
          const { id } = indicator;
          return (
            <div
              className={`T-green-count ${Index === index ? "active" : ""}`}
              key={id}
            ></div>
          );
        })}
      </div>
      {/* <div className="green-count-numeric">
        {index + 1}.{tGoGreen.length}
      </div> */}
    </div>
  );
};

export default ElectricToyota;
