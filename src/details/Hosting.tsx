import React from "react";

import { useInView } from "react-intersection-observer";

import { HashLink } from "react-router-hash-link";

import "./Product.scss";

const Hosting: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <div
      className="CommonDetails"
      ref={ref}
      style={
        inView
          ? { opacity: 100, transform: "translateY(0)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
    >
      <div className="CommonDetails__container">
        <HashLink to="/#Services" className="CommonDetails__back">
          Services
        </HashLink>
        <h2 className="CommonDetails__title">Hosting</h2>
        <p className="CommonDetails__sub">- Hosting -</p>
        <p className="CommonDetails__para">
          受託開発、Rural
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

export default Hosting;
