import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'


// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)


class TimelineChart extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // all details are in the object this.props.chartData
             <ReactFC {this.props.chartData} />
             // the chartData are mapped from state.charts.timelineChart
             // wich store the state of graph (reducer timelineChart in ./reducers/chartReducers.js)

        )
    }
}

const mapStateToProps = (state) => {
    return state.charts.timelineChart
}

export default connect(mapStateToProps)(TimeChart)
