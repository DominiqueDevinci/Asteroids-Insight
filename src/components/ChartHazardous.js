import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import {Col} from 'react-bootstrap'
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import {connect} from 'react-redux'

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)


class ChartHazardous extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        const chartHeader={
            caption: " Ratio of potentially hazardous previsions ",
            subCaption: " Between "+this.props.filters.dateStart+" and "+this.props.filters.dateEnd,
            showPercentInTooltip: 0,
            decimals: 1,
            useDataPlotColorForLabels: 1,
            theme: "fint"
        }

        return (
            // all details are in the object this.props.chartData
            // the chartData are mapped from state.charts.timelineChart wich store the state of graph (reducer timelineChart in ./)
            <Col sm={3} >
                 <ReactFC type = "Column2D" dataSource={{
                     chart: chartHeader,
                     data: this.props.asteroids.chartHazardous
                 }}

                />
            </Col>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ChartHazardous);
