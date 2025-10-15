import React from "react";
import question_mark from "./img/question_mark.jpg";

const Box = (props) => {
  let shouldShowResult = props.item && props.result;
  let result;
  if (
    props.title === "Computer" &&
    shouldShowResult &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("Computer", result);
  }
  return (
    <div className={`box ${result ? ` ${result}` : ""}`}>
      <h1> {props.title}</h1>
      <img
        className="item-img"
        src={props.item ? props.item.img : question_mark}
        alt={props.item && props.item.name}
      />
      {result && props.item && <h2>{result}</h2>}
    </div>
  );
};

export default Box;
