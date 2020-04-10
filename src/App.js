import React from 'react';
import './App.css';

// components
import { HashRouter, Switch, Route } from 'react-router-dom';
import TakeOrder from './pages/TakeOrder';
import Login from './pages/Login';


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/tomar-orden" component={TakeOrder} />
      </Switch>
    </HashRouter>
  );
}

export default App;
