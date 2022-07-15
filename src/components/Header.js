import React from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../context';

export default function Header() {
  const {cartItems} = React.useContext(Context);

  const isCartFull = cartItems.length > 0;

  return (
    <header className="header">
      <Link to="/pic-some">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/pic-some/cart">
        {isCartFull ? 
        <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> :
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
        
      </Link>
    </header>
  )
}