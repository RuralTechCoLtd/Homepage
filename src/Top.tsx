import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import News from "./News";
import Footer from "./Footer";
import "./Top.scss";

const Top: React.FC = () => {
  return (
    <div className="Top">
      <Header />
      <div className="heroContainer">
        <img
          src="https://placehold.jp/1440x960.png"
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
      <Footer />
    </div>
  );
};

export default Top;
