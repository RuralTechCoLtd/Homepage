import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useInView } from "react-intersection-observer";

import "./NewsArchive.scss";

type Props = {
  image: string;
  title: string;
  sample: string;
  to: string;
};

const ArchiveArticle: React.FC<Props> = (props: Props) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <div
      className="NewsArchive__item"
      ref={ref}
      style={
        inView
          ? { opacity: 100, transform: "translateY(0)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
    >
      <img src={props.image} className="NewsArchive__item__img"></img>
      <div className="NewsArchive__item__childContainer">
        <h2 className="NewsArchive__item__title">{props.title}</h2>
        <p className="NewsArchive__item__para">{props.sample}</p>
        <Link to={props.to} className="NewsArchive__item__link">
          READ MORE...
        </Link>
      </div>
    </div>
  );
};

const NewsArchive: React.FC = () => {
  return (
    <div className="NewsArchive">
      <div className="NewsArchive__container">
        <HashLink to="/#News" className="NewsArchive__back">
          News
        </HashLink>
        <h2 className="NewsArchive__title">News Archive</h2>
        <ArchiveArticle
          image="https://placehold.jp/750x500.png"
          title="INTERVIEW#10 We Work Here."
          sample="sometime, work needs you 
        for something stupid."
          to="/News/Details"
        />
        <ArchiveArticle
          image="https://placehold.jp/750x500.png"
          title="INTERVIEW#10 We Work Here."
          sample="sometime, work needs you 
        for something stupid."
          to=""
        />
        <ArchiveArticle
          image="https://placehold.jp/750x500.png"
          title="INTERVIEW#10 We Work Here."
          sample="sometime, work needs you 
        for something stupid."
          to=""
        />
      </div>
    </div>
  );
};

export default NewsArchive;
