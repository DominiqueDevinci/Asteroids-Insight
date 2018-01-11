import React, {Component} from 'react'

export class FilterDateClosest extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const style={
            margin: 'auto',
            font-size: '1.5em'
        }

        return (
            <p style={style} > Astroids for wich the closest approach date is between  </p>
        )
    }
}
