import React from "react";
import { Link } from "react-router-dom";
import "./NewsDetails.scss";
type Props = {
  img: string;
  article: JSX.Element;
};

const NewsArticle: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <img src={props.img} className="NewsDetails__img"></img>
      {props.article}
    </React.Fragment>
  );
};

const NewsDetails: React.FC = () => {
  return (
    <div className="NewsDetails">
      <div className="NewsDetails__container">
        <Link to="/News/Archive" className="NewsDetails__back">
          News Archive
        </Link>
        <NewsArticle
          img="https://placehold.jp/1000x600.png"
          article={
            <React.Fragment>
              <p className="NewsDetails__para">
                ###EXAMPLE###Someone once told me. Forgetting is a function of
                survival. But we are afraid of it, and we click the shutter as
                if to resist it. To preserve the events in front of us, our
                carefree vision, and the world you live in. To preserve it.
                Still, the records that we have accumulated gradually fall out
                of our helpless hands. Where should we put the memories we can't
                hold on to? I'm sure the wind will answer that question. In this
                comfortable place. I'm sure the wind will carry them away. Far
                away.
              </p>
              <hr />
              <h2 className="NewsDetails__title">
                EXHIBITION] Shun Omiyama Photo Exhibition "The Wind Responds
              </h2>
              <p className="NewsDetails__para">
                ###EXAMPLE###Born in Yokohama City, Kanagawa Prefecture in 1988.
                After graduating from the Faculty of Economics at Keio
                University, he began working as a photographer in 2014. He has
                been working as a photographer since 2014. He pursues his own
                photography with the theme of "anti-reality that is close to
                reality", aiming to detach himself from reality. 2018 "JW
                Anderson Anderson's campaign to discover emerging photographers,
                "YOUR PICTURE / OUR FUTURE PICTURE / OUR pen creator award 2018
                Eight Adventurers Who Stepped Into New Territory This Year
                Noritaka Tatehana, Tsuyoshi Tane, Yuji Tokuda, Hirokazu
                Kore-eda, Hikaru Utada, Genji Yonezu, Shun Omiyama, Satoshi
                Ogawa He is currently working on a serial photo and poetry
                series called "popcorn-talkie" on the pages of eyescream and the
                web. serialization.
              </p>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

export default NewsDetails;
