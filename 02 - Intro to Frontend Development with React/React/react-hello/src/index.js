import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
  return <div><Hello/> <World/></div>
}

function Hello(){
  return(
    <span>Hello</span>
  );
}

function World(){
  return <span>World</span>;
}
/*
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
