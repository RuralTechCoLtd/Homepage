import React from "react";

import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import sample from "./sample.md";

import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import SampleImage1ForNews from "./images/designMaterial/article/MacBookOverDesk.webp";
import SampleImage2ForNews from "./images/designMaterial/article/MultiplePcOverDesk.webp";
import SampleImage3ForNews from "./images/designMaterial/article/MaritimeTerrace.webp";

import "./News.scss";

let isLoadwidgets = false;
const Twemb: React.FC = () => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <a
      className="twitter-timeline"
      data-width="300"
      data-height="250"
      data-theme="dark"
      data-chrome="noheadernofooternoborders"
      href="https://twitter.com/masason"
    >
      latest twitter news.
    </a>
  );
};

type Props = {
  image: string;
  date: string;
  title: string;
  article: string;
  to: string;
  // iframe: boolean;
};
const NewsArticle: React.FC<Props> = (props: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <Link
      to={props.to}
      className="News__item"
      ref={ref}
      style={
        inView
          ? { opacity: 100, transform: "translateY(0)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
    >
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
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  const [sampleText, setSampleText] = useState("");
  useEffect(() => {
    fetch(sample)
      .then((res) => res.text())
      .then((text) => setSampleText(text));
  });
  return (
    <div className="News" id="News">
      <h2
        className="News__title"
        ref={ref}
        style={
          inView
            ? { opacity: 100, transform: "translateY(0)" }
            : { opacity: 0, transform: "translateY(30px)" }
        }
      >
        News
      </h2>
      <div>{sampleText}</div>
      <ReactMarkdown># hello *world.*</ReactMarkdown>
      <ReactMarkdown
        children={sampleText}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
      <Link
        to="/News/Archive"
        className="News__toArchive"
        ref={ref}
        style={
          inView
            ? { opacity: 100, transform: "translateY(-60px)" }
            : { opacity: 0, transform: "translateY(30px)" }
        }
      >
        Archive &gt;&gt;
      </Link>
      <div className="News__container">
        <Twemb />
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
