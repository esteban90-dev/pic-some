import {createContext} from 'react';

const {Provider, Consumer} = createContext();

function ContextProvider(props) {
  return (
    <Provider value="">
      {props.children}
    </Provider>
  );
}

export {ContextProvider, Consumer as ContextConsumer};