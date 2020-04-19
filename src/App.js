import React from 'react';
import './App.css';

// components
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import TakeOrder from './pages/TakeOrder';
import Login from './pages/Login';
import { getToken } from './controllers/auth-data';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/tomar-orden"
        render={() => (getToken() === null ? <Redirect to="/" /> : <TakeOrder />)}
      />
    </Switch>
  );
}

export default App;
