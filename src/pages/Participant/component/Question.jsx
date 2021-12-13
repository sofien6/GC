import React, { useState, useEffect, useRef } from 'react';
import Alert from 'react-bootstrap/Alert'
const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = () => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }

  return(
    <div className="card text-dark bg-light mb-3">
      <div className="card-body">
        <div className="content">
          <h2 className="mb-5 card-title">{data.question}</h2>
          <div  ref={radiosWrapper}>
            {data.choices.map((choice, index) => (
              
              <div class="form-check">
              <input className="form-check-input" type="radio" name="answer" value={choice} onChange={changeHandler} id="answer"/>
              <label className="form-check-label" for="answer">
              <h5>{choice}</h5>
              </label>
            </div>
            ))}
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="card-footer">
          <button type="button" className="btn btn-warning " onClick={nextClickHandler}>Next question</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;