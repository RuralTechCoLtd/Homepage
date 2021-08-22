import React from "react";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import News from "./News";
import HeroImage1 from "./images/Photos Library.jpg";
import "./Top.scss";

const Top: React.FC = () => {
  return (
    <div className="Top">
      <div className="heroContainer">
        <img
          src={HeroImage1}
          alt="heroImage"
          className="heroContainer__image"
        />
        <h1 className="heroContainer__corporateName">Rural Tech</h1>
        <h2 className="heroContainer__message">
          We will energize Japan from the rural areas.
        </h2>
      </div>
      <About />
      <Services />
      <Team />
      <News />
    </div>
  );
};

export default Top;
