import {createContext, useEffect, useState} from 'react';

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  function addToCart(item) {
    setCartItems(prevCartItems => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.push(item);
      return updatedCartItems;
    })
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(data => data.json())
      .then(json => 
        setAllPhotos(json)
      );
  }, []);

  return (
    <Context.Provider value={{allPhotos, toggleFavorite, addToCart}}>
      {props.children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};