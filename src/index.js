import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {initStore} from './Store.js'
import {Provider} from 'react-redux'
import runTests from './tests/runAllTests.js'
runTests();
// comment these two lines above in prod version

const store=initStore()

ReactDOM.render((
    <Provider store={store} >
        <App />
    </Provider>
), document.getElementById('root'))
