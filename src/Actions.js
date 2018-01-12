import fetch from 'cross-fetch'
import NASA_API_KEY from './config/keys.js'

/* action creators */

// triggered when data are loading
export const REQUEST_CLOSEST_ASTEROIDS = 'REQUEST_CLOSEST_ASTEROIDS'
export function requestClosestAsteroids(dateStart, dateEnd){
    return {
        type: REQUEST_CLOSEST_ASTEROIDS,
        dateStart,
        dateEnd
    }
}

// receive asteroids from rest api, for instance
// ex: https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-03&end_date=2017-09-08&api_key=DEMO_KEY
export const RECEIVE_CLOSEST_ASTEROIDS = 'RECEIVE_CLOSEST_ASTEROIDS'

export function receiveClosestAsteroids(asteroids){
    return {
        type: RECEIVE_CLOSEST_ASTEROIDS,
        asteroids
    }
}

export const SET_FILTER_DATE_START = ' SET_FILTER_DATE_START'
export function setFilterDateStart(dateStart){
    return {
        type: SET_FILTER_DATE_START,
        dateStart
    }
}

export const SET_FILTER_DATE_END = ' SET_FILTER_DATE_END'
export function setFilterDateEnd(dateEnd){
    return {
        type: SET_FILTER_DATE_END,
        dateEnd
    }
}

export const RECEIVE_GENERIC_ASTEROIDS = 'RECEIVE_GENERIC_ASTEROID'
export function receiveAsteroids(asteroids){
    return{
        type: RECEIVE_GENERIC_ASTEROIDS,
        asteroids
    }
}

export const THROW_ERROR = 'THROW_ERROR'
export function throwError(msg){
    return{
        type: THROW_ERROR,
        msg
    }
}



/***** Impure function (used by redux-thunk) to communicate with the REST API   ******/
export function fetchClosestAsteroids(){


    // thunk
    return (dispatch, getState) => {
        let dateStart=getState().filters.dateStart
        let dateEnd=getState().filters.dateEnd
        console.log("date start:"+dateStart)
        // first dispatch request event
        dispatch(requestClosestAsteroids(dateStart, dateEnd))

        //then fetch data
        return fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date="+dateStart+"&end_date="+dateEnd+"&api_key="+NASA_API_KEY)
          .then(res => res.json())
          .then(jres => dispatch(receiveClosestAsteroids(jres)))
          .catch( (err) => dispatch(throwError("Request failed. The interval date must be < 7 days !")))

    }
}


export function fetchAsteroids(){


    // thunk
    return (dispatch, getState) => {
        let dateStart=getState().filters.dateStart
        let dateEnd=getState().filters.dateEnd
        console.log("date start:"+dateStart)
        // first dispatch request event
        dispatch(requestClosestAsteroids(dateStart, dateEnd))

        //then fetch data
        return fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key="+NASA_API_KEY)
          .then(res => res.json())
          .then(jres => dispatch(receiveAsteroids(jres)))
    }
}
