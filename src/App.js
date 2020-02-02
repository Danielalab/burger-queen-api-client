import React from 'react';
import './App.css';

// components
import Header from './components/Header';
import TakeOrder from './pages/TakeOrder';


function App() {
  return (
    <div>
      <Header></Header>
      <TakeOrder></TakeOrder>
    </div>
  );
}

export default App;
