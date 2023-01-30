import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const [clicked, setClicked] = useState('');

  

  const answersElements = props.answers.map((answer) => {
    return (
      <li
        onClick={props.handleClick(answer.id)}
        key={nanoid()}
        style={{
          background: answer.color
        }}
      >
        {answer.answer}
      </li>
    );
  });

  return (
    <ul className="flex" style={{ marginLeft: "-40px" }}>
      {answersElements}
    </ul>
  );
}
