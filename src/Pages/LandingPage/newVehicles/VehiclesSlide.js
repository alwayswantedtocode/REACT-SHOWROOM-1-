import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../newVehicles/vehiclesData";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const VehiclesSlide = () => {
  const [vehicleslide, setVehicleslide] = useState(data);

  const [slidecounter, setSlidecounter] = useState(data);

  const [index, setIndex] = useState(0);

  const vechicleRef = useRef();
  let vehicleSlidewidth = vechicleRef.current?.clientWidth;

  const colorRef = useRef();

  const nextBtn = () => {
    const indexSlide =
      index < vehicleslide.length - 1 ? index + 1 : vehicleslide.length - 1;
    setIndex(indexSlide);
  };
  const prevBtn = () => {
    const indexSlide = index > 0 ? index - 1 : 0;
    setIndex(indexSlide);
  };
  return (
    <section className="second-Section">
      <h2 className="new-vehicle-heading">New Vehicle</h2>

      <div
        className="new-vechicle-slide-container"
        style={{
          transform: "translateX(-" + vehicleSlidewidth * index + "px",
        }}
      >
        {vehicleslide.map((carslides, carIndex) => {
          const { id, image, Brand, Type, Year, feature, amount, button } =
            carslides;

          //create active slide

          return (
            <div
              className={`vehicle-slide ${carIndex === index ? "active" : ""}`}
              key={id}
              ref={vechicleRef}
            >
              <div className="vehicleImage">
                <Link to="/">
                  <img src={image} alt={Brand} />
                </Link>
              </div>
              <div className="new-vehicle-details">
                <div className="year-type-cover">
                  <div className="year">
                    <h5>{Year}</h5>
                  </div>

                  <h5 className="line">|</h5>

                  <div className="type">
                    <h5>{Type}</h5>
                  </div>
                </div>
                <div className="brand-features-amount-cover">
                  <div className="brand">
                    <h4>{Brand}</h4>
                  </div>
                  <div className="features">
                    <h5>features</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis illo autem quis minima dignissimos dolorem
                      corrupti sed nisi necessitatibus commodi, quidem ipsum
                      iure nam modi ducimus eveniet. Necessitatibus, adipisci
                      commodi.
                    </p>
                  </div>
                  <div className="amount-explore-cover">
                    <div className="amount">${amount}</div>
                    <h5 className="line-two">|</h5>
                    {/* <div> */}
                    <button className="explore-btn">explore</button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slide-counter-container">
        <div className="sec-two-prev-btn" onClick={prevBtn}>
          <BiCaretLeft />
        </div>
        <div className="counter">
         
          {slidecounter.map((counter, countIndex) => {
            const { id } = counter;
// const counterBtn=()=>{
//               const countSlider = index === countIndex? countIndex;
//               setIndex(countSlider);
//             }
            
            //create active count indicator
            
            return (
              <div
                className={`slide-counter ${
                  countIndex === index ? "active" : ""
                }`}
                key={id}
                ref={colorRef}
              ></div>
            );
          })}
        </div>
        <div className="sec-two-next-btn" onClick={nextBtn}>
          <BiCaretRight />
        </div>
      </div>
    </section>
  );
};

export default VehiclesSlide;
