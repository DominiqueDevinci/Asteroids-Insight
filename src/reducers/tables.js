// here all reducers wich deals with datas wich will be displayed in tables


// state.tables.closest : list of closest asteroids between two given dates
export default function closest(
    state={ // initial state
        length: 0,
        asteroids: {}
    }, action
){
    switch(action.type){
        case RECEIVE_CLOSEST_ASTEROIDS:
            // receive this kind of data in action.asteroids
            // ex: https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-03&end_date=2017-09-08&api_key=DEMO_KEY
            return {
                length: action.asteroids.element_count,
                asteroids: action.asteroids.near_earth_objects // asteroids indexed by date of closest approach
            }
        default:
            return state;
    }
}
