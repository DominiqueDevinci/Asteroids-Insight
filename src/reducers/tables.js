import {
REQUEST_CLOSEST_ASTEROIDS,
RECEIVE_CLOSEST_ASTEROIDS
} from '../Actions.js'

// here all reducers wich deals with datas wich will be displayed in tables


// state.tables.closest : list of closest asteroids between two given dates
export function closest(
    state={ // initial state
        length: 0,
        dateStart: new Date().toLocaleString(),
        dateEnd:  new Date().toLocaleString(),
        asteroids: {}
    }, action
){

    switch(action.type){
        case RECEIVE_CLOSEST_ASTEROIDS:
            if(!action.asteroids){
                return state // no data, return initial state
            }
            // receive this kind of data in action.asteroids
            // ex: https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-03&end_date=2017-09-08&api_key=DEMO_KEY
            return {
                length: action.asteroids.element_count,
                asteroids: action.asteroids.near_earth_objects // asteroids indexed by date of closest approach
            }
        case REQUEST_CLOSEST_ASTEROIDS:
            return { // app is fetching, so remove data and display loader
                length: -1, // convention to tell that data are loading ...
                dateStart: action.dateStart,
                dateEnd: action.dateEnd,
                asteroids: {}
            }
        default:
            return state;
    }
}
