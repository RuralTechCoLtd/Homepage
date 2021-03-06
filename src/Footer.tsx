import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./Footer.scss";

library.add(fab);

const Footer: React.FC = () => {
  return (
    <footer className="Footer" id="Footer">
      <div className="Footer__wrapper">
        <h2 className="Footer__logo">Rural Tech</h2>
        <div className="Footer__snsicon-wrapper">
          <FontAwesomeIcon
            className="Footer__snsicon"
            icon={["fab", "facebook-f"]}
          />
          <FontAwesomeIcon className="Footer__snsicon" icon={["fab", "line"]} />
          <FontAwesomeIcon
            className="Footer__snsicon"
            icon={["fab", "twitter"]}
          />
        </div>
        <h4 className="Footer__copyright">Rural Tech ©︎ 2021</h4>
      </div>
    </footer>
  );
};

export default Footer;
