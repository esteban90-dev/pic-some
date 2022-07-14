import React from 'react';
import {Context} from '../context';
import PropTypes from 'prop-types';

function Image(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  const {toggleFavorite, addToCart} = React.useContext(Context);

  const heartIcon = isHovered &&
    <i
      className={props.img.isFavorite ? 
        "ri-heart-fill favorite" : 
        "ri-heart-line favorite"}
      onClick={() => toggleFavorite(props.img.id)}
    ></i>

  const cartIcon = isHovered && 
    <i
      className="ri-add-circle-line cart"
      onClick={() => addToCart(props.img)}
    ></i>

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
      {heartIcon}
      {cartIcon}
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