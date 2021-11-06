import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
  return <div>
      <Hello/> 
    </div>;
}

function Hello(){
  /*
  const name = 'Jane!';
  return(
    <span>Hello {name} </span>
  );
  */
 var isHello = false;
 return (
   <span>{isHello ? 'Hello': 'Goodbye'}</span>
 );
}
/*
function World(){
  return <span>World</span>;
}

function Hello(){
  return React.createElement(
    'div',
    {}
    ,'Hello World'
  );
}
*/

ReactDOM.render(
  <HelloWorld/>, document.querySelector('#root')
);
