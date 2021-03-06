import React from 'react';

const ErrorExample = () => {
  let randomTitle = 'ramdom thing';
  function handleClick(){
    alert("button pressed");
  }
  return (
    <React.Fragment>
      <h2>{randomTitle}</h2>
      <button className='btn' onClick={handleClick}>Press the button</button>
    </React.Fragment>
  );
};

export default ErrorExample;
