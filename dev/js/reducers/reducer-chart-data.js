const skeleton = {
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)'
}

// for(var i=1; i<= 25; i++){
//     yearLabels.push('Year '+ i);
// }

const initialChart = {
    settings: {
        interestRate: 0.07,
        compoundingFrequency: 12,
        yearsShown: 25,
        combineSavings: false
    },
    chart: {
        labels: [...Array(25).keys()],
        datasets: [{
            id: 1,
            label: 'New Saving',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [0],
        }]
    }
};

export default function (state = initialChart, action) {
    switch(action.type){
        case "CREATE_SAVING":
            var newData = Object.assign({}, skeleton);
            newData.id = state.chart.datasets.length+1;
            newData.data = [0];
            newData.label = "";

            return Object.assign({}, state, {
                chart: Object.assign({}, state.chart, {
                    datasets: [...state.chart.datasets, newData]
                })
            });
        case "UPDATE_SAVING":
            //Look for the dataset being updated, update compounded info and return. Constructs a new dataset
            var newData = state.chart.datasets.map((dataset, index) => {
                if(dataset.id !== action.payload.id) {
                    return dataset;
                }

                dataset.label = action.payload.type;
                dataset.data = calculateCompound(action.payload, state.settings); 
                return dataset;
            });

            return Object.assign({}, state, {
                chart: Object.assign({}, state.chart, {
                    datasets: newData
                })
            });
        case "DELETE_SAVING":
            var newData = state.chart.datasets.filter(x => x.id !== action.payload.id);
            return Object.assign({}, state, {
                chart: Object.assign({}, state.chart, {
                    datasets: newData
                })
            });
        case "UPDATE_SETTINGS":
            // Either need to store saving amount / frequency or find some algo that adjusts the savings correctly.
            var newDatasets = state.chart.datasets.map(x => {
                x.data = calculateCompound(x, action.payload); 
                return x;
            });
            return Object.assign({}, state, {
                settings: action.payload,
                chart: Object.assign({}, state.chart, {
                    labels: [...Array(parseInt(action.payload.yearsShown)+1).keys()],
                    datasets: newDatasets
                })
            });
        default:
            return state;
    }
}

var calculateCompound = function(saving, settings){
    var compounded = Math.floor(settings.compoundingFrequency / 12);

    var compounding = [];
    compounding[0]=0;
    for(var i=1; i<= settings.yearsShown+1; i++){
        var p = compounding[i-1] + (saving.amount * saving.frequency);
        compounding.push(
            p * (1+ settings.interestRate/compounded)
        );
    }
    compounding.shift();
    return compounding; 
}