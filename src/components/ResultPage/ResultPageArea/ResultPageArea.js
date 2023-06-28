import React from 'react';

function ResultPageArea({ Result }) {
  const result = Result;
  const isAnswerCorrect = result.selectedAll.isAnswerCorrect;

  const passThreshold = Math.ceil(isAnswerCorrect.length / 2);
  const passCount = isAnswerCorrect.filter((value) => value).length;

  const isPass = passCount >= passThreshold;

  return (
    <div>
      <h2>Result Page</h2>
      {isPass ? (
        <p>Congratulations! You have passed the exam.</p>
      ) : (
        <p>Sorry! You have failed the exam.</p>
      )}
    </div>
  );
}

export default ResultPageArea;
