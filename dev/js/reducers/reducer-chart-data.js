const skeleton = {
    pointBorderColor: 'rgba(255, 255, 255 0.75)',
    pointBackgroundColor: "rgba(255,255,255,1)",    
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(125, 125, 125, 0.75)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 5,
    pointHitRadius: 10,

    backgroundColor: "rgba(220,220,220,0.4)",
    borderColor: "rgba(255, 255, 255, 0.75)"
}

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
            pointBorderColor: 'rgba(255, 255, 255 0.75)',
            pointBackgroundColor: "rgba(255,255,255,1)",    
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(125, 125, 125, 0.75)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,

            backgroundColor: "rgba(220,220,220,0.4)",
            borderColor: "rgba(255, 255, 255, 0.75)",
            data: [0]
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
                //To be used to recalculate if settings are changed.
                dataset.saving = {
                    amount: action.payload.amount,
                    frequency: action.payload.frequency
                };

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
                x.data = calculateCompound(x.saving, action.payload); 
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
    var compounding = [];
    compounding[0]=0;
    for(var i=1; i<= parseInt(settings.yearsShown)+1; i++){
        var p = compounding[i-1] + (saving.amount * saving.frequency);
        compounding.push(
            p * Math.pow((1+ settings.interestRate/settings.compoundingFrequency), 1*settings.compoundingFrequency)
        );
    }
    compounding.shift();
    return compounding; 
}