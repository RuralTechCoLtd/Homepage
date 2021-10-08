import React from "react";
import HeroImage1 from "./images/Photos Library.jpg";
import "./HeroImage.scss";

const HeroImage: React.FC = () => {
  return (
    <div className="HeroContainer">
      {/* <img src={HeroImage1} alt="heroImage" className="heroContainer__image" /> */}
      <h2 className="HeroContainer__message">
        We will energize Japan from the rural areas.
      </h2>
      <h1 className="HeroContainer__corporateName">Rural Tech</h1>
    </div>
  );
};

export default HeroImage;
