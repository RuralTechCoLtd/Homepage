import React from "react";
import "./Greeting.scss";
const Greeting: React.FC = () => {
  return (
    <div className="Greeting">
      <a>Team Members</a>
      <h1>Rural Tech</h1>
      <h2>代表取締役社長 山之内 涼</h2>
      <ul>
        <li>2021.4.1 株式会社○○○○入社</li>
        <li>2021.4.1 株式会社○○○○入社</li>
        <li>2021.4.1 株式会社○○○○入社</li>
        <li>2021.4.1 株式会社○○○○入社</li>
        <li>2021.4.1 株式会社○○○○入社</li>
      </ul>
      <img src="http://placehold.jp/720x480.png"></img>
      <h3>代表挨拶</h3>
      <p>
        私が代表を務めるこのRural
        Techは、地方から新しいムーブメントを起こし日本全体を変えていくことを
        重要な目標としています。一つは日本全体のICT普及に貢献すること。産業技術や基礎研究の分野では高い
        実績を誇る日本ですが、変化の速いICT分野においては………
      </p>
    </div>
  );
};

export default Greeting;
