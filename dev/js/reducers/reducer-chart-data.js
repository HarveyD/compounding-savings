export default function (action) {
    // if(action.type != "SAVINGS_ADD"){
    //     return;
    // }
    if(action != null){
        console.log(action);
    }

    var yearLabels = [];
    for(var i=1; i<= 25; i++){
        yearLabels.push('Year '+ i);
    }

    var stub = {
        amount: 3,
        frequency: 52, //times per year
        compounded: 12, //times per year
        interestRate: 1.09
    };

    var savingSets = [];

    var savings = [];
    savings[0]=0;
    for(var i=1; i<=25; i++){
        var p = savings[i-1] + (stub.amount * stub.frequency);
        savings.push(
            p * (1+ stub.interestRate/stub.compounded)
        );
    }
    savings.shift();

    return {    
        labels: yearLabels,
        datasets: [
        {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: savings,
        },
        {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90],
        },
        ]
    }
}
