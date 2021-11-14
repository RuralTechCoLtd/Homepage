import { setRef } from "@material-ui/core";
import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  sub: string;
  para: string;
  slides: [{ img: string; exp: string }];
};
const Product: React.FC<Props> = (props: Props) => {
  return (
    <div className="CommonDetails">
      <div className="CommonDetails__container">
        <Link to="/" className="CommonDetails__back">
          Services
        </Link>
        <h2 className="CommonDetails__title">{props.title}</h2>
        <p className="CommonDetails__sub">- {props.sub} -</p>
        <p className="CommonDetails__para">{props.para}</p>
      </div>
      <ul className="CommonDetails__slide">
        {props.slides};
        <li className="CommonDetails__slide__items">
          <img src="https://placehold.jp/600x400.png"></img>
          <p>explain explain explain explain explain explain explain explain</p>
        </li>
      </ul>
    </div>
  );
};

export default Product;
