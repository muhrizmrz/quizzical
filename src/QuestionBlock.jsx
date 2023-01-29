import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Question from "./Question";

export default function QuestionBlock() {
  const [questions, setQuestions] = useState([]);
  const [checkAnswers, setCheckAnswers] = useState(false);
  

  useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  const QuestionElements = questions.map((question) => (
    <Question
      data={question}
      checkAnswers={checkAnswers}
      key={nanoid()}
    />
  ));

  return (
    <>
      <div className="questionBlock">{QuestionElements}</div>

      <div className="grid">
        <button
          className="buttonStyle"
          onClick={() => setCheckAnswers((prev) => !prev)}
        >
          Check Answers
        </button>
      </div>
    </>
  );
}
