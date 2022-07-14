import React from 'react';
import {imageSizer} from '../imageSizer';

export default function Image(props) {
  return (
    <div className={`${imageSizer()}`}>
      <img className="gallery__image" src={props.url} alt=""></img>
    </div>
  );
}