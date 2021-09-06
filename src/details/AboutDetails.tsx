import React from "react";
import "./AboutDtails.scss";
const AboutDtails: React.FC = () => {
  return (
    <div className="AboutDtails">
      <div className="AboutDetails__HeroImage">
        <img src="https://placehold.jp/1440x960.png"></img>
        <h3>About Us</h3>
        <h1>Rural Tech</h1>
      </div>
      <div className="AboutDetails__Main">
        <p>
          Rural
          TechはITで地方から日本を元気づけます！先進のテクノロジーを地方から。
          独自のアイディアによる地域特化のアプリケーションや、お客さまのニーズに寄り添う
          業務アプリケーションも作成します。
          まずは些細なこと、ちょっとしたアイデアを丁寧に形にしていく事から全てが始まります。
        </p>
        <div className="AboutDetails__Art1">
          <h1>オンラインサロンやIT勉強会で地域貢献を</h1>
          <div className="AboutDetails__Images">
            <img src="http://placehold.jp/600x400.png"></img>
            <img src="http://placehold.jp/600x400.png"></img>
          </div>
          <p>
            新しい時代を生きていく子供達のためにプログラミング教育を実施します。子供達の
            可能性を大きく広げるコンピューターの力を体験しましょう。新しい時代を生きてい
            く子供達のためにプログラミング教育を実施します。子供達の可能性を大きく広げる
            コンピューターの力を体験しましょう。新しい時代を生きていく子供達のためにプロ
            グラミング教育を実施します。子供達の可能性を大きく広げるコンピューターの力を
            体験しましょう。
          </p>
        </div>
        <div className="AboutDetails__Art2">
          <h1>クラウドアプリケーション開発</h1>
          <img src="http://placehold.jp/600x400.png"></img>
          <img src="http://placehold.jp/600x400.png"></img>
          <p>
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

export default AboutDtails;
