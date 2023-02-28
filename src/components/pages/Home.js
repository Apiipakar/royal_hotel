import React from "react";
import { About } from "./About";
import { Explore } from "./Explore";
import { Service } from "./Service";
import { Application } from "./Application";
import { Contact } from "./Contact";
export const Home = () => {
  return (
    <div>
      <section className="home_page"></section>
      <div className="warm-welcome">
        <h2>welcome</h2>
        <div className="line"></div>
        <h1>
          R<span>oyal</span>
          <span className="ho">Hotel</span>
        </h1>
        <p>
          The place you can find your wishes and the quality of your
          imaginations
          <br />
          your satisfaction is our job.
        </p>

        <button className="Usually_btn">Explore more</button>
      </div>
      <About />
      <Explore />
      <Service />
      <Application />
      <Contact />
    </div>
  );
};
