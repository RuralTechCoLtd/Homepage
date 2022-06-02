import React from "react";

import { Link } from "react-router-dom";

import "./EventDetails.scss";

type Props = {
  title: string;
  date: string;
  exp: string;
  overview: string;
  ableto: string;
};
const EventDetailsArticle: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="EventDetails__childContainer">
        <h2 className="EventDetails__title">{props.title}</h2>
        <p className="EventDetails__date">{props.date}</p>
      </div>
      <hr />
      <h2 className="EventDetails__common">イベント内容</h2>
      <p className="EventDetails__commonPara">{props.exp}</p>
      <hr />
      <h2 className="EventDetails__common">概要</h2>
      <p className="EventDetails__commonPara">{props.overview}</p>
      <hr />
      <h2 className="EventDetails__common">こんな事が出来るようになります</h2>
      <p className="EventDetails__commonPara">{props.ableto}</p>
    </React.Fragment>
  );
};

const EventDetails: React.FC = () => {
  return (
    <div className="EventDetails">
      <div className="EventDetails__container">
        <Link to="/EventList" className="EventDetails__back">
          EventList
        </Link>
        <EventDetailsArticle
          title="社会人向けICTセミナー"
          date="2021年○月○日(日)"
          exp="HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。
          HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。
          HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。
          HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。"
          overview="HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。
          HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。
          HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。
          HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
          市内または近郊にお住まいの方であればどなたでも参加出来ます。"
          ableto="
              HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
              市内または近郊にお住まいの方であればどなたでも参加出来ます。
              HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
              市内または近郊にお住まいの方であればどなたでも参加出来ます。
              HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
              市内または近郊にお住まいの方であればどなたでも参加出来ます。
              HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
              市内または近郊にお住まいの方であればどなたでも参加出来ます。"
        />
      </div>
    </div>
  );
};

export default EventDetails;
