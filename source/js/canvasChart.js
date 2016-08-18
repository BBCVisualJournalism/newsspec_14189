define(['wrapper', 'remoteData', 'jquery', 'chartjs'], function (wrapper, remoteData, $) {

    /**
     * This is an example module showing off what the scaffold can do. You should delete it when you start working on
     * your own bespoke.
     *
     * You should also remove the jQuery dependency if you don't need it for your project - go to bower.json and remove
     * the "jquery" entry, and remove "jquery" from your config.json amdModulePaths property.
     */

    return {
        init: function (momentjs) {
            // init chart here
            var ctx = document.getElementById('ns-14189__chart-1');
            var moment = momentjs;

            // console.log('chartJs:', chartJs); // undefined
            // console.log('chart:', chart);     // function (e,i){this.config=i,e.length&&e[0]...

            // var dataSlice = {
            //     "years": [
            //         {
            //           "date": "2012",
            //           "value": "2.8",
            //           "label": "2012",
            //           "year": "2012",
            //           "month": "",
            //           "quarter": "",
            //           "sourceDataset": "MM23",
            //           "updateDate": "2016-02-11T13:55:58.892Z"
            //         },
            //         {
            //           "date": "2013",
            //           "value": "2.6",
            //           "label": "2013",
            //           "year": "2013",
            //           "month": "",
            //           "quarter": "",
            //           "sourceDataset": "MM23",
            //           "updateDate": "2016-02-11T13:55:58.892Z"
            //         },
            //         {
            //           "date": "2014",
            //           "value": "1.5",
            //           "label": "2014",
            //           "year": "2014",
            //           "month": "",
            //           "quarter": "",
            //           "sourceDataset": "MM23",
            //           "updateDate": "2016-02-11T13:55:58.892Z"
            //         },
            //         {
            //           "date": "2015",
            //           "value": "0.0",
            //           "label": "2015",
            //           "year": "2015",
            //           "month": "",
            //           "quarter": "",
            //           "sourceDataset": "MM23",
            //           "updateDate": "2016-02-11T13:55:58.892Z"
            //         }
            //     ]
            // };
            var dataUrl = 'https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/d7g7/data';

            remoteData.fetch(dataUrl, function (dataResponse) {
                console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
                var retrievedData = dataResponse;
                // console.log('retrievedData:', retrievedData);

                var chartJsDataObj = {
                    labels: [],
                    datasets: [{
                        label: retrievedData.description.title,
                        data: []
                    }]
                };
                for (var i = 0; i < retrievedData.years.length; i++) {
                    chartJsDataObj.datasets[0].data.push(retrievedData.years[i]['value']);
                    chartJsDataObj.labels.push(retrievedData.years[i]['year']);
                }
                var myChart = new Chart(ctx, {
                    type: 'bar',

                    data: chartJsDataObj,
                    options: {

                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: retrievedData.description.unit
                                },
                                ticks: {
                                    beginAtZero:true
                                }
                            }],
                            xAxes: [{
                                type: 'time',
                                time: {
                                    displayFormats: {
                                        quarter: 'MMM YYYY'
                                    }
                                }
                            }]
                        }
                    }
                });
            });
        }
    };
});