import React from "react";
import "./EventList.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

type Props = {
  image: string;
  heading: string;
  date: string;
  sampleArticle: string;
};

const EventListArticle: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <hr />
      <img src={props.image}></img>
      <h2>{props.heading}</h2>
      <h3>{props.date}</h3>
      <p>{props.sampleArticle}</p>
    </div>
  );
};

const EventList: React.FC = () => {
  return (
    <div className="EventList">
      <h3>Services</h3>
      <h1>イベント一覧</h1>
      <Link to="/Services/EventList/EventDetails">
        <EventListArticle
          image="https://placehold.jp/160x160.png"
          heading="社会人向けICTセミナー"
          date="2021年○月○日"
          sampleArticle="HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
        市内または近郊にお住まいの方であればどなたでも参加出来ます。"
        />
      </Link>
      <EventListArticle
        image="https://placehold.jp/160x160.png"
        heading="Pythonによる機械学習"
        date="2021年○月○日"
        sampleArticle="PythonPythonPythonPythonPythonPythonPythonPythonPythonPythonPythonPythonPython
PythonPythonPythonPythonPythonPythonPythonPythonPythonPythonPythonPythonPython"
      />
      <EventListArticle
        image="https://placehold.jp/160x160.png"
        heading="シェルコマンド学習"
        date="2021年○月○日"
        sampleArticle="LinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinux
LinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinuxLinux"
      />
    </div>
  );
};

export default EventList;
