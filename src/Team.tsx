import React from "react";
import "./Team.scss";

const Team: React.FC = () => {
  return (
    <div>
      <h1>Team members</h1>
      <article>
        <img src="https://placehold.jp/200x200.png" alt="Team__pic" />
        <h2>代表取締役</h2>
        <h1>山之内涼</h1>
        <p>
          異色の経歴を持つ彼、未経験から
          業界で経験を積み独自のアイデアで地方から改革を進めます。
          詳細なインタビューは代表挨拶ページへ
        </p>
      </article>
      <article>
        <img src="https://placehold.jp/200x200.png" alt="Team__pic" />
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
