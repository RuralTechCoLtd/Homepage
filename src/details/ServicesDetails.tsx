import React from "react";
import "./ServicesDetails.scss";
const ServicesDetails: React.FC = () => {
  return (
    <div className="ServicesDetails">
      <h3>Services</h3>
      <h1>Assist</h1>
      <p>生産管理アプリケーション</p>
      <p>
        工程の見える化と柔軟な管理を実現、従来のスプレッドシートでは管理が難しい業務も自動化し、
        管理業務の時間短縮を実現。人員リソースをより有効的に活用できます。
        取扱商品の増加により管理が難しくなってきた、データベースを活用して企業活動の中で得られる
        情報をロスする事なく活用したい。そんなご希望にお応えします。
      </p>
      <div className="slides">
        <img src="https://placehold.jp/600x400.png"></img>
        <p>explain...</p>
        <img src="https://placehold.jp/600x400.png"></img>
        <p>explain...</p>
        <img src="https://placehold.jp/600x400.png"></img>
        <p>explain...</p>
        <img src="https://placehold.jp/600x400.png"></img>
        <p>explain...</p>
        <img src="https://placehold.jp/600x400.png"></img>
        <p>explain...</p>
      </div>
    </div>
  );
};

export default ServicesDetails;
