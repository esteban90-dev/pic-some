import React from 'react';
import {Context} from '../context';
import PropTypes from 'prop-types';

function Image(props) {
  const [isHovered, setIsHovered] = React.useState(false);

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

  function handleEnter(event) {
    setIsHovered(true);
  }  

  function handleLeave(event) {
    setIsHovered(false);
  }

  return (
    <div
      className={`image__container  ${props.className}`}
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
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