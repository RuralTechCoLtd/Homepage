import React, { useState, useEffect } from "react";

import "./HeroImage.scss";

const HeroImage: React.FC = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const imageList = document.querySelectorAll(".HeroContainer div");
    const interval = setInterval(() => {
      imageList[value].classList.remove("current");
      setValue((prevValue) => {
        return prevValue === 2 ? 0 : prevValue + 1;
      });
    }, 10000);
    imageList[value].classList.add("current");

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="HeroContainer" id="#">
      <div className="HeroContainer__womanTakingPictures current"></div>
      <div className="HeroContainer__man1"></div>
      <div className="HeroContainer__looking"></div>
      <h2 className="HeroContainer__message">
        We will energize Japan from the rural areas.
      </h2>
      <h1 className="HeroContainer__corporateName">Rural Tech</h1>
    </div>
  );
};

export default HeroImage;
