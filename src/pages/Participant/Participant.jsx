import React, { useState, useEffect } from 'react';
import './Participant.css'
import Start from './component/Start';
import Question from './component/Question';
import End from './component/End';
import quizData from './data/data.json';
import Alert from 'react-bootstrap/Alert'
import Form from './component/form/form'
let interval;
const Participant = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }
  
  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }
  
    return (
       <div>
  <div className="title">
          <h1>Évaluation Développement Android - Generation Challenge</h1>
        </div>
        <div className="alert">
         <Alert  variant="danger">
         Ce questionnaire a pour but d'évaluer le niveau de l'étudiant afin de départager les groupes dans la formation Développement d'application Android organisée par Generation Challenge USTO. Merci d'y répondre sans faire appel au moteur de recherche ;)
           </Alert>
         </div>
      <div className='main'>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}
      </div>
       </div>  
    );
}

export default Participant
