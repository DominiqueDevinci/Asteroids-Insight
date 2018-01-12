import { createStore, applyMiddleware, combineReducers } from 'redux'
import {resultTable} from './reducers/resultTable.js'
import {filters} from './reducers/filters.js'
import thunk from 'redux-thunk'

const initialState={
    resultTable: {
        loading: true,
        asteroids: []
    },
    filters: filters() // init default state tree with reducer
}

export function initStore(){
    return createStore(
        combineReducers({resultTable, filters}),
        initialState,
        applyMiddleware(thunk)
    );
}
