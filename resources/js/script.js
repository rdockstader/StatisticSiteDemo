App.controller('home', function (page) {
    var ctx = $(page).find('#answer-time-chart');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Active Cases By Month",
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });


    var ctx = $(page).find('#active-over-time');
    var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [ "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                        label: "MAnswer Time By Month",
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: [120, 130, 120, 125, 134, 90],
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                color: [0, 0, 0, 0, 0, 0, 'red']
                            },
                            ticks: {
                                min: 0,
                                max: 220,
                                stepSize: 20
                            }
                        }]
                    }
                }
            });
    
    var ctx = $(page).find('#queued-cases-chart');
    var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    datasets: [{
                        label: "Queued Cases",
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: [3, 1, 2, 4, 0],
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false
                            },
                            ticks: {
                                min: 0,
                                max: 30,
                                stepSize: 3
                            }
                        }]
                    }
                }
            });
    
    var ctx = $(page).find('#solved-cases-chart');
    var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    datasets: [{
                        label: "Solved Cases",
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: [30, 12, 22, 46, 40],
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false
                            },
                            ticks: {
                                min: 0,
                                max: 100,
                                stepSize: 10
                            }
                        }]
                    }
                }
            });
    
    var ctx = $(page).find('#active-cases-chart');
    var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ "John F", "WolfGang", "J.R.", "Ryan", "Devin", "Bradey", "Trevor", "Kelson", "Daniel", "Shaun", "John R", "Jason", "Jared", "Dennis"],
                    datasets: [{
                        label: "Active Cases by Rep",
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: [3, 1, 2, 2, 13, 3, 13, 2, 4, 0, 3, 1, 2, 4, 1],
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false
                            },
                            ticks: {
                                min: 0,
                                max: 20,
                                stepSize: 2
                            }
                        }]
                    }
                }
            });
    
    var ctx = $(page).find('#cases-by-rep-chart');
    var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ "John F", "WolfGang", "J.R.", "Ryan", "Devin", "Bradey", "Trevor", "Kelson", "Daniel", "Shaun", "John R", "Jason", "Jared", "Dennis"],
                    datasets: [{
                        label: "Solved Cases",
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: [3, 1, 2, 2, 13, 3, 13, 2, 4, 0, 3, 1, 2, 4, 1],
                        fill: false,
                    }, {label: "Created Cases",
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: [3, 1, 2, 2, 13, 3, 13, 2, 4, 0, 3, 1, 2, 4, 1],
                        fill: false,}]
                },
                options: {
                    responsive: true,
                    
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false
                            },
                            ticks: {
                                min: 0,
                                max: 20,
                                stepSize: 2
                            }
                        }]
                    }
                }
            });

});

App.controller('active-cases', function (page) {
    
    var ctx = $(page).find('#active-by-type');
    var chart = new Chart(ctx, {
                        type: 'pie',
                data: {
                    datasets: [{
                        data: [
                            150,
                            30,
                            6,
                            5,
                        ],
                        backgroundColor: [
                            window.chartColors.red,
                            window.chartColors.orange,
                            window.chartColors.yellow,
                            window.chartColors.green,
                        ],
                        label: 'Dataset 1'
                    }],
                    labels: [
                        "eCourt",
                        "JustWare",
                        "DMVGateway",
                        "eFiling",
                    ]
                },
                options: {
                    responsive: true
                }
            });
    
    var ctx = $(page).find('#active-by-status');
    var chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [
                            30,
                            30,
                            30,
                            30,
                            30,
                            30,
                            30,
                            30,
                        ],
                        backgroundColor: [
                            window.chartColors.red,
                            window.chartColors.orange,
                            window.chartColors.yellow,
                            window.chartColors.green,
                            window.chartColors.blue,
                            window.chartColors.grey,
                            window.chartColors.purple,
                            window.chartColors.pink,
                        ],
                        label: 'Dataset 1'
                    }],
                    labels: [
                        "In Progress",
                        "Returned",
                        "WOC - Need More Info",
                        "WOC - Fixed/Test",
                        "Bug",
                        "WOC - Upgrade",
                        "Queued",
                        "Other"
                    ]
                },
                options: {
                    responsive: true
                }
            });
    var ctx = $(page).find('#active-by-support-rep');
    var chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                            10,
                        ],
                        backgroundColor: [
                            window.chartColors.red,
                            window.chartColors.orange,
                            window.chartColors.yellow,
                            window.chartColors.green,
                            window.chartColors.blue,
                            window.chartColors.purple,
                            window.chartColors.grey,
                            window.chartColors.orange,
                            window.chartColors.yellow,
                            window.chartColors.green,
                            window.chartColors.blue,
                            window.chartColors.purple,
                            window.chartColors.grey,
                        ],
                        label: 'Dataset 1'
                    }],
                    labels: [
                         "John F", 
                         "WolfGang", 
                         "J.R.", 
                         "Ryan", 
                         "Devin", 
                         "Bradey", 
                         "Trevor", 
                         "Kelson", 
                         "Daniel", 
                         "Shaun", 
                         "John R", 
                         "Dennis"
                    ]
                },
                options: {
                    responsive: true
                }
            });
    var ctx = $(page).find('#active-by-escalated-rep');
    var chart = new Chart(ctx, {
               type: 'pie',
                data: {
                    datasets: [{
                        data: [
                            30,
                            30,
                            30,
                        ],
                        backgroundColor: [
                            window.chartColors.red,
                            window.chartColors.orange,
                            window.chartColors.yellow,
                        ],
                        label: 'Dataset 1'
                    }],
                    labels: [
                        "Jason", 
                         "Jared", 
                         "Dennis"
                    ]
                },
                options: {
                    responsive: true
                }
            });
    var ctx = $(page).find('#active-by-sa');
    var chart = new Chart(ctx, {
               type: 'pie',
                data: {
                    datasets: [{
                        data: [
                            30,
                            30.
                        ],
                        backgroundColor: [
                            window.chartColors.red,
                            window.chartColors.orange,
                            
                        ],
                        label: 'Dataset 1'
                    }],
                    labels: [
                        "Benson",
                        "Brandon"
                    ]
                },
                options: {
                    responsive: true
                }
            });

});


try {
    App.restore();
} catch (err) {
    App.load('home');
}

