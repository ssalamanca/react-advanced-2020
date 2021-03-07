import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  let [persons, setPerson] = React.useState(data);

  const removePerson = (item_id) =>{
    let personsFilter = persons.filter((person)=>person.id !==item_id);
    setPerson(personsFilter);
  }
  return (
    <div>
      {persons.map((person)=>{
        return (
          <div key={person.id}className='item'>
            {person.name}
            <button className='btn' onClick={()=>removePerson(person.id)}>Remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={()=>setPerson([])}>Press the button</button>
    </div>
  );
};

export default UseStateArray;
