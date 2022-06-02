import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Product.scss";

const AssistDetails: React.FC = () => {
  return (
    <div className="CommonDetails">
      <div className="CommonDetails__container">
        <HashLink to="/#Services" className="CommonDetails__back">
          Services
        </HashLink>
        <h2 className="CommonDetails__title">Assist</h2>
        <p className="CommonDetails__sub">- 生産管理アプリケーション -</p>
        <p className="CommonDetails__para">
          工程の見える化と柔軟な管理を実現、従来のスプレッドシートでは管理が難しい業務も自動化し、
          管理業務の時間短縮を実現。人員リソースをより有効的に活用できます。
          取扱商品の増加により管理が難しくなってきた、データベースを活用して企業活動の中で得られる
          情報をロスする事なく活用したい。そんなご希望にお応えします。
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

export default AssistDetails;
