import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="About__container">
        <p>introduction</p>
        <p>
          オンラインサロンや
          <br />
          IT勉強会で
          <br />
          地域貢献を
        </p>
        <h1>Rural Tech</h1>
        <p>
          ルーラルテックはITで地方から日本を元気づけます！
          先進のテクノロジーを地方から。
          <br />
          独自のアイディアによる地域特化のアプリケーションや
          <br />
          お客さまのニーズに寄り添う業務アプリケーションも
          <br />
          作成します。
        </p>
        <Link to="/About/AboutDetails">
          <a>
            About us <DoubleArrowIcon />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default About;
