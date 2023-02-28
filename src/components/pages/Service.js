import React, { useState } from "react";
import { CardSlider } from "./CardSlider";
import { Explore } from "./Explore";
export const Service = () => {
  return (
    <section>
      <div className="row">
        <h1>Services</h1>
        <h4>here is the service we offer you may searching for</h4>
        <h4 style={{ fontSize: "17px", marginBottom: "30px" }}>Check out</h4>
        <CardSlider />
      </div>
    </section>
  );
};
