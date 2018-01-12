import {
REQUEST_CLOSEST_ASTEROIDS,
RECEIVE_CLOSEST_ASTEROIDS,
RECEIVE_GENERIC_ASTEROID
} from '../Actions.js'

// here all reducers wich deals with datas wich will be displayed in tables

const initialState={ // initial state
    loading: true,
    tableView: [],
    chartHazardous: []
}

// state.asteroids : reducer to parse asteroid data
export function asteroids(
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
                    asteroids.push(asteroid)
                    return;
                }) // end of second map
            }) // end of first map


            // convert raw data in proper format
            // in order to use it in my tables, charts and CSV export
            return computeAsteroids(asteroids)
        case RECEIVE_GENERIC_ASTEROID:
                return computeAsteroids(action.asteroids.near_earth_objects)

        case REQUEST_CLOSEST_ASTEROIDS:
            return { // app is fetching, so remove data and display loader
                ...state,
                loading: true, // convention to tell that data are loading ...
                chartHazardous: []
            }
        default:
            return state;
    }
}

function computeAsteroids(asteroids){
    var properData={
        loading: false,
        tableView: [],
        chartHazardous: [{label: "Well knowed", value: 0},
                    {label: "Potentially hazardous", value: 0}]
    }

    asteroids.map((asteroid)=>{

        let approach=asteroid.close_approach_data[0]?asteroid.close_approach_data[0]:undefined;
        // see if we have some approach data (if yes, take only first)

        if(asteroid.is_potentially_hazardous_asteroid){
            properData.chartHazardous[1].value++
        }else{
            properData.chartHazardous[0].value++
        }

        properData.tableView.push(
            {
                neo_reference_id: asteroid.neo_reference_id,
                name: asteroid.name,
                diameter_avg: Math.round(100*(asteroid.estimated_diameter.meters.estimated_diameter_min+
                    asteroid.estimated_diameter.meters.estimated_diameter_max)/2.)/100,
                approach_closest_date: (approach ? approach.close_approach_date : ""),
                approach_orbiting_body: (approach ?  approach.orbiting_body : ""),
                approach_miss_distance: (approach ? approach.miss_distance.kilometers : ""),
                approach_relative_velocity: (approach ?  approach.relative_velocity.kilometers_per_hour : ""),
                absolute_magnitude_h: asteroid.absolute_magnitude_h,
                potentially_hazardous: asteroid.is_potentially_hazardous_asteroid
            }
        );

        return;
    })
    console.log(properData)
    return properData
}
