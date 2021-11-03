import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
const PackagedApplication: React.FC = () => {
  return (
    <div className="CommonDetails">
      <div className="CommonDetails__container">
        <Link to="/" className="CommonDetails__back">
          Services
        </Link>
        <h2 className="CommonDetails__title">パッケージアプリケーション開発</h2>
        <p className="CommonDetails__sub">- Packaged Application -</p>
        <p className="CommonDetails__para">
          パッケージアプリケーション開発、Rural
          TechはITで地方から日本を元気づけます！先進のテクノロジーを地方から。
          独自のアイディアによる地域特化のアプリケーションや、お客さまのニーズに寄り添う
          業務アプリケーションも作成します。
          まずは些細なこと、ちょっとしたアイデアを丁寧に形にしていく事から全てが始まります。
        </p>
      </div>
      <ul className="CommonDetails__slide">
        <li className="CommonDetails__slide__items">
          <img src="https://placehold.jp/600x400.png"></img>
          <p>explain explain explain explain explain explain explain explain</p>
        </li>
        <li className="CommonDetails__slide__items">
          <img src="https://placehold.jp/600x400.png"></img>
          <p>explain explain explain explain explain explain explain explain</p>
        </li>
        <li className="CommonDetails__slide__items">
          <img src="https://placehold.jp/600x400.png"></img>
          <p>explain explain explain explain explain explain explain explain</p>
        </li>
        <li className="CommonDetails__slide__items">
          <img src="https://placehold.jp/600x400.png"></img>
          <p>explain explain explain explain explain explain explain explain</p>
        </li>
        <li className="CommonDetails__slide__items">
          <img src="https://placehold.jp/600x400.png"></img>
          <p>explain explain explain explain explain explain explain explain</p>
        </li>
      </ul>
    </div>
  );
};

export default PackagedApplication;
