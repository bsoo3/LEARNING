import React from "react";

const Nav = ({activeTab, onTabChange}) => {

    return(
        <nav className="App-nav">
            <ul>
                <li className="App-nav-item">
                    <button>Items</button>
                </li>
                <li className = "App-nav-item">
                    <button>Cart</button>
                </li>
            </ul>
        </nav>
);
};


export default Nav;