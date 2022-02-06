import React, { useState } from "react";

import { Link } from "react-router-dom";

import { DoubleArrow } from "@mui/icons-material";

import AssistImage from "./images/designMaterial/article/SourceCodeOnScreen.webp";

import "./Services.scss";

type Props = {
  title: string;
};

type Temp = {
  src: string;
  alt: string;
  to: string;
  name: string;
  sub: string;
  para: string;
};

const Templates: React.FC<Temp> = (props: Temp) => {
  return (
    <article className="Services__contents">
      <img src={props.src} alt={props.alt} className="Services__image" />
      <h2 className="Services__name">{props.name}</h2>
      <p className="Services__sub">{props.sub}</p>
      <p className="Services__para">{props.para}</p>
      <Link to={props.to} className="Services__andmore">
        And more...
        <DoubleArrow
          sx={{
            marginLeft: "15px",
            verticalAlign: "middle",
            border: "solid 1px",
            borderRadius: "50%",
            padding: "15px",
            fontSize: 50,
          }}
        />
      </Link>
    </article>
  );
};

const Products: React.FC<Props> = (props: Props) => {
  if (props.title === "assist") {
    return (
      <Templates
        src={AssistImage}
        alt="ServicesImage"
        name="Assist"
        sub="-生産管理アプリケーション-"
        para="工程の見える化と柔軟な管理を実現、従来のスプレッドシートでは管理が難しい業務も自動化し、
     管理業務の時間短縮を実現。人員リソースをより有効的に活用できます。"
        to="/Services/Assist"
      ></Templates>
    );
  } else if (props.title === "engineer") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="entrusted development"
        name="受託開発"
        sub="-Entrusted development-"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##"
        to="/Services/EntrustedDevelopment"
      ></Templates>
    );
  } else if (props.title === "package") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="package applications"
        name="パッケージアプリケーション開発"
        sub="-Package applications-"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="/Services/PackagedApplication"
      ></Templates>
    );
  } else if (props.title === "homepage") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="making homepage"
        name="ホームページ制作"
        sub="-Seminar for make homepages-"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="#"
      ></Templates>
    );
  } else if (props.title === "git") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="git seminar"
        name="Git"
        sub="-Seminar for Git-"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="#"
      ></Templates>
    );
  } else if (props.title === "hosting") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="hosting"
        name="ホスティング"
        sub="-Seminar for Hosting service-"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="#"
      ></Templates>
    );
  } else if (props.title === "javascript") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="javascript seminar"
        name="JavaScript"
        sub="-Seminar for JavaScript-"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="#"
      ></Templates>
    );
  } else if (props.title === "worker") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="seminar for workers"
        name="社会人向けICTセミナー"
        sub="2021年○月○日午前10時 オンライン開催"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="/Services/EventList/EventDetails"
      ></Templates>
    );
  } else if (props.title === "kids") {
    return (
      <Templates
        src="https://placehold.jp/760x520.png"
        alt="seminar for kids"
        name="ICT人材育成 キッズプログラミング教室"
        sub="2021年○月○日午前10時 会場：〇〇市役所２階会議室"
        para="##EXAMPLE The system enables visualization and flexible management of processes, automates tasks that are difficult to manage with conventional spreadsheets, and reduces management time.
        It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks. It also automates tasks that are difficult to manage with conventional spreadsheets, thereby reducing the time required for management tasks and enabling more effective use of human resources.##."
        to="#"
      ></Templates>
    );
  } else {
    return (
      <>
        <h2 className="Services__default">
          Select products or services, event information from the list on the
          left to see articles of them.
        </h2>
        <h2 className="Services__default__mobile">
          Select products or services, event information from the list above to
          see articles of them.
        </h2>
      </>
    );
  }
};

const Services: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const setEngineer = () => {
    setContent("engineer");
  };

  const setPackage = () => {
    setContent("package");
  };

  const setAssist = () => {
    setContent("assist");
  };

  const setHomepage = () => {
    setContent("homepage");
  };

  const setGit = () => {
    setContent("git");
  };
  const setHosting = () => {
    setContent("hosting");
  };
  const setJavaScript = () => {
    setContent("javascript");
  };
  const setWorker = () => {
    setContent("worker");
  };
  const setKids = () => {
    setContent("kids");
  };
  return (
    <div className="Services" id="Services">
      <h2 className="Services__title">Services</h2>
      <div className="Services__container">
        <div className="Services__childContainer">
          <ul className="Services__navlist">
            <li>クラウドアプリケーション開発</li>
            <ul>
              <li onClick={setEngineer}>受託開発</li>
              <li onClick={setPackage}>パッケージアプリケーション開発</li>
              <li onClick={setAssist}>Assist</li>
            </ul>
          </ul>
          <ul className="Services__navlist">
            <li>ICTセミナー</li>
            <ul>
              <li onClick={setHomepage}>ホームページ制作</li>
              <li onClick={setGit}>Git</li>
              <li onClick={setHosting}>ホスティング</li>
              <li onClick={setJavaScript}>JavaScript</li>
            </ul>
          </ul>
          <ul className="Services__navlist">
            <li>
              <Link className="Services__navlist__link" to="Services/EventList">
                イベント予定(一覧)
              </Link>
            </li>
            <ul>
              <li onClick={setWorker}>社会人向けICTセミナー</li>
              <li onClick={setKids}>
                ICT人材育成 <br />
                キッズプログラミング教室
              </li>
            </ul>
          </ul>
        </div>
        <Products title={content} />
      </div>
    </div>
  );
};

export default Services;
