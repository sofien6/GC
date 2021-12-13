import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils';
import { Button , Modal } from "react-bootstrap";
import Form from './form/form'
const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [show, setShow] = useState(false);
  const [showEmail,setShowEmail] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const on_set_show_email = () =>{
      setShowEmail(false)
      console.log('submit clicked')
    }

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(

    <>
          {showEmail && <Form onSubmitEmail={on_set_show_email}/>}
          {showEmail == false &&  <div className="card text-dark bg-light mb-3">
      <div className="card-body">
       <div className="content">
          <h3 className='card-title'>Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <Button variant="warning" onClick={handleShow}>
          Check your answers
          </Button>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> your Answer </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p><strong>{result.q}</strong></p>
                <p className={result.a === data[i].answer ? 'badge bg-success  p-3' : ' badge bg-danger has-text-white p-3'}>Your answer: {result.a}</p> <br/>
                {result.a !== data[i].answer && <p className="badge bg-success has-text-white p-3">Correct answer: {data[i].answer}</p>}
              </li>
            ))}
          </ul>
        </Modal.Body>
          
        </Modal>
{/*          <button className="btn btn-success m-1" onClick={onReset}>Try again</button>
*/}        </div>
      </div>
      
    </div>}
    </>
    
  );
}

export default End;