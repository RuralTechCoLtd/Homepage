import React from "react";
import TeamImage from "./images/team_image.jpg";
import CEOimage from "./images/CEOimage.jpg";
import RYOimage from "./images/RYOimage.jpg";
import "./Team.scss";

const Team: React.FC = () => {
  return (
    <div>
      {/* <img src={TeamImage} className="--team_image" /> */}
      <h1>Team members</h1>
      <article>
        <img src={CEOimage} alt="Team__pic" />
        <h2>代表取締役</h2>
        <h1>山之内涼</h1>
        <p>
          異色の経歴を持つ彼、未経験から
          業界で経験を積み独自のアイデアで地方から改革を進めます。
          詳細なインタビューは代表挨拶ページへ
        </p>
      </article>
      <article>
        <img src={RYOimage} alt="Team__pic" />
        <h2>代表取締役</h2>
        <h1>山之内涼</h1>
        <p>
          異色の経歴を持つ彼、未経験から
          業界で経験を積み独自のアイデアで地方から改革を進めます。
          詳細なインタビューは代表挨拶ページへ
        </p>
      </article>
    </div>
  );
};

export default Team;
