import React from "react";

import "./HeroImage.scss";

import WomanTakingPicture from "./images/designMaterial/background/WomanTakingPicture.webp";
import Man1 from "./images/designMaterial/background/ManBesideTheRiver1.webp";
import Looking from "./images/designMaterial/background/LookingAtWaterfront.webp";

const images = [WomanTakingPicture, Man1, Looking];

const coordinate = [];

const HeroImage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v === 2 ? 0 : v + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="HeroContainer"
      id="#"
      style={{ background: "url(" + images[value] + ")" }}
    >
      <h2 className="HeroContainer__message">
        We will energize Japan from the rural areas.
      </h2>
      <h1 className="HeroContainer__corporateName">Rural Tech</h1>
    </div>
  );
};

export default HeroImage;
