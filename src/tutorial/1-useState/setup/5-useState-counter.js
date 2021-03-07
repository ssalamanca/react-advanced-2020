import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0);
  return (
    <>
    <section style={{margin: '4rem 0'}}>
      <h2>Counter header</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>setValue(value+1)}>Increase counter</button>
      <button className='btn' onClick={()=>setValue(value-1)}>Decrease counter</button>
      <button className='btn' onClick={()=>setValue(0)}>Reset counter</button>
    </section>
    </>
  )
};

export default UseStateCounter;
