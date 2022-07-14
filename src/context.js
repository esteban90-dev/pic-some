import {createContext, useEffect, useState} from 'react';

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);

  function toggleFavorite(id) {
    setAllPhotos(prevPhotos => {
      return prevPhotos.map(photo => {
        if (photo.id === id) {
          return {...photo, isFavorite: !photo.isFavorite}
        }
        return photo;
      })
    });
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(data => data.json())
      .then(json => 
        setAllPhotos(json)
      );
  }, []);

  return (
    <Context.Provider value={{allPhotos, toggleFavorite}}>
      {props.children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};