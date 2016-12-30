$(function () {

    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('carrier-visit-results', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: '#fcfcfc'//chart bg
            },
            title: {
                text: ''
            },
            tooltip: {
                formatter: function () {
                    return this.point.name + ' ' + '(' + this.y +')';//custom name
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    borderWidth: 0
                }
            },
            legend:
            {
                borderRadius: 0,
                squareSymbol: false,
                symbolRadius: 0,
                symbolWidth: 35,
                symbolHeight: 19,
                symbolPadding: 10,
                itemWidth: 210,
                itemMarginBottom: 40,
                itemStyle: {
                    fontSize: '11px'
                },
                enabled: true,
                layout: 'horizontal',
                align: 'right',
                verticalAlign: 'middle',
                width: 420
            },
            series: [{
                name: 'Carriers',
                colorByPoint: true,
                data: [{
                    name: 'Marketing',
                    y: 80,
                    color: '#446d8c'//color of the pie
                }, {
                    name: 'Middle Market Construction',
                    y: 150,
                    color: '#67a8d7'
                }, {
                    name: 'Middle Market Marketing',
                    y: 60,
                    color: '#62bcbb'
                }, {
                    name: 'Middle Marketing General',
                    y: 50,
                    color: '#356a69'
                }, {
                    name: 'Middle Market Technology',
                    y: 40,
                    color: '#d5d5d5'
                }, {
                    name: 'Professional Lines',
                    y: 30,
                    color: '#ababab'
                }, {
                    name: 'Risk Management',
                    y: 20,
                    color: '#072742'
                }, {
                    name: 'Small Business',
                    y: 10,
                    color: '#9eb5c6'
                }, {
                    name: 'Speciality Lines',
                    y: 5,
                    color: '#393e44'
                }]
            }],
            responsive: {//responsive
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        legend: {
                            width: 250,
                            itemWidth: 250,
                            itemMarginBottom: 20
                        }
                    }
                },{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            itemMarginBottom: 1
                        }
                    }
                }]
            }
        });
    });
});