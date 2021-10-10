import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="About__container">
        <p className="About__introduction">introduction</p>
        <p className="About__copy">
          オンラインサロンや
          <br />
          IT勉強会で
          <br />
          地域貢献を
        </p>
        <div className="About__childContainer">
          <h1 className="About__title">Rural Tech</h1>
          <p className="About__article">
            ルーラルテックはITで地方から日本を元気づけます！
            先進のテクノロジーを地方から。
            <br />
            独自のアイディアによる地域特化のアプリケーションや
            <br />
            お客さまのニーズに寄り添う業務アプリケーションも 作成します。
          </p>
          <Link to="/About/AboutDetails">
            <a className="About__link">
              About us{" "}
              <DoubleArrowIcon
                style={{
                  verticalAlign: "middle",
                  border: "solid 1px",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
