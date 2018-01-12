import {
REQUEST_CLOSEST_ASTEROIDS,
RECEIVE_CLOSEST_ASTEROIDS
} from '../Actions.js'

// here all reducers wich deals with datas wich will be displayed in tables

const initialState={ // initial state
    loading: true,
    dateStart: new Date().toLocaleString(),
    dateEnd:  new Date().toLocaleString(),
    asteroids: []
}

// state.tables.closest : list of closest asteroids between two given dates
export function resultTable(
    state=initialState, action
){

    switch(action.type){
        case RECEIVE_CLOSEST_ASTEROIDS:
            if(!action.asteroids){
                return state // no data, return initial state
            }

            // receive this kind of data in action.asteroids
            // ex: https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-03&end_date=2017-09-08&api_key=DEMO_KEY

            // and we want same struct than here (to use same AsteroidTable)
            //https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY

            var asteroids=[]
            console.log(action.asteroids.near_earth_objects)

            Object.keys(action.asteroids.near_earth_objects).map( (approachDate) => {
                action.asteroids.near_earth_objects[approachDate].map((asteroid) => {
                    asteroids.push(
                        {...asteroid,
                           close_approach_data : [
                                 {
                                   close_approach_date : approachDate,
                                   relative_velocity : asteroid.relative_velocity,
                                   miss_distance : asteroid.miss_distance,
                                   orbiting_body : asteroid.orbiting_body
                                 }
                             ]
                         }
                    ) // end of append
                }) // end of second map
            }) // end of first map

            return {
                loading: false,
                asteroids
            }
        case REQUEST_CLOSEST_ASTEROIDS:
            return { // app is fetching, so remove data and display loader
                loading: true, // convention to tell that data are loading ...
                dateStart: action.dateStart,
                dateEnd: action.dateEnd,
                asteroids: state.asteroids // dont empty data at once (waiting for new data before remove old data)
            }
        default:
            return state;
    }
}
