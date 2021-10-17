import React from "react";
import TeamImage from "./images/team_image.jpg";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import CEOimage from "./images/CEOimage.jpg";
import RYOimage from "./images/RYOimage.jpg";
import "./Team.scss";

const Team: React.FC = () => {
  return (
    <div>
      {/* <img src={TeamImage} className="--team_image" /> */}
      <h2>Team members</h2>
      <article>
        <img src={CEOimage} alt="Team__pic" />
        <h3>代表取締役</h3>
        <h2>山之内涼</h2>
        <p>
          異色の経歴を持つ彼、未経験から
          業界で経験を積み独自のアイデアで地方から改革を進めます。
          詳細なインタビューは代表挨拶ページへ
        </p>
      </article>
      <article>
        <img src={RYOimage} alt="Team__pic" />
        <h3>代表取締役</h3>
        <h2>山之内涼</h2>
        <p>
          異色の経歴を持つ彼、未経験から
          業界で経験を積み独自のアイデアで地方から改革を進めます。
          詳細なインタビューは代表挨拶ページへ
        </p>
      </article>
      <Link to="/Greeting">
        代表挨拶ページへ <DoubleArrowIcon />
      </Link>
    </div>
  );
};

export default Team;
