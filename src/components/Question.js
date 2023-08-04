import React from 'react';
import Answer from './Answer';



function Question({ question, handleClickAnswer }){

  return (
    <div data-selected={question.selected} className='container'>
      <p className='question'>{question.question}</p>
      <div  className='answers'>
          {question.answers.map(answer => 
          <Answer 
            key={answer} 
            questionId={question.id} 
            selectedAnswer={question.selected} 
            answer={answer}
            correct={question.correct}
            checked={question.checked}
            handleClickAnswer={handleClickAnswer}
          />
          )}
      </div>
    </div>
  )
}


export default Question
