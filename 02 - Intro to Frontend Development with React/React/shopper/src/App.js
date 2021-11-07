import React, {useState} from "react";
import Nav from './Nav';
import './App.css';


const App = () => {
  const [activeTab, setActiveTab] = useState('items');

  return(
    <div className="App">
        <Nav 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <main className="App-content">
            <Content tab={activeTab}/>
        </main>
    </div>
  );
};

const Content = ({tab}) => {
  switch(tab){
    default:
    case 'items':
      return <span> the items</span>
    case 'cart':
      return <span> the cart</span>

  }
};

export default App;

/*
function HelloWorld(){
  return(
    <span>Hello World</span>
  );
}

const HelloWorld = function(){
  return(
    <span>Hello World</span>
  );
}

const HelloWorld = () => {
  return(
    <span>Hello World</span>
  );
}
*/
