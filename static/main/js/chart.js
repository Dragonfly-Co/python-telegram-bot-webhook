let ctx = document.getElementById('usage_chart').getContext('2d');
let _labels = [1,2,3,4,5,6,7];

_labels = _labels.map(number => number.toString() + " января");
let _serverData = [
    _getRandomNumber(0, 200),
    _getRandomNumber(0, 200),
    _getRandomNumber(0, 200),
    _getRandomNumber(0, 200),
    _getRandomNumber(0, 200),
    _getRandomNumber(0, 200),
    _getRandomNumber(0, 200),
]; 
let data = {
    labels: _labels,
    datasets: [
        {
            label: "Использований за день",
            data: _serverData,
            backgroundColor: "rgba(47, 187, 230, 0.1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(47, 187, 230, 0.8)",
            borderColor: "rgba(47, 187, 230, 1)",
        }
    ] 
}

let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: Math.floor(Math.max.apply(Math, _serverData) * 1.1),
                }
            }]
        },
    }
});

function _getRandomNumber(min, max) {
    // get random number from (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
