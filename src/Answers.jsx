import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const [clicked, setClicked] = useState("");

  useEffect(function(){
    console.log(clicked)
  },[props.checkAnswers])

  function handleClick(answer) {
    return (e) => {
      setClicked(prev => answer);
    };
  }

  function changeBgColor(color) {
    return () => setBgColor(color);
  }

  function checkAnswers(correct_answer, answer) {
    // ERROR : CLICKED IS EMPTY
    if (clicked == answer) {
      return clicked == correct_answer ? "#94D7A2" : "#F8BCBC";
    } else {
      return answer == correct_answer ? "#94D7A2" : "white";
    }
  }

  

  const answersElements = props.answers.map((answer) => {

    return (
      <li
        onClick={handleClick(answer)}
        style={{
          background:
            props.checkAnswers
                ? checkAnswers(props.correct_answer, answer)
                : answer == clicked ? "#D6DBF5" : "white"
        }}
        key={nanoid()}
      >
        {answer}
      </li>
    );
  });

  return (
    <ul className="flex" style={{ marginLeft: "-40px" }}>
      {answersElements}
    </ul>
  );
}
