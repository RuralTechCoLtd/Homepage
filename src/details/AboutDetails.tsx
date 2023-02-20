import React, { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

import "./AboutDetails.scss";

const AboutDetails: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });

  const [value, setValue] = useState(0);
  useEffect(() => {
    const imageList = document.querySelectorAll(".AboutDetails__heroImage div");
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
    <div className="AboutDetails" id="AboutUs">
      <div className="AboutDetails__heroImage">
        <div className="AboutDetails__boyInSnow current"></div>
        <div className="AboutDetails__man2"></div>
        <div className="AboutDetails__working"></div>
        <div className="AboutDetails__childContainer">
          <h3 className="AboutDetails__sub">About Us</h3>
          <h1 className="AboutDetails__title">Rural Tech{value}</h1>
        </div>
      </div>
      <div
        className="AboutDetails__article"
        ref={ref}
        style={
          inView
            ? { opacity: 100, transform: "translateY(0)" }
            : { opacity: 0, transform: "translateY(30px)" }
        }
      >
        <p className="AboutDetails__parag">
          Rural
          TechはITで地方から日本を元気づけます！先進のテクノロジーを地方から。
          独自のアイディアによる地域特化のアプリケーションや、お客さまのニーズに寄り添う
          業務アプリケーションも作成します。
          まずは些細なこと、ちょっとしたアイデアを丁寧に形にしていく事から全てが始まります。
        </p>
        <div className="AboutDetails__arts">
          <h2 className="AboutDetails__arts__title">
            オンラインサロンやIT勉強会で地域貢献を
          </h2>
          <div className="AboutDetails__arts__pics">
            <img src="https://placehold.jp/600x400.png"></img>
            <img src="https://placehold.jp/600x400.png"></img>
          </div>
          <p className="AboutDetails__parag">
            新しい時代を生きていく子供達のためにプログラミング教育を実施します。子供達の
            可能性を大きく広げるコンピューターの力を体験しましょう。新しい時代を生きてい
            く子供達のためにプログラミング教育を実施します。子供達の可能性を大きく広げる
            コンピューターの力を体験しましょう。新しい時代を生きていく子供達のためにプロ
            グラミング教育を実施します。子供達の可能性を大きく広げるコンピューターの力を
            体験しましょう。
          </p>
        </div>
        <div className="AboutDetails__arts">
          <h2 className="AboutDetails__arts__title">
            クラウドアプリケーション開発
          </h2>
          <div className="AboutDetails__arts__pics">
            <img src="https://placehold.jp/600x400.png"></img>
            <img src="https://placehold.jp/600x400.png"></img>
          </div>
          <p className="AboutDetails__parag">
            独自のアイディアによる地域特化のアプリケーションや、お客さまのニーズに寄り添う
            業務アプリケーションも作成します。
            独自のアイディアによる地域特化のアプリケーションや、お客さまのニーズに寄り添う
            業務アプリケーションも作成します。
            独自のアイディアによる地域特化のアプリケーションや、お客さまのニーズに寄り添う
            業務アプリケーションも作成します。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
