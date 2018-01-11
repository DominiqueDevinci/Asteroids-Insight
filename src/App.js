import React, { Component } from 'react';
import Router from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import Toolbar from './components/toolbar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid fluid> // main wrapper
            <Toolbar />
            <Route Path="/" >
                <p> main </p>
            <Route Path="/test" >
                <p> test </p>
            </Route>
        </Grid>
      <Router>
    );
  }
}

export default App;
