import React from 'react';
import {Context} from '../context';
import Image from '../components/Image';
import {imageSizer} from '../imageSizer';

export default function Photos() {
  const {allPhotos} = React.useContext(Context);

  const images = allPhotos.map( photo => {
    return (
      <Image
        key={photo.id}
        id={photo.id}
        url={photo.url}
        className={imageSizer()}
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