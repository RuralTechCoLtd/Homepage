import React from "react";

import { Link } from "react-router-dom";

import "./NewsArchive.scss";

type Props = {
  image: string;
  title: string;
  sample: string;
  to: string;
};

const ArchiveArticle: React.FC<Props> = (props: Props) => {
  return (
    <div className="NewsArchive__item">
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
        <Link to="/" className="NewsArchive__back">
          News
        </Link>
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
