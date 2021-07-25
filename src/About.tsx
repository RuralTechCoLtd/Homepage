import React from 'react';
import './About.scss';

const About: React.FC = () => {
    return (
      <div>
        <p>introduction</p>
        <p>オンラインサロンや<br />IT勉強会で<br />地域貢献を</p>
        <h1>Rural Tech</h1>
        <p>ルーラルテックはITで地方から日本を元気づけます！
          先進のテクノロジーを地方から。<br />
          独自のアイディアによる地域特化のアプリケーションや<br />
          お客さまのニーズに寄り添う業務アプリケーションも<br />
          作成します。
        </p>
        <a>About us<img src="https://placehold.jp/20x20.png"></img></a>
      </div>
    );
  }
  
  export default About;
  