let myChart = document.getElementById('myChart').getContext('2d');

let massChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Exams Proctored'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#0072b1',
        },
         ],



    },
    options: {


        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }



});


let myChart2 = document.getElementById('myChart2').getContext('2d');

let massPopChart2 = new Chart(myChart2, {
    type: 'horizontalBar',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Exams Proctored'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#0072b1',
        },
         ],



    },
    options: {


        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }




});

let myChart3 = document.getElementById('myChart3').getContext('2d');

let massChart3 = new Chart(myChart3, {
    type: 'bar',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Data 1'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#0072b1',
        },
                   {
                label: ['Data 2'],
                data: [ 200, 150, 100, 75,],
                backgroundColor: '#11b3e3',
        },
                  {  label: ['Data 3'],
                data: [ 100, 75, 50, 25,],
                backgroundColor: '#fec140',
        },
                    {  label: ['Data 4'],
                data: [ 75, 55, 20, 15,],
                backgroundColor: '#df3116',
        },
                    {  label: ['Data 5'],
                data: [ 55, 25, 10, 5,],
                backgroundColor: '#03792c',
        },
                   {  label: ['Data 6'],
                data: [ 55, 25, 10, 5,],
                backgroundColor: '#7b1b85',
        },
         ],



    },
    options: {


        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }




});

let myChart4 = document.getElementById('myChart4').getContext('2d');

let massChart4 = new Chart(myChart4, {
    type: 'horizontalBar',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Data 1'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#0072b1',
        },
                   {
                label: ['Data 2'],
                data: [ 200, 150, 100, 75,],
                backgroundColor: '#11b3e3',
        },
                  {  label: ['Data 3'],
                data: [ 100, 75, 50, 25,],
                backgroundColor: '#fec140',
        },
                    {  label: ['Data 4'],
                data: [ 75, 55, 20, 15,],
                backgroundColor: '#df3116',
        },
                    {  label: ['Data 5'],
                data: [ 55, 25, 10, 5,],
                backgroundColor: '#03792c',
        },
                   {  label: ['Data 6'],
                data: [ 55, 25, 10, 5,],
                backgroundColor: '#7b1b85',
        },
         ],



    },
    options: {


        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }




});

let myChart5 = document.getElementById('myChart5').getContext('2d');

let massChart5 = new Chart(myChart5, {
    type: 'bar',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Data 1'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#0072b1',
        },
                   {
                label: ['Data 2'],
                data: [ 200, 150, 100, 75,],
                backgroundColor: '#11b3e3',
        },
                  {  label: ['Data 3'],
                data: [ 100, 75, 50, 25,],
                backgroundColor: '#fec140',
        },
               
         ],



    },
    options: {


        scales: {
             xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }




});

let myChart6 = document.getElementById('myChart6').getContext('2d');

let massChart6 = new Chart(myChart6, {
    type: 'horizontalBar',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Data 1'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#0072b1',
        },
                   {
                label: ['Data 2'],
                data: [ 200, 150, 100, 75,],
                backgroundColor: '#11b3e3',
        },
                  {  label: ['Data 3'],
                data: [ 100, 75, 50, 25,],
                backgroundColor: '#fec140',
        },
                   
         ],



    },
    options: {


        scales: {
             xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }




});

let myChart7 = document.getElementById('myChart7').getContext('2d');

let massChart7 = new Chart(myChart7, {
    type: 'line',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Data 1'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#e0eef5',
            borderColor: '#0072b1',
            pointBackgroundColor: '#0072b1'
        },
                   
                   
         ],



    },
    options: {


        scales: {
             xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }




});
let myChart8 = document.getElementById('myChart8').getContext('2d');

let massChart8 = new Chart(myChart8, {
    type: 'line',
    data: {
        labels: ['MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
                label: ['Data 1'],
                data: [300, 200, 150, 100, ],
                backgroundColor: '#e0eef5',
            borderColor: '#0072b1',
            pointBackgroundColor: '#0072b1'
        },
                    {
                label: ['Data 2'],
                data: [ 200, 150, 100, 75,],
                backgroundColor: '#d9f3fa',
                        borderColor: '#11b3e3',
            pointBackgroundColor: '#11b3e3'
        },
                  {  label: ['Data 3'],
                data: [ 100, 75, 50, 25,],
                backgroundColor: '#fff8e8',
                   borderColor: '#fec140',
            pointBackgroundColor: '#fec140'
        },
                   
                  {  label: ['Data 4'],
                data: [ 100, 75, 50, 25,],
                backgroundColor: '#fbe6e3',
                   borderColor: '#df3116',
            pointBackgroundColor: '#df3116'
        }
                   
                   
         ],



    },
    options: {


        scales: {
             xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }




});




