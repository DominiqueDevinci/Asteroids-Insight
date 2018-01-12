import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
import {fetchClosestAsteroids} from '../Actions.js'

class AsteroidTable extends Component {

    componentDidMount(){
        this.props.initFetch();
    }

    render() {

        return (

            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Neo ref.</th>
                        <th>Name </th>
                        <th>Avg Ø (meters)</th>
                        <th>Closest approach date</th>
                        <th>Miss distance (km)</th>
                        <th>Relative velocity (km/h)</th>
                        <th>Orbiting body</th>
                        <th>Abs. magnitude (H)</th>
                        <th>Hazardous ?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.asteroids.map((asteroid)=>{
                            return this.buildRows(asteroid)
                             // example here : https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY
                        })
                    }
                </tbody>
            </Table>

        )
    }


    buildRows(asteroid){
        var rowspanCounter=0; // counter to deal with rowspan ... (global var)
        // i don't want to repeat the same approach date 10x

        var approach=asteroid.close_approach_data[0]?asteroid.close_approach_data[0]:undefined;
        // see if we have some approach data (if yes, take only first)


        return (
            <tr>
                <td> {asteroid.neo_reference_id} </td>
                <td> {asteroid.name} </td>

                <td> {(asteroid.estimated_diameter.meters.estimated_diameter_min+
                    asteroid.estimated_diameter.meters.estimated_diameter_max)/2.}
                </td>
                <td> { approach ? approach.close_approach_date : "" } </td>
                <td> { approach ? approach.miss_distance.kilometers : "" }</td>
                <td> {approach ?  approach.orbiting_body : "" } </td>

                <td> {approach ?  approach.relative_velocity.kilometers_per_hour : ""} </td>
                <td> {asteroid.absolute_magnitude_h} </td>
                <td> {asteroid.is_potentially_hazardous_asteroid?"Yes":"No"} </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return state.resultTable
}
const mapDispatchToProps = (dispatch) => {
    return {
        initFetch: () => dispatch(fetchClosestAsteroids())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidTable)
