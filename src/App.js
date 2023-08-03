import React from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid';
import htmlReplacer from './utils/htmlReplacer'
import suffleArray from './utils/suffleArray'


function App() {
  const [isStarted, setIsStarted] = React.useState(false)
  const [data, setData] = React.useState([])




  function startQuiz(){
    setIsStarted(true)
  }







  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => setData(data.results.map(e => {
      return {
        id: nanoid(),
        question: htmlReplacer(e.question),
        answers: suffleArray([...e.incorrect_answers, e.correct_answer]),
        selectedAnswer: null,
        checked: false,
        correct: e.correct_answer
      }
    })))
}, [])




  return (
    <div className="App">
      {isStarted ?
        <Quiz
          key={nanoid()}
          questions = {data}
        />
        :
        <Intro 
          startQuiz={startQuiz}
        />
      } 
    </div>
  );
}

export default App;
