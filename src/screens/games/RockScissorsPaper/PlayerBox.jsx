import React from "react";
import { QuestionMark } from "../../../assets";
import { logger } from "../../../utils";

const gameLogger = logger.createLogger('RockScissorsPaper');


const PlayerBox = (props) => {
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
    gameLogger.log("Computer result:", result);
  }
  return (
    <div className={`box ${result ? ` ${result}` : ""}`}>
      <h1> {props.title}</h1>
      <img
        className="item-img"
        src={props.item ? props.item.img : QuestionMark}
        alt={props.item && props.item.name}
      />
      {result && props.item && <h2>{result}</h2>}
    </div>
  );
};

export default PlayerBox;
