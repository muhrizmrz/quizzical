import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Question from "./Question";

export default function QuestionBlock() {
  const [questions, setQuestions] = useState([]);
  const [check, setCheck] = useState(false)
  

  useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  function handleClick(){
    setCheck(!check)
  } 

  const QuestionElements = questions.map((question) => (
    <Question
      data={question}
      check={check}
      key={nanoid()}
    />
  ));

  function checkAnswers(){
    return () => setState(prev => prev.map(each => {
      if(each.isSelected){
        each.answer == correct_answer ? 
          {...each, color: '#94D7A2'} : {...each, color: '#F8BCBC'}
      } else {
        each.answer == correct_answer ? 
          {...each, color: '#94D7A2'} : {...each, color: 'white'}
      }
    }))
  }

  return (
    <>
      <div className="questionBlock">{QuestionElements}</div>

      <div className="grid">
        <button
          className="buttonStyle"
          onClick={handleClick}
        >
          Check Answers
        </button>
      </div>
    </>
  );
}
