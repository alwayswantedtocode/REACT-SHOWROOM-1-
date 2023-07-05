import React, { useState } from "react";
import ElectricToyota from "./ElectricToyota/ElectricToyota";
import ElectricMercedes from "./ElectricMercedes/ElectricMercedes";

// go

const Electrified = () => {
  return (
    <section className="third-Section">
      <div className="heading">
        <h1>Let's Go Green, Let's Go Electric</h1>
      </div>
      <ElectricToyota />
      <ElectricMercedes />
    </section>
  );
};

export default Electrified;
