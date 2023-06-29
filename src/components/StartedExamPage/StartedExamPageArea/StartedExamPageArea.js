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



  const questionNo = currentQuestionIndex + 1 ;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // to display time in minutes 
  const minutes = Math.floor(seconds / 60);
const displaySeconds = seconds % 60;

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

  // Exam will be submitted automatically at 10 minutes 
  useEffect(()=>{

    if(minutes==10){
      handleSubmit();
    }
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "80vh" }}>
      <div style={{ flex: 1 }}>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
      <div style={{ textAlign: "right" }}>  Exam Time: <button>{minutes} : {displaySeconds}</button></div>
      <div style={{ textAlign: "end" }}><button style={{ textAlign: "right", backgroundColor: "red" }} onClick={handleCancel}>Cancel</button></div>
      <div style={{ textAlign: "end" }}><button style={{ textAlign: "right", backgroundColor: "red" }} onClick={handleSubmit}>Submit</button></div>
      </div>
      {questions.length > 0 && (
        <>
           
          <p key={questions[currentQuestionIndex].question_id} style={{marginBottom:"20px"}}>Q.{questionNo} {questions[currentQuestionIndex].question_text}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} style={{marginBottom:"10px"}}>
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
     </div>
      <div style={{  display: "flex", justifyContent: "space-between"  }}>
        
        <button style={{  backgroundColor: "green" }} onClick={handlePrevious}>Previous Question</button>
        <button style={{  backgroundColor: "green" }} onClick={handleNext}>Next Question</button>
      </div>
     
    </div>
  );
}

export default StartedExamPageArea;
