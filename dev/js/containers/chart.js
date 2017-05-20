import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Line as LineChart} from 'react-chartjs-2';

//var LineChart = require("react-chartjs").Line;

const options = {
    responsive:true,
    maintainAspectRatio: false,
    //scaleShowGridLines: true,
    //scaleGridLineColor: 'rgba(255,255,255,.05)',
    //scaleGridLineWidth: 1,
    //scaleShowHorizontalLines: true,
    //scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,

    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legend: {
        display: false
    },
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
    scales: {
        xAxes: [{
            gridLines: {
                show: true,
                color: "rgba(255,255,255,.5)"
            },
            scaleLabel:{
                display: true,
                labelString: 'Years',
                fontColor: "white"
            },
            ticks: {
                fontColor: "white"
            }
        }],
        yAxes: [{
            gridLines: {
                fontColor: "white",
                show: true,
                color: "rgba(255,255,255,.5)"
            },
            scaleLabel:{
                display: true,
                labelString: 'Amount Saved ($)',
                fontColor: "white"
            },
            ticks: {
                fontColor: "white"
            }
        }]
    }
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
