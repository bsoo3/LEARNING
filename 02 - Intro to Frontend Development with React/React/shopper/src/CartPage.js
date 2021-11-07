import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({items}) {
    return (
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <button className="Item-addToCart" 
                        onClick={() => onAddToCart(item)}>
                            Add to cart
                        </button>
                    </Item>
                </li>    
            )}

        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default CartPage;
