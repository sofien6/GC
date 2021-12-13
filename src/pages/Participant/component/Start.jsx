import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card text-dark bg-light mb-3">
      <div className="card-body">
        <div className="content">
          <h1 className="card-title">Start the quiz</h1>
          <p className="card-text">Good luck!</p>
          <button className="btn bg-warning" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;