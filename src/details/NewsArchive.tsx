import React from "react";
import { Link } from "react-router-dom";
import "./NewsArchive.scss";

type Props = {
  image: string;
  title: string;
  sample: string;
  root: string;
};

const ArchiveArticle: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <p>{props.sample}</p>
      <Link to={props.root}>READ MORE...</Link>
    </React.Fragment>
  );
};

const NewsArchive: React.FC = () => {
  return (
    <div className="NewsArchive">
      <h3>Latest News</h3>
      <h1>News Archive</h1>
      <ArchiveArticle
        image="https://placehold.jp/750x500.png"
        title="INTERVIEW#10 We Work Here."
        sample="sometime, work needs you 
for something stupid."
        root="/News/Details"
      />
      <ArchiveArticle
        image="https://placehold.jp/750x500.png"
        title="INTERVIEW#10 We Work Here."
        sample="sometime, work needs you 
for something stupid."
        root=""
      />
      <ArchiveArticle
        image="https://placehold.jp/750x500.png"
        title="INTERVIEW#10 We Work Here."
        sample="sometime, work needs you 
for something stupid."
        root=""
      />
    </div>
  );
};

export default NewsArchive;
