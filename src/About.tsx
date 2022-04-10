import React from "react";

import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import { DoubleArrow } from "@mui/icons-material";

import "./About.scss";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px", // ref要素が現れてから100px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div ref={ref} className={inView ? "visibleAbout" : "About"}>
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
          <h2 className="About__title">Rural Tech</h2>
          <p className="About__article">
            ルーラルテックはITで地方から日本を元気づけます！
            先進のテクノロジーを地方から。
            <br />
            独自のアイディアによる地域特化のアプリケーションや
            <br />
            お客さまのニーズに寄り添う業務アプリケーションも 作成します。
          </p>
          <Link className="About__link" to="/AboutDetails">
            About Us
            <DoubleArrow
              sx={{
                marginLeft: "15px",
                verticalAlign: "middle",
                border: "solid 1px",
                borderRadius: "50%",
                padding: "15px",
                fontSize: 50,
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
