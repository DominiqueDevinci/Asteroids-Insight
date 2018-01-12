import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Col, Alert} from 'react-bootstrap'
import {fetchClosestAsteroids} from '../Actions.js'

class AsteroidTable extends Component {

    componentDidMount(){
        this.props.initFetch();
    }

    render() {
        if(this.props.error){
            return (<Col sm={9} > <Alert bsStyle="danger"> {this.props.error} </Alert> </Col>)
        }
        return  (
            <Col sm={9} >
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Neo ref.</th>
                        <th>Name </th>
                        <th>Avg Ø (meters)</th>
                        <th>Approach date</th>
                        <th>Miss distance (km)</th>
                        <th>Relative velocity (km/h)</th>
                        <th>Orbiting body</th>
                        <th>Abs. magnitude (H)</th>
                        <th>Hazardous ?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.tableView.map((asteroid, key)=>{
                            return (
                                <tr key={asteroid.neo_reference_id} >
                                    <td> {asteroid.neo_reference_id} </td>
                                    <td> {asteroid.name} </td>
                                    <td> {asteroid.diameter_avg} </td>
                                    <td> {asteroid.approach_closest_date} </td>
                                    <td> {asteroid.approach_miss_distance} </td>
                                    <td> {asteroid.approach_relative_velocity} </td>
                                    <td> {asteroid.approach_orbiting_body} </td>
                                    <td> {asteroid.absolute_magnitude_h} </td>
                                    <td> {asteroid.potentially_hazardous?" Yes ": " No "} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return state.asteroids
}
const mapDispatchToProps = (dispatch) => {
    return {
        initFetch: () => dispatch(fetchClosestAsteroids())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsteroidTable)
