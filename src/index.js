import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {initStore} from './Store.js'
import {Provider} from 'react-redux'
import runTests from './tests/runAllTests.js'
runTests();
// comment these two lines above in prod version

const store=initStore()

ReactDOM.render((
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
), document.getElementById('root'))
