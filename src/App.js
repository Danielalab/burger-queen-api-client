import React from 'react';
import './App.css';

// components
import Header from './components/Header';
import Products from './components/Products';
import Order from './components/Order';


function App() {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <Products></Products>
        <Order></Order>
      </div>
    </div>
  );
}

export default App;
