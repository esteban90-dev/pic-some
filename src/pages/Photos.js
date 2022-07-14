import React from 'react';
import {Context} from '../context';
import Image from '../components/Image';
import {getClass} from '../getClass';

export default function Photos() {
  const {allPhotos} = React.useContext(Context);

  const images = allPhotos.map( (photo, i) => {
    return (
      <Image
        key={photo.id}
        img={photo}
        className={getClass(i)}
      />
    );
  });

  return (
    <>
      <h1>Photos</h1>
      <div className="gallery">
        {images}
      </div>
    </>
  )
}