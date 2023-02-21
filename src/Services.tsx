import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useInView } from "react-intersection-observer";

import { Box, Chip } from "@mui/material";

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
        to="/Assist"
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
        to="/EntrustedDevelopment"
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
        to="/PackagedApplication"
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
        to="/Homepage"
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
        to="/Git"
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
        to="/Hosting"
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
        to="/JavaScript"
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
        to="/EventList/EventDetails"
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
        to="/Kids"
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
  const contentsString: string[] = [
    "engineer",
    "package",
    "assist",
    "homepage",
    "git",
    "hosting",
    "javascript",
    "worker",
    "kids",
  ];
  const setContents: (() => void)[] = contentsString.map((content) => {
    return () => {
      setContent(content);
    };
  });

  console.log(setContents);

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

  const { ref, inView } = useInView({
    rootMargin: "-100px", // ref要素が現れてから100px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  const labelsAndFunctions: [string, () => void][] = [
    ["受託開発", setEngineer],
    ["パッケージアプリケーション開発", setPackage],
    ["Assist", setAssist],
    ["ホームページ制作", setHomepage],
    ["Git", setGit],
    ["ホスティング", setHosting],
    ["JavaScript", setJavaScript],
    ["イベント予定(一覧)", Function],
    ["社会人向けICTセミナー", setWorker],
    ["キッズプログラミング教室", setKids],
  ];
  return (
    <div
      ref={ref}
      style={
        inView
          ? { opacity: 100, transform: "translateY(0)" }
          : { opacity: 0, transform: "translateY(30px)" }
      }
      className="Services"
      id="Services"
    >
      <h2 className="Services__title">Services</h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px 10px",
          justifyContent: "center",
          "@media screen and (min-width:961px)": {
            display: "none",
          },
        }}
      >
        {labelsAndFunctions.map((elem, index) => {
          if (elem === labelsAndFunctions[7]) {
            return (
              <Link
                key={index}
                to="/EventList"
                style={{ textDecoration: "none" }}
              >
                <Chip label={elem[0]} color="primary" variant="outlined"></Chip>
              </Link>
            );
          }
          return (
            <Chip
              key={index}
              label={elem[0]}
              color="primary"
              variant="outlined"
              onClick={elem[1]}
            ></Chip>
          );
        })}
      </Box>
      <div className="Services__container">
        <div className="Services__childContainer">
          <ul className="Services__navlist">
            <li className="Services__navlist__cloudApp">
              クラウドアプリケーション開発
            </li>
            <ul className="Services__navlist__item">
              <li onClick={setContents[0]}>受託開発</li>
              <li onClick={setPackage}>パッケージアプリケーション開発</li>
              <li onClick={setAssist}>Assist</li>
            </ul>
          </ul>
          <ul className="Services__navlist">
            <li className="Services__navlist__ICT">ICTセミナー</li>
            <ul className="Services__navlist__item">
              <li onClick={setHomepage}>ホームページ制作</li>
              <li onClick={setGit}>Git</li>
              <li onClick={setHosting}>ホスティング</li>
              <li onClick={setJavaScript}>JavaScript</li>
            </ul>
          </ul>
          <ul className="Services__navlist">
            <li className="Services__navlist__item">
              <Link className="Services__navlist__link" to="/EventList">
                イベント予定(一覧)
              </Link>
            </li>
            <ul className="Services__navlist__item">
              <li onClick={setWorker}>社会人向けICTセミナー</li>
              <li onClick={setKids} style={{ whiteSpace: "pre-wrap" }}>
                ICT人材育成
                <br />
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
