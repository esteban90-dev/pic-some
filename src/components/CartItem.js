import React from 'react';
import {Context} from '../context';
import PropTypes from 'prop-types';
import useHover from '../useHover';

export default function CartItem(props) {
  const {item} = props;
  const {isHovered, handleMouseEnter, handleMouseLeave} = useHover();

  const {removeFromCart} = React.useContext(Context);

  const trashIconClass = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

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