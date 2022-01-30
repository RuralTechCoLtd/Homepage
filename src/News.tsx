import React from "react";

import { Link } from "react-router-dom";

import SampleImage1ForNews from "./images/brandon-atchison-p5_7nAgi-rw-unsplash.jpg";
import SampleImage2ForNews from "./images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import SampleImage3ForNews from "./images/hawaiiGOPR0045_TP_V.jpg";

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
      <img src={props.image} className="News__item__img"></img>
      <h3 className="News__item__date">{props.date}</h3>
      <h2 className="News__item__title">{props.title}</h2>
      <p className="News__item__para">{props.article}</p>
    </Link>
  );
};
const News: React.FC = () => {
  return (
    <div className="News">
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
