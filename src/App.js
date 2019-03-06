import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from '../src/auth/SignIn';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/login" exact component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
