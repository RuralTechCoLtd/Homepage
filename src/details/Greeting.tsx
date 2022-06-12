import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Greeting.scss";

const Greeting: React.FC = () => {
  return (
    <div className="Greeting">
      <div className="Greeting__container">
        <HashLink to="/#Team" className="Greeting__back">
          Team Members
        </HashLink>
        <div className="Greeting__childContainer">
          <div className="Greeting__grandChildContainer">
            <h2 className="Greeting__RuralTech">Rural Tech</h2>
            <h2 className="Greeting__post">代表取締役社長 山之内 涼</h2>
            <ul className="Greeting__career">
              <li>2011.4.1 株式会社○○○○入社</li>
              <li>2011.4.1 株式会社○○○○入社</li>
              <li>2011.4.1 株式会社○○○○入社</li>
            </ul>
          </div>
          <img
            src="http://placehold.jp/720x480.png"
            className="Greeting__img"
          ></img>
        </div>
        <h3 className="Greeting__title">代表挨拶</h3>
        <p className="Greeting__para">
          私が代表を務めるこのRural
          Techは、地方から新しいムーブメントを起こし日本全体を変えていくことを
          重要な目標としています。一つは日本全体のICT普及に貢献すること。産業技術や基礎研究の分野では高い
          実績を誇る日本ですが、変化の速いICT分野においては………
        </p>
      </div>
    </div>
  );
};

export default Greeting;
