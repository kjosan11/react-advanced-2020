import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);



  useEffect(() => {
      console.log('call useEffect');
      if(value>=1){
        document.title = `New Messages(${value})`; //displays the message at the tab 
        }
  }, [value]);// if it is empty it will only run at the initial render

  useEffect (() => {
    console.log('hello world');
  }, []);
  
  console.log('render component');

  return (<> 
    <h1> {value}</h1>
    <button className="btn" onClick={() => setValue(value+1)}>
      click me
    </button>
  </>
  );
};

export default UseEffectBasics;
