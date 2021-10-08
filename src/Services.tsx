import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Services.scss";
import AssistImage from "./images/soucecodeIMGL9025_TP_V.jpg";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const Services: React.FC = () => {
  return (
    <div>
      <h1>Services</h1>
      <ul>
        <li>クラウドアプリケーション開発</li>
        <ul>
          <li>受託開発</li>
          <li>パッケージアプrケーション開発</li>
          <li>Assist</li>
        </ul>
        <li>ICTセミナー</li>
        <ul>
          <li>ホームページ制作</li>
          <li>Git</li>
          <li>ホスティング</li>
          <li>JavaScript</li>
        </ul>
        <li>
          <Link to="Services/EventList">イベント予定</Link>
        </li>
        <ul>
          <li>社会人向けICTセミナー</li>
          <li>
            ICT人材育成
            <br />
            キッズプログラミング教室
          </li>
        </ul>
      </ul>
      <article>
        {/* TODO イメージのサイズはデフォルトサイズで固定されているのでレスポンシブ確認時に正しく動作しない。あらかじめwidthだけ％で指定しておいた方が良い場合もある */}
        <img
          src={AssistImage}
          alt="ServicesImage"
          className="Services__Image"
        />
        <h1>Assist</h1>
        <p>-生産管理アプリケーション-</p>
        <p>
          工程の見える化と柔軟な管理を実現、従来のスプレッドシートでは管理が難しい業務も自動化し、
          管理業務の時間短縮を実現。人員リソースをより有効的に活用できます。
        </p>
      </article>
      <a>
        <DoubleArrowIcon />
      </a>
    </div>
  );
};

export default Services;
