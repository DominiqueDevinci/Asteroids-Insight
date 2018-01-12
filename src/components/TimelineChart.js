import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import {connect} from 'react-redux'

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)


class TimelineChart extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            // all details are in the object this.props.chartData
            // the chartData are mapped from state.charts.timelineChart wich store the state of graph (reducer timelineChart in ./)
             <ReactFC {this.props.chartData} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapState appele !");
    console.log(state);
    let data=[];
    state.posts.map((post, i)=>{
        if(!data[post.userId-1]){
            data[post.userId-1]={value: 0};
        }
        data[post.userId-1].value++;
    })
    console.log(data);
    let chartData = {
        chart: {},
        data};
    return {
        chartData
    };
}

export default connect(mapStateToProps)(TimeChart);
