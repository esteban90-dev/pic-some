import React from 'react';

export default function CartItem(props) {
  const {item} = props;

  return (
    <section className="cartItem">
      <div className="cartItem__imageContainer">
        <img src={item.url} className="cartItem__image" alt=""></img>
      </div>
      <h2>$5.99</h2>
    </section>
  )
}