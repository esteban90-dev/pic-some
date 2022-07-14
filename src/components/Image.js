import React from 'react';

export default function Image(props) {
  const [isHovered, setIsHovered] = React.useState(false);

  const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>
  const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>

  function handleEnter(event) {
    setIsHovered(true);
  }

  function handleLeave(event) {
    setIsHovered(false);
  }

  return (
    <div
      className={props.className}
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
    >
      <img
        className="gallery__image"
        src={props.url}
        alt=""
      />
      {heartIcon}
      {cartIcon}
    </div>
  );
}