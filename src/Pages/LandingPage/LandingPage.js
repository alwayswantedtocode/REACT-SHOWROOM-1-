import React from "react";

import VideoSlide from "./videoSlider/VideoSlide";
import VehiclesSlide from "./newVehicles/VehiclesSlide";
import Electrified from "./Electrified/Electrified";

const LandingPage = () => {
  return (
    <main className="main-container">
      <VideoSlide />
      <VehiclesSlide />
      <Electrified />
    </main>
  );
};

export default LandingPage;
