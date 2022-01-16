import React from "react";
import "./HeroImage.scss";

const HeroImage: React.FC = () => {
  return (
    <div className="HeroContainer" id="#">
      <h2 className="HeroContainer__message">
        We will energize Japan from the rural areas.
      </h2>
      <h1 className="HeroContainer__corporateName">Rural Tech</h1>
    </div>
  );
};

export default HeroImage;
