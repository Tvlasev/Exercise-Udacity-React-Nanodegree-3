import React from 'react';

const Score = ({numCorrect, numQuestions}) => {
  return (
    <div>
      Your Score: {numCorrect}/{numQuestions}
    </div>
  );
};

export default Score;
