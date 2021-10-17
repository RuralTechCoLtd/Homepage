import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";

import SampleImage1ForNews from "./images/brandon-atchison-p5_7nAgi-rw-unsplash.jpg";
import SampleImage2ForNews from "./images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import SampleImage3ForNews from "./images/hawaiiGOPR0045_TP_V.jpg";

type Props = {
  image: string;
  date: string;
  title: string;
  article: string;
};
const NewsArticle: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <img src={props.image} width="470" height="320"></img>
      <h3>{props.date}</h3>
      <h2>{props.title}</h2>
      <p>{props.article}</p>
    </React.Fragment>
  );
};
const News: React.FC = () => {
  return (
    <div className="News">
      <h2>News</h2>
      <Link to="/News/Archive">Archive &gt;&gt;</Link>
      <NewsArticle
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
  );
};

export default News;
