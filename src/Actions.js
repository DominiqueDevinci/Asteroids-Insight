

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
