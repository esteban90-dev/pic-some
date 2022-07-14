import React from 'react';
import CartItem from '../components/CartItem';
import {Context} from '../context';

export default function Cart() {
  const {cartItems} = React.useContext(Context);

  const cartItemElements = cartItems.map(cartItem => {
    return <CartItem key={cartItem.id} item={cartItem} />
  })

  return (
    <main className="cart__page">
      <h1 className="cart__title">Check Out</h1>
     {cartItemElements}
     <h3 className="cart__total">Total:</h3>
     <div className="cart__buttonContainer">
      <button className="cart__orderButton">Place Order</button>
     </div>
    </main>
  );
}