import React from "react";
import { nanoid } from "nanoid";
import Answers from "./Answers";

export default function Question(props) {
  
  const data = props.data;
  var question = data.question.replace(/&quot;/g, '"');
  question = question.replace(/&#039;/g, "'");
  return (
    <div style={{ padding: "10px 0", borderBottom: "1px solid #DBDEF0" }}>
      <h3 style={{ color: "#293264" }}>{question}</h3>

      <Answers
        answers={[...data.incorrect_answers, data.correct_answer]}
        correct_answer={data.correct_answer}
        key={nanoid()}
        checkAnswers={props.checkAnswers}
      />

    </div>
  );
}
