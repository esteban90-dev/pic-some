import React from 'react';
import {Context} from '../context';

export default function CartItem(props) {
  const {item} = props;

  const {removeFromCart} = React.useContext(Context);

  return (
    <section className="cartItem">
      <div className="cartItem__imageContainer">
        <img src={item.url} className="cartItem__image" alt=""></img>
        <i className="ri-delete-bin-line" onClick={() => removeFromCart(item)}></i>
      </div>
      <h2>$5.99</h2>
    </section>
  )
}