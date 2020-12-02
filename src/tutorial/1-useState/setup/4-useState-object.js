import React, { useState } from 'react';

// another way of declaring objects 
const UseStateObject = () => {
  //object 
  //const [person, setpPerson] = useState({name: 'peter', age: '24', message: 'randome message'});
  
  // declaring function changeMessage 
  // ...person is a spread operator -> which helps
  // keep the person's name and age and only change the message 

  const [name, setName] = useState('peter')
  const [age, setAge] = useState('24')
  const [message, setMessage] = useState('random message')
  const changeMessage = () => {
    //setpPerson({...person, message: 'hello world'});
    setMessage('hello world');
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>change message</button>
   </>
  );
};

export default UseStateObject;
