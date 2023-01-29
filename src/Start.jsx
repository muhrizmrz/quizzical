import React from 'react'

export default function Start(props){
    
    return(
        <div className='flex-center' style={{padding:'90px'}}>
            <h3>Quizzical</h3>
            <button className="buttonStyle" onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}