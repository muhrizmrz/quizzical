import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Answers from "./Answers";

export default function Question(props) {
  
  const data = props.data;
  
  const [answers, setAnswers] = useState(loadAnswers())


  useEffect(() => {
    props.check && checkAnswers()
  },[props.check])


  function loadAnswers(){
    const newArray = data.incorrect_answers.map(answer => ({
      id: nanoid(),
      answer: answer,
      isSelected: false,
      isCorrect: false
    }))
    newArray.push({
      id: nanoid(),
      answer: data.correct_answer,
      isSelected: false,
      isCorrect: true
    })
    return newArray
  }

  function handleClick(id){
    return ()=> setAnswers(prev => prev.map(each => {
      return id == each.id ?
        {...each, isSelected: !each.isSelected, color: '#D6DBF5'} :
        {...each, isSelected: false, color: 'white'}
    }))
  }

  function checkAnswers(){
    setAnswers(prev => prev.map(each => {
      if(each.isSelected){
        return each.answer == data.correct_answer ?
        {...each, color: '#94D7A2'} :
        {...each, color: '#F8BCBC'}
      } else {
        return each.answer == data.correct_answer ?
          {...each, color: '#94D7A2'} :
          {...each, color: '#D6DBF5'}
      }
    }))
  }

  
  var question = data.question.replace(/&quot;/g, '"');
  question = question.replace(/&#039;/g, "'");
  return (
    <div style={{ padding: "10px 0", borderBottom: "1px solid #DBDEF0" }}>
      <h3 style={{ color: "#293264" }}>{question}</h3>

      <Answers
        answers={answers}
        correct_answer={data.correct_answer}
        key={nanoid()}
        check={props.check}
        checkAnswers={checkAnswers}
        handleClick={handleClick}
      />

    </div>
  );
}
