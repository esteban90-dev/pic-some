import React from 'react';
import reactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import './index.css';
import {ContextProvider} from './context';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);