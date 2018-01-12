import React, {Component} from 'react'
import {Form, FormControl, FormGroup, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {setFilterDateStart, setFilterDateEnd, fetchClosestAsteroids} from '../Actions.js'
import spinner from '../resources/images/spinner.svg'
class FilterDateClosest extends Component {

    render(){
        const style={
            margin: '15px 0 15px 0',
            fontSize: '1.5em',
            textAlign: 'center',
            textShadow: '0px 0px 1px black'
        }

        return (
            <div style={style} >
                <Form inline>
                    <FormGroup> Search asteroids for wich the closest approach date is between&nbsp;
                     <FormControl type="text" value={this.props.filters.dateStart}
                        placeholder="YYYY-MM-DD" onChange={this.props.setDateStart} /> and&nbsp;
                     <FormControl type="text" value={this.props.filters.dateEnd}
                        placeholder="YYYY-MM-DD" onChange={this.props.setDateEnd} />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.props.requestAsteroids} >
                        { this.props.loading==true?( <img style={{height: "20px"}} src={spinner} /> ):"Go !"} 
                     </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDateStart: (e) => {
            dispatch(setFilterDateStart(e.target.value))
        },
        setDateEnd: (e) => {
            dispatch(setFilterDateEnd(e.target.value))
        },
        requestAsteroids: () => {
            dispatch(fetchClosestAsteroids())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterDateClosest)
