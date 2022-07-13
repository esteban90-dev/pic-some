import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Photos from './pages/Photos';
import Cart from './pages/Cart';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  )
}