import React from "react";

import { Link } from "react-router-dom";

import SampleImage1ForNews from "./images/designMaterial/article/MacBookOverDesk.webp";
import SampleImage2ForNews from "./images/designMaterial/article/MultiplePcOverDesk.webp";
import SampleImage3ForNews from "./images/designMaterial/article/MaritimeTerrace.webp";

import "./News.scss";

type Props = {
  image: string;
  date: string;
  title: string;
  article: string;
  to: string;
};
const NewsArticle: React.FC<Props> = (props: Props) => {
  return (
    <Link to={props.to} className="News__item">
      <div className="News__item__imgFrame">
        <img src={props.image} className="News__item__img"></img>
      </div>
      <h3 className="News__item__date">{props.date}</h3>
      <h2 className="News__item__title">{props.title}</h2>
      <p className="News__item__para">{props.article}</p>
    </Link>
  );
};
const News: React.FC = () => {
  return (
    <div className="News" id="News">
      <h2 className="News__title">News</h2>
      <Link to="/News/Archive" className="News__toArchive">
        Archive &gt;&gt;
      </Link>
      <div className="News__container">
        <NewsArticle
          to="/News/Details"
          image={SampleImage1ForNews}
          date="Jan 27"
          title="ホームページ制作セミナーを
        開催しました"
          article="総勢30名の方にご参加いただき、
        充実したセミナーだったと受講者の皆さんからあコメントをいただきました。
        もっと難易度の高いプログラミングをしてみたいなどのご意見や、
        セミナーの改善点などのご提案もいただき大変励みになりました。
        
        次のレッスンははGitの使い方やホームページの公開を題材にセミナーを開催させていただきます。
        ぜひご参加ください。"
        />
        <NewsArticle
          to="#"
          image={SampleImage2ForNews}
          date="Jan 27"
          title="ホームページ制作セミナーを
        開催しました"
          article="総勢30名の方にご参加いただき、
        充実したセミナーだったと受講者の皆さんからあコメントをいただきました。
        もっと難易度の高いプログラミングをしてみたいなどのご意見や、
        セミナーの改善点などのご提案もいただき大変励みになりました。
        
        次のレッスンははGitの使い方やホームページの公開を題材にセミナーを開催させていただきます。
        ぜひご参加ください。"
        />
        <NewsArticle
          to="#"
          image={SampleImage3ForNews}
          date="Jan 27"
          title="ホームページ制作セミナーを
        開催しました"
          article="総勢30名の方にご参加いただき、
        充実したセミナーだったと受講者の皆さんからあコメントをいただきました。
        もっと難易度の高いプログラミングをしてみたいなどのご意見や、
        セミナーの改善点などのご提案もいただき大変励みになりました。
        
        次のレッスンははGitの使い方やホームページの公開を題材にセミナーを開催させていただきます。
        ぜひご参加ください。"
        />
        <NewsArticle
          to="#"
          image={SampleImage1ForNews}
          date="Jan 27"
          title="ホームページ制作セミナーを
        開催しました"
          article="総勢30名の方にご参加いただき、
        充実したセミナーだったと受講者の皆さんからあコメントをいただきました。
        もっと難易度の高いプログラミングをしてみたいなどのご意見や、
        セミナーの改善点などのご提案もいただき大変励みになりました。
        
        次のレッスンははGitの使い方やホームページの公開を題材にセミナーを開催させていただきます。
        ぜひご参加ください。"
        />
        <NewsArticle
          to="#"
          image={SampleImage2ForNews}
          date="Jan 27"
          title="ホームページ制作セミナーを
        開催しました"
          article="総勢30名の方にご参加いただき、
        充実したセミナーだったと受講者の皆さんからあコメントをいただきました。
        もっと難易度の高いプログラミングをしてみたいなどのご意見や、
        セミナーの改善点などのご提案もいただき大変励みになりました。
        
        次のレッスンははGitの使い方やホームページの公開を題材にセミナーを開催させていただきます。
        ぜひご参加ください。"
        />
        <NewsArticle
          to="#"
          image={SampleImage3ForNews}
          date="Jan 27"
          title="ホームページ制作セミナーを
        開催しました"
          article="総勢30名の方にご参加いただき、
        充実したセミナーだったと受講者の皆さんからあコメントをいただきました。
        もっと難易度の高いプログラミングをしてみたいなどのご意見や、
        セミナーの改善点などのご提案もいただき大変励みになりました。
        
        次のレッスンははGitの使い方やホームページの公開を題材にセミナーを開催させていただきます。
        ぜひご参加ください。"
        />
      </div>
    </div>
  );
};

export default News;
