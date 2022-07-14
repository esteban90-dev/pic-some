import React, { useEffect } from 'react';
import CartItem from '../components/CartItem';
import {Context} from '../context';

export default function Cart() {
  const {cartItems, emptyCart} = React.useContext(Context);
  const [isOrdered, setIsOrdered] = React.useState(false);

  const cartItemElements = cartItems.map(cartItem => {
    return <CartItem key={cartItem.id} item={cartItem} />
  })

  function totalCost() {
    // we are using $5.99 as a fake cost,
    // so just multiply that times number of cart items
    return cartItems.length * 5.99;
  }

  function placeOrder() {
    setIsOrdered(true);
  }

  useEffect(() => {
    if (isOrdered) {
      setTimeout(() => {
        setIsOrdered(false);
        emptyCart();
      }, 3000);
    }
  }, [isOrdered])

  return (
    <main className="cart__page">
      <h1 className="cart__title">Check Out</h1>
     {cartItemElements}
     <h2 className="cart__total">Total: ${totalCost()}</h2>
     {cartItems.length > 0 &&
      <div className="cart__buttonContainer">
        <button className="cart__orderButton" onClick={placeOrder}>
          {isOrdered ?
            "Ordering..." :
            "Place Order"
          }
        </button>
      </div>
     }
    </main>
  );
}