var yearLabels = [];
for(var i=1; i<= 25; i++){
    yearLabels.push('Year '+ i);
}

var skeleton = {
    fillColor: 'rgba(220,220,220,0.2)',
    strokeColor: 'rgba(220,220,220,1)',
    pointColor: 'rgba(220,220,220,1)',
    pointStrokeColor: '#fff',
    pointHighlightFill: '#fff',
    pointHighlightStroke: 'rgba(220,220,220,1)'
}

var chartData = {
    labels: yearLabels,
    datasets: [
        {
            id: 1,
            label: 'New Saving',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [0],
        }
        ]
};

export default function (state = chartData, action) {
    switch(action.type){
        case "CREATE_SAVING":
            var newData = Object.assign({}, skeleton);
            newData.id = state.datasets.length+1;
            newData.data = [0];
            newData.label = "";
            
            return Object.assign({}, state, {
                datasets: state.datasets.concat(newData)
            });
            break;
        case "UPDATE_SAVING":
            //Look for the dataset being updated, update compounded info and return. Constructs a new dataset
            var newData = state.datasets.map((dataset, index) => {
                if(dataset.id !== action.payload.id) {
                    return dataset;
                }

                dataset.label = action.payload.type;
                dataset.data = calculateCompound(action.payload); 
                return dataset;
            });

            return Object.assign({}, state, {
                datasets: newData
            });
            break;
        case "DELETE_SAVING":
            var newData = state.datasets.filter(x => x.id !== action.payload.id);
            return Object.assign({}, state, {
                datasets: newData
            });
            break
        default:
            return state;
    }

    return state;
}

var calculateCompound = function(saving){
    saving.interestRate = 1.08;
    saving.compounded = 12;

    var compounding = [];
    compounding[0]=0;
    for(var i=1; i<=25; i++){
        var p = compounding[i-1] + (saving.amount * saving.frequency);
        compounding.push(
            p * (1+ saving.interestRate/saving.compounded)
        );
    }
    compounding.shift();
    return compounding; 
}