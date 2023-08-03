import React from 'react';


function Answer({ answer, questionId, selectedAnswer, correct, checked, handleClickAnswer }){

  const style = {
    background: selectedAnswer === answer? '#D6DBF5': 'none',
    border: selectedAnswer === answer? '1.5px solid #D6DBF5': '1.5px solid #293264',
  } 



  if(checked){
    if(selectedAnswer === correct && selectedAnswer === answer){
      style.background = '#94D7A2'
      style.border = '1.5px solid #94D7A2'
    } else if(selectedAnswer === answer && selectedAnswer !== correct){
      style.background = '#F8BCBC'
      style.border = '1.5px solid #F8BCBC'
      style.opacity = '0.5'
    } else if (answer === correct){
      style.background = '#94D7A2'
      style.border = '1.5px solid #94D7A2'
    } else {
      style.background = 'none'
      style.opacity = '0.5'
    }
  }

  return (
    <span style={style} data-question-id={questionId} onClick={(e)=>handleClickAnswer(e)} id={answer} className='answer'>{answer}</span>
  )
}

export default Answer