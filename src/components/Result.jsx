import React from 'react';
import './Result.css';

const Result = ({bmi}) => {
  const isEmpty = (bmi === undefined || bmi === null || isNaN(bmi));
  
  return (
    <div className="result">
      {isEmpty ? (
        <div className="empty-message">Please enter height and weight</div>
      ) : (
        <div>
          Your BMI is <span>{bmi.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
};

export default Result;
