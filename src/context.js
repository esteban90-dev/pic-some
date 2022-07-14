import {createContext, useEffect, useState} from 'react';

const {Provider, Consumer} = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(data => data.json())
      .then(json => 
        setAllPhotos(json)
      );
  }, []);

  return (
    <Provider value={{allPhotos}}>
      {props.children}
    </Provider>
  );
}

export {ContextProvider, Consumer as ContextConsumer};