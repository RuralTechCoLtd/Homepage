import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import "./EventDetails.scss";

type Props = {
  heading: string;
  date: string;
  contents: JSX.Element;
  overview: JSX.Element;
  ableto: JSX.Element;
};
const EventDetailsArticle: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <h1>{props.heading}</h1>
      <h3>{props.date}</h3>
      <hr />
      <h2>イベント内容</h2>
      <p>{props.contents}</p>
      <hr />
      <h2>概要</h2>
      <p>{props.overview}</p>
      <hr />
      <h2>こんな事が出来るようになります</h2>
      <p>{props.ableto}</p>
    </React.Fragment>
  );
};

const EventDetails: React.FC = () => {
  return (
    <div className="EventDetails">
      <EventDetailsArticle
        heading="社会人向けICTセミナー"
        date="2021年○月○日(日)"
        contents={
          <p>
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
          </p>
        }
        overview={
          <p>
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
          </p>
        }
        ableto={
          <p>
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
            HTML,CSSの基礎、ホームページ制作のレクチャーを開催します。参加資格等は特にありません。
            市内または近郊にお住まいの方であればどなたでも参加出来ます。
          </p>
        }
      />
    </div>
  );
};

export default EventDetails;
