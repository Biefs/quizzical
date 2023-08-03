import React from 'react';
import "../styles/style.css"

function Intro({ startQuiz }) {
    return (
        <div className='intro'>
            <h1>Quizzical</h1>
            <p>Five easy questions about everything from history to video games</p>
            <button onClick={startQuiz} className='intro-btn'>Start quiz</button>
        </div>
    );
}

export default Intro;
