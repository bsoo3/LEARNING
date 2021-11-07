import React, {useState} from "react";
import ItemPage from "./ItemPage";
import {items} from "./static-data";
import Nav from './Nav';
import './App.css';


const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  }

  return(
    <div className="App">
        <Nav 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        <div>
          {cart.length} items
        </div>
        <main className="App-content">
            <Content tab={activeTab} onAddToCart={addToCart} />
        </main>
    </div>
  );
};

const Content = ({tab , onAddToCart}) => {
  switch(tab){
    default:
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart} />
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
