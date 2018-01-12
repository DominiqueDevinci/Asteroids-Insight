import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form} from 'react-bootstrap'

class FilterGeneric extends Component {

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
                    Other filters and awesome stuffs (not implemente) ...

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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterGeneric)
