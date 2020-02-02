import React from 'react';
import './App.css';

// components
import Header from './components/Header';
import ProductsContainer from './components/ProductsContainer';
import OrderContainer from './components/OrderContainer';


function App() {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <ProductsContainer></ProductsContainer>
        <OrderContainer></OrderContainer>
      </div>
    </div>
  );
}

export default App;
