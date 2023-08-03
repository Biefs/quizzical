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

function handleClickAnswer(e) {
  const allChecked = data.every(question => question.checked)
  if(!allChecked){
    setData(oldData => oldData.map(question => {
      return question.id === e.target.dataset.questionId? 
       {...question,
         selected:e.target.id
       }: {...question}
     }))
  }
}



  return (
    <div className="App">
      {isStarted ?
        <Quiz
          key={nanoid()}
          questions = {data}
          handleClickAnswer = {handleClickAnswer}
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
