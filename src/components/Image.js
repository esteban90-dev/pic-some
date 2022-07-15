import React from 'react';
import {Context} from '../context';
import PropTypes from 'prop-types';
import useHover from '../useHover';

function Image(props) {
  const {isHovered, handleMouseEnter, handleMouseLeave} = useHover();

  const {toggleFavorite, addToCart, removeFromCart, cartItems} = React.useContext(Context);

  function itemIsInCart() {
    if (cartItems.find(cartItem => cartItem.id === props.img.id)) {
      return true;
    }
    return false;
  }

  function heartIcon() {
    if (props.img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    }
    else if (isHovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    }
  }

  function cartIcon() {
    if (itemIsInCart()) {
      return (
        <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img)}></i>
      )
    }
    else if (isHovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
    }
  }

  return (
    <div
      className={`gallery__imageContainer  ${props.className}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="gallery__image"
        src={props.img.url}
        alt=""
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    className: PropTypes.string,
  })
}

export default Image;