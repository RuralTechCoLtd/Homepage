import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <footer>
        <h1>Rural Tech</h1>
        <FacebookIcon />
        {/* TODO: LINEのアイコンを配置。fontawesomeを検討する↓ */}
        <img src="https://placehold.jp/80x90.png"></img>
        <TwitterIcon />
        <h4>Rural Tech ©︎ 2021</h4>
      </footer>
    </div>
  );
};

export default Footer;
