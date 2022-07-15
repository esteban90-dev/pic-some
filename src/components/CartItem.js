import React from 'react';
import {Context} from '../context';
import PropTypes from 'prop-types';

export default function CartItem(props) {
  const {item} = props;
  const [isHovered, setIsHovered] = React.useState(false);

  const {removeFromCart} = React.useContext(Context);

  const trashIconClass = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <section className="cartItem">
      <div className="cartItem__imageContainer">
        <img src={item.url} className="cartItem__image" alt=""></img>
        <i  
          className={trashIconClass}
          onClick={() => removeFromCart(item)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        </i>
      </div>
      <h2>$5.99</h2>
    </section>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  })
}