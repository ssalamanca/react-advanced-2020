import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');

  const changeTitle = () =>{
    if(title === 'random title'){
      setTitle('hello world');
    }else{
      setTitle('random title');
    }
    
  }
  return(
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' onClick={changeTitle}>Press the button</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
