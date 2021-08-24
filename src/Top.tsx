import React from "react";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import News from "./News";
import "./Top.scss";
import HeroImage from "./HeroImage";

const Top: React.FC = () => {
  return (
    <div className="Top">
      <HeroImage />
      <About />
      <Services />
      <Team />
      <News />
    </div>
  );
};

export default Top;
