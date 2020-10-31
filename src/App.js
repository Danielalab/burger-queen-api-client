import React from 'react';
import './App.css';

// components
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import TakeOrder from './pages/TakeOrder';
import Login from './pages/Login';
import { getToken } from './controllers/auth-data';
import KitchenPage from './pages/Kitchen';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/tomar-orden"
        render={() => (getToken() === null ? <Redirect to="/" /> : <TakeOrder />)}
      />
      <Route
        exact
        path="/cocina"
        component={KitchenPage}
        // render={() => (getToken() === null ? <Redirect to="/" /> : <KitchenPage />)}
      />
    </Switch>
  );
}

export default App;
