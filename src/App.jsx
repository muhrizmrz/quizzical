import { useEffect, useState } from 'react'
import './App.css'
import QuestionBlock from './QuestionBlock'
import Start from './Start'

function App() {
  const [started, setStarted] = useState(false)

  function startQuiz(){
    setStarted(!started)
  }

  return (
    <div className="App">
      { !started ? <Start startQuiz={startQuiz} /> : <QuestionBlock/> }
    </div>
  )
}

export default App
