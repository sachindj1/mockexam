import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StartedExamPageArea({ subjectid }) {
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/get/subject/questions/${subjectid}`);
        const data = await response.json();
        setQuestions(data.result);
        setSelectedOptions(new Array(data.result.length).fill(-1));
        setCorrectAnswers(data.result.map(question => +question.answer));
      } catch (err) {
        console.log("Error in getting data ", err);
      }
    };

    fetchQuestion();
  }, [subjectid]);

  const handleCancel = () => {
    navigate("/userlandingpage");
  };

  const handleSubmit = () => {
    const selectedAll = {
      currentQuestionIndex,
      selectedOptions,
      correctAnswers,
      isAnswerCorrect
    };
    navigate("/resultpage", { state: { selectedAll } });
  };

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

  const handleOptionSelect = (optionIndex) => {
    const selectedOption = questions[currentQuestionIndex].options[optionIndex];
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  
    const updatedIsAnswerCorrect = [...isAnswerCorrect];
    updatedIsAnswerCorrect[currentQuestionIndex] = selectedOption === correctAnswer;
    setIsAnswerCorrect(updatedIsAnswerCorrect);
  };
  

  return (
    <>
      <div style={{ textAlign: "right" }}>Exam Time: <button>{seconds}</button></div>
      <div style={{ textAlign: "end" }}><button style={{ textAlign: "right", backgroundColor: "red" }} onClick={handleCancel}>Cancel</button></div>
      <div style={{ textAlign: "end" }}><button style={{ textAlign: "right", backgroundColor: "red" }} onClick={handleSubmit}>Submit</button></div>

      {questions.length > 0 && (
        <>
          <p key={questions[currentQuestionIndex].question_id}>{questions[currentQuestionIndex].question_text}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleOptionSelect(index)}
                  style={{ backgroundColor: selectedOptions[currentQuestionIndex] === index ? 'green' : 'transparent' }}
                >
                  {option}
                </button>
              </li>
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
