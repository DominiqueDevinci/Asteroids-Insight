import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import {Toolbar} from './containers/Toolbar.js'
import {ContainerFilters} from './containers/ContainerFilters.js'
import {ContainerTables} from './containers/ContainerTables.js'
import {ContainerDetails} from './containers/ContainerDetails.js'
import {createBrowserHistory} from 'history'
import './App.css';




class App extends Component {
    constructor(props){
        super(props)
        this.history=createBrowserHistory()
    }

  render() {

    return (
      <Router history={this.history} >
      <Grid id="wrapper" fluid> {/* main wrapper */}
          <Toolbar />

          <div id="page" > {/* css wrapper for my custom style */}
              <ContainerFilters /> {/* filters to select data (date in /closest page, orbit in /browse page ...)*/}
              <ContainerTables /> {/* Tables to display result of fetch */}
              <ContainerDetails /> {/* details about selected asteroid */ }
            </div>
      </Grid>
      </Router>
    );
  }
}

export default App;
