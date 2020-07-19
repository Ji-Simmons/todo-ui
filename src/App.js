import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Input from './pages/Input';
import './App.scss';
import Catalog from "./pages/Catalog";
import TestForm from "./pages/TestForm";
import TestForm2 from "./pages/TestForm2";


import MyForm from "./pages/MyForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  logmein = event => {
    console.log("logging in");
    event.preventDefault();
    this.setState({
      loggedIn: true
    });
  };
  logmeout = () => {
    this.setState({
      loggedIn: false
    });
  };
  render() {
    return (
      
      <Router>
          <Switch>
            <Route exact path="/">
            <Catalog />
            </Route>
            <Route exact path="/Catalog">
              <Catalog />
            </Route>
            <Route exact path="/Input">
              <Input />
            </Route>
            <Route exact path="/TestForm">
              <TestForm />
            </Route>
            <Route exact path="/TestForm2">
              <TestForm2 />
            </Route>
            
            
          </Switch>
      </Router>
    );
  }
}

export default App;