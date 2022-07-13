import {createContext, useState} from 'react';

const {Provider, Consumer} = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);

  return (
    <Provider value={{allPhotos}}>
      {props.children}
    </Provider>
  );
}

export {ContextProvider, Consumer as ContextConsumer};