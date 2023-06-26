import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StartedExamPageArea({ subjectid }) {
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    console.log("222>>>>>", subjectid);

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [subjectid]);

  function handleCancel() {
    navigate("/userlandingpage");
  }

  function handleSubmit() {
    navigate("/userlandingpage");
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      const subjectIDD = subjectid;

      try {
        const response = await fetch(`http://localhost:5000/api/get/subject/questions/${subjectIDD}`);
        const data = await response.json();
        console.log(data.result);
        setQuestions(data.result);
      } catch (err) {
        console.log("Error in getting data ", err);
      }
    };

    fetchQuestion();
  }, [subjectid]);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>Exam Time: <button>{seconds}</button></div>
      <div style={{ textAlign: "end" }}><button style={{ textAlign: "right", backgroundColor: "red" }} onClick={handleCancel}>Cancel</button></div>
      <div style={{ textAlign: "end" }}><button style={{ textAlign: "right", backgroundColor: "red" }} onClick={handleSubmit}>Submit</button></div>
     
      {questions.length > 0 && (
        <>
         <p key={questions[currentQuestionIndex].question_id}>{questions[currentQuestionIndex].question_text
}</p>
        <ul>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        </>
      )}
      <div style={{ textAlign: "left" }}>
        <button style={{ textAlign: "left", backgroundColor: "green" }} onClick={handlePrevious}>Previous Question</button>
      </div>
      <div style={{ textAlign: "right" }}>
        <button style={{ textAlign: "right", backgroundColor: "green" }} onClick={handleNext}>Next Question</button>
      </div>
    </>
  );
}

export default StartedExamPageArea;
