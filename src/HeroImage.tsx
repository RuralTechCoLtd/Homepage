import React from "react";
import HeroImage1 from "./images/Photos Library.jpg";
import "./HeroImage.scss";

const HeroImage: React.FC = () => {
  return (
    <div className="heroContainer">
      <img src={HeroImage1} alt="heroImage" className="heroContainer__image" />
      <h1 className="heroContainer__corporateName">Rural Tech</h1>
      <h2 className="heroContainer__message">
        We will energize Japan from the rural areas.
      </h2>
    </div>
  );
};

export default HeroImage;
