import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const randNumFunction = () => Math.floor(Math.random() * answers.length);
  let randIdx;
  const updateBall = () => {
    randIdx = randNumFunction();
    setMessage(answers[randIdx].msg);
    setColor(answers[randIdx].color);
  };
  return (
    <button
      className={`EightBall-${color}`}
      id="EightBall"
      onClick={updateBall}
    >
      {message}
    </button>
  );
};

export default EightBall;
