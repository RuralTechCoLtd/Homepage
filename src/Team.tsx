import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import CEOimage from "./images/CEOimage.jpg";
import RYOimage from "./images/RYOimage.jpg";
import "./Team.scss";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const teamTheme = createTheme({
  typography: {
    fontSize: 25,
  },
});

const Team: React.FC = () => {
  return (
    <>
      <div className="Team__top"></div>
      <svg
        className="Team__top__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1747 254.5"
      >
        <g
          id="グループ_57"
          data-name="グループ 57"
          transform="translate(0.5 -4757)"
        >
          <g id="グループ_56" data-name="グループ 56">
            <path
              id="wave_5_"
              data-name="wave (5)"
              d="M0,252.786l32.374-31.306C64.626,190.173,129.738,127.56,194,111.907c64.626-15.653,129.737,15.653,194,41.774,64.626,25.73,129.737,47.253,194,41.677,64.626-5.185,140.737-25.647,205-36.115,64.626-10.077,108.761-3.236,173.023,12.711,64.626,15.36,139.715,28.981,203.978,28.687,64.626.293,129.737-21.23,194-20.936,64.626-.294,129.737,21.23,194,20.936,64.626.293,129.737-21.23,161.262-31.306L1746,158.867V315.4H0Z"
              transform="translate(0 4649.289)"
              fill="#ffe1b1"
              opacity="0.719"
            />
            <path
              id="wave_5_2"
              data-name="wave (5)"
              d="M1746,252.786l-32.374-31.306c-32.252-31.306-97.364-93.919-161.626-109.572-64.626-15.653-129.738,15.653-194,41.774-64.626,25.73-129.738,47.253-194,41.677-64.626-5.185-140.737-25.647-205-36.115-64.626-10.077-108.761-3.236-173.023,12.711C721.351,187.314,646.263,200.934,582,200.641c-64.626.293-129.737-21.23-194-20.936-64.626-.294-129.737,21.23-194,20.936-64.626.293-129.737-21.23-161.263-31.306L0,158.867V315.4H1746Z"
              transform="translate(0 4674.289)"
              fill="#ffe1b1"
            />
            <path
              id="wave_4_"
              data-name="wave (4)"
              d="M0,153.091l58.2-8.527c58.2-8.208,201.56-12.146,317.96-20.354,116.4-8.527,136.39,45.789,252.79,54.316,82.388,6.035,302.25-42.17,418.65-16.908,116.4,25.74,232.8,59.21,349.2,67.976s232.8-8.766,291-16.974l58.2-8.527v76.5H0Z"
              transform="translate(0 4730.405)"
              fill="#faeded"
              stroke="#faeded"
              stroke-width="1"
            />
          </g>
        </g>
      </svg>

      <div className="Team">
        {/* <img src={TeamImage} className="--team_image" /> */}
        <div className="Team__wrapper">
          <h2 className="Team__title">Team members</h2>
          <article className="Team__odd">
            <img src={CEOimage} className="Team__img" />
            <div className="Team__container">
              <h3 className="Team__post">代表取締役</h3>
              <h2 className="Team__name">山之内涼</h2>
              <p className="Team__para">
                異色の経歴を持つ彼、未経験から
                業界で経験を積み独自のアイデアで地方から改革を進めます。
                詳細なインタビューは代表挨拶ページへ
              </p>
            </div>
          </article>
          <article className="Team__even">
            <img src={RYOimage} className="Team__img" />
            <div className="Team__container">
              <h3 className="Team__post">エグゼクティブディレクター</h3>
              <h2 className="Team__name">RYO</h2>
              <p className="Team__para">
                異色の経歴を持つ彼、未経験から
                業界で経験を積み独自のアイデアで地方から改革を進めます。
              </p>
            </div>
          </article>
          <Link to="/Greeting" className="Team__toGreeting">
            代表挨拶ページへ{" "}
            <ThemeProvider theme={teamTheme}>
              <DoubleArrowIcon
                style={{
                  marginLeft: "15px",
                  verticalAlign: "middle",
                  border: "solid 1px",
                  borderRadius: "50%",
                  padding: "15px",
                }}
              />
            </ThemeProvider>
          </Link>
        </div>
      </div>
      <svg
        className="Team__bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1747 254.5"
      >
        <g
          id="グループ_58"
          data-name="グループ 58"
          transform="translate(1746.5 5011.5) rotate(180)"
        >
          <path
            id="wave_5_"
            data-name="wave (5)"
            d="M0,252.786l32.374-31.306C64.626,190.173,129.738,127.56,194,111.907c64.626-15.653,129.737,15.653,194,41.774,64.626,25.73,129.737,47.253,194,41.677,64.626-5.185,140.737-25.647,205-36.115,64.626-10.077,108.761-3.236,173.023,12.711,64.626,15.36,139.715,28.981,203.978,28.687,64.626.293,129.737-21.23,194-20.936,64.626-.294,129.737,21.23,194,20.936,64.626.293,129.737-21.23,161.262-31.306L1746,158.867V315.4H0Z"
            transform="translate(0 4649.289)"
            fill="#ffe1b1"
            opacity="0.719"
          />
          <path
            id="wave_5_2"
            data-name="wave (5)"
            d="M1746,252.786l-32.374-31.306c-32.252-31.306-97.364-93.919-161.626-109.572-64.626-15.653-129.738,15.653-194,41.774-64.626,25.73-129.738,47.253-194,41.677-64.626-5.185-140.737-25.647-205-36.115-64.626-10.077-108.761-3.236-173.023,12.711C721.351,187.314,646.263,200.934,582,200.641c-64.626.293-129.737-21.23-194-20.936-64.626-.294-129.737,21.23-194,20.936-64.626.293-129.737-21.23-161.263-31.306L0,158.867V315.4H1746Z"
            transform="translate(0 4674.289)"
            fill="#ffe1b1"
          />
          <path
            id="wave_4_"
            data-name="wave (4)"
            d="M0,153.091l58.2-8.527c58.2-8.208,201.56-12.146,317.96-20.354,116.4-8.527,136.39,45.789,252.79,54.316,82.388,6.035,302.25-42.17,418.65-16.908,116.4,25.74,232.8,59.21,349.2,67.976s232.8-8.766,291-16.974l58.2-8.527v76.5H0Z"
            transform="translate(0 4730.405)"
            fill="#faeded"
            stroke="#faeded"
            stroke-width="1"
          />
        </g>
      </svg>
    </>
  );
};

export default Team;
