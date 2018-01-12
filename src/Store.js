import { createStore, combineReducers } from 'redux'
import {resultTable} from './reducers/resultTable.js'

export function initStore(){
    return createStore(
        combineReducers({resultTable})
    );
}
