import React, {Component} from 'react'
import loader from '../resources/images/loader.svg'

const style={
    margin: '50px 0 0 0'
}

export class ShadowLoader extends Component{
    render() {
        return ( <div style={style} ><img src={loader} /></div> )
    }
}
