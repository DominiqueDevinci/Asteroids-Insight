import { createStore, applyMiddleware, combineReducers } from 'redux'
    import {asteroids} from './reducers/asteroids.js'
import {filters} from './reducers/filters.js'
import thunk from 'redux-thunk'

const initialState={
    asteroids: {
        loading: true,
        tableView: [],
        chartHazardous: []
    },
    filters: filters() // init default state tree with reducer
}

export function initStore(){
    return createStore(
        combineReducers({asteroids, filters}),
        initialState,
        applyMiddleware(thunk)
    );
}
