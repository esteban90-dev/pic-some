import React from 'react';
import {Context} from '../context';
import Image from '../components/Image';

export default function Photos() {
  const {allPhotos} = React.useContext(Context);

  const images = allPhotos.map( photo => {
    return (
      <Image
        key={photo.id}
        id={photo.id}
        url={photo.url}
        isFavorite={photo.isFavorite}
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