import React from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid';
import htmlReplacer from './utils/htmlReplacer'
import suffleArray from './utils/suffleArray'


function App() {
  const [isStarted, setIsStarted] = React.useState(false)
  const [data, setData] = React.useState([])
  const [isEnd, setIsEnd] = React.useState(false)
  const [result, setResult] = React.useState(0)



  function startQuiz(){
    setIsStarted(true)
  }



  function countResult(){
    setResult(prev => {
      let result = 0
      data.forEach(e => e.selected === e.correct? result++:result)
      return result
    })
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
}, [isEnd])

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

function handleClickCheck(){
  if (data.every(question => question.checked)){
      setIsEnd(prev => !prev)
    } else if(data.every(question => question.selected)){
      setData(oldData => oldData.map(question => ({...question, checked:true})))
      countResult()
  }}


  return (
    <div className="App">
      {isStarted ?
        <Quiz
          key={nanoid()}
          questions = {data}
          handleClickAnswer = {handleClickAnswer}
          check={handleClickCheck}
          result={result}
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
