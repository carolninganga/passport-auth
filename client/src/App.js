import React from 'react';
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Form} />
      <Route exact path='/users/login' component={Login} />
      <Route exact path='/users/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
