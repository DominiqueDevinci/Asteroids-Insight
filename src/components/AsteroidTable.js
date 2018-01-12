import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'

class AsteroidTable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th> Closest approcach date </th>
                        <th> Neo ref. </th>
                        <th> Name </th>
                        <th> Miss distance (km) </th>
                        <th> Avg Ø (meters) </th>
                        <th> Abs. magnitude (H) </th>
                        <th> Relative velocity (km/h) </th>
                        <th> Orbiting body </th>
                        <th> Potentially hazardous ? </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.asteroids.map((asteroid)=>{
                            this.buildRows(asteroid)
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

        return (
            <tr>
                <td>  </td>
                <td> {asteroid.neo_reference_id} </td>
                <td> {asteroid.name} </td>
                <td> miss_distance.kilometers </td>
                <td> {(asteroid.estimated_diameter.meters.estimated_diameter_min+
                    asteroid.estimated_diameter.meters.estimated_diameter_max)/2.}
                </td>
                <td> {asteroid.absolute_magnitude_h} </td>
                <td> {asteroid.relative_velocity.kilometers_per_hour} </td>
                <td> {asteroid.orbiting_body} </td>
                <td> {asteroid.is_potentially_hazardous_asteroid?"Yes":"No"} </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.resultTable)
    return state.resultTable
}

export default connect(mapStateToProps)(AsteroidTable)
