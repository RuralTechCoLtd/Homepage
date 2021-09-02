import React from "react";
import NewsArchive from "./NewsArchive";
import "./NewsDetails.scss";
type Props = {
  img: string;
  article: JSX.Element;
};

const NewsArticle: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <img src={props.img}></img>
      <div>{props.article}</div>
    </div>
  );
};

const NewsDetails: React.FC = () => {
  return (
    <div className="NewsDetails">
      <h2>&lt; News</h2>
      <NewsArticle
        img="https://placehold.jp/1000x600.png"
        article={
          <div>
            <p>
              誰かが言っていた。 忘れることは生きてゆく為の機能だと。
              しかし僕らはそれを恐れ、抗うようにシャッターを切る。
              目の前の出来事を、屈託のない視界を、そしてあなたのいる世界を。残すために。
              それでも、積み上げた記録はしだいに、非力な僕らの手から零れ落ちてゆく。
              抱えきれない思い出たちは何処へやればいいのだろうか。
              きっと風が応えてくれるだろう。 この心地良い場所で。
              きっと風が運んでくれるのだろう。遠くへ。
            </p>
            <hr />
            <h2>EXHIBITION］小見山峻 写真展 『風が応える』</h2>
            <p>
              1988年 神奈川県横浜市生まれ
              慶應義塾大学経済学部卒業後、2014年より写真家として活動。
              「リアルに寄り添ったアンチリアリティ」をテーマに、現実との剥離を目指し自身の写真を追求する。
              2018年 「JWアンダーソン(JW
              Anderson)」による新進フォトグラファー発掘を目的としたキャンペーン、「ユア・ピクチャー／アワ・フューチャー（YOUR
              PICTURE / OUR
              FUTURE）」にて世界中の一般公募の中から日本人で唯一ファイナリストに選出される。penクリエイターアワード2018
              「今年新しい領域に踏み込んだ8人の冒険者」
              舘鼻則孝/田根剛/徳田祐司/是枝裕和/宇多田ヒカル/米津玄師/小見山峻/小川哲
              に選出・eyescream紙面,webにて写真と詩の連載 “popcorn-talkie”
              を連載中。
            </p>
          </div>
        }
      />
    </div>
  );
};

export default NewsDetails;
