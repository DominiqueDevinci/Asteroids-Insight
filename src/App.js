import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'
import Toolbar from './components/toolbar.js'
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
          <Row>  {/* toolbar */}
            <Toolbar />
          </Row>
          <div id="page" >
              <Row> {/* filters row */}
                  <Route Path="/" >
                      <p> main </p>
                  </Route>
                  <Route Path="/test" >
                      <p> test </p>
                  </Route>
              </Row>
              <Row> {/*row of result (list of asteroids) */}

              </Row>
              <Row> {/* row of details about the selected asteroid (if selected) */}

              </Row>
            </div>
      </Grid>
      </Router>
    );
  }
}

export default App;
