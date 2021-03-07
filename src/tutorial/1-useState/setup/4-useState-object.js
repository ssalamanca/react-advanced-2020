import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "Santiago",
    age: 23,
    message: "My message"
  });
  const changeMessage = () =>{
    setPerson({...person, message:'hello world'});
  };

  return(
    <div>
      {person.name}<br/>
      {person.age}<br/>
      {person.message}<br/>
      <button className='btn' onClick={changeMessage}>Change the message</button>
    </div>
  );

};

export default UseStateObject;
