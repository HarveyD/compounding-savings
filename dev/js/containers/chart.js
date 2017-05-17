import React, {Component} from 'react';
import {connect} from 'react-redux';
var LineChart = require("react-chartjs").Line;

const options = {
    responsive:true,
    maintainAspectRatio: false,
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(255,255,255,.05)',
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    scaleLineColor: "white",
    scaleFontColor: "white",
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

class Chart extends React.Component {
    render() {
        return (
            <LineChart data={this.props.chartData} redraw options={options}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        chartData: state.chartState.chart
    };
}

export default connect(mapStateToProps)(Chart);
