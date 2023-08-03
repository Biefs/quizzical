import React from 'react';
import Question from './Question'
import "../styles/style.css"


function Quiz({ questions, result, handleClickAnswer, check, }) {
  
  const allChecked = questions.every(question => question.checked)

  return (
    <div className='quiz'>
      {questions.map(question => <Question question={question} handleClickAnswer={handleClickAnswer} key={question.id}/>)}
      <div className='btn-container'>
        {allChecked && <p className='score'>{`You scored ${result+'/'+questions.length} correct answers`}</p>}
        <button onClick={check} className="check">{allChecked? 'Play again':'Check answers'}</button>
      </div>
    </div>
  );
}

export default Quiz;