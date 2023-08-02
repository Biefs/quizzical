import React from 'react';
import "../styles/style.css"


function Quiz() {
  
  return (
    <div className='quiz'>
      <div  className='container'>
          <p className='question'>Select one answer.</p>
          <div  className='answers'>
          <span className='answer'>1</span>
          <span className='answer'>2</span>
          <span className='answer'>3</span>
          <span className='answer'>4</span>
          </div>
        </div>
      <div className='btn-container'>
        <button className="check">Check answers</button>
      </div>
    </div>
  );
}

export default Quiz;