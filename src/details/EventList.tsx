import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useInView } from "react-intersection-observer";

import "./EventList.scss";

type Props = {
  to: string;
  image: string;
  heading: string;
  date: string;
  article: string;
};

const EventListArticle: React.FC<Props> = (props: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <Link
      className="EventList__contents"
      to={props.to}
      ref={ref}
      style={
        inView
          ? { opacity: 100, transform: "translateY(0)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
    >
      <img className="EventList__image" src={props.image}></img>
      <div className="EventLins__childContainer">
        <h2 className="EventList__heading">{props.heading}</h2>
        <h3 className="EventList__date">{props.date}</h3>
        <p className="EventList__article">{props.article}</p>
      </div>
    </Link>
  );
};

const EventList: React.FC = () => {
  return (
    <div className="EventList">
      <HashLink className="EventList__back" to="/#Services">
        Services
      </HashLink>
      <h2 className="EventList__title">イベント一覧</h2>
      <EventListArticle
        to="/EventList/EventDetails"
        image="https://placehold.jp/160x160.png"
        heading="社会人向けICTセミナー"
        date="2021年○月○日"
        article="HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。市内または近郊にお住まいの方であればどなたでも参加出来ます。"
      />
      <EventListArticle
        to="#"
        image="https://placehold.jp/160x160.png"
        heading="ICT人材育成 キッズプログラミング教室"
        date="2021年○月○日"
        article="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##"
      />
      <EventListArticle
        to="#"
        image="https://placehold.jp/160x160.png"
        heading="Pythonによる機械学習"
        date="2021年○月○日"
        article="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##"
      />
      <EventListArticle
        to="#"
        image="https://placehold.jp/160x160.png"
        heading="シェルコマンド学習"
        date="2021年○月○日"
        article="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##"
      />
    </div>
  );
};

export default EventList;
