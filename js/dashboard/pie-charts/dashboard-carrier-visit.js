$(function () {

    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('dashboard-carrier-visits', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: '#fcfcfc'

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
                    borderWidth: 0,
                    point: {//enable click pie to a link
                        events: {
                            click: function () {
                                location.href = this.options.url;
                            }
                        }
                    }
                }
            },
            legend:
            {
                borderRadius: 0,
                squareSymbol: false,
                symbolRadius: 0,
                symbolWidth: 25,
                itemWidth: 120,
                itemMarginBottom: 10,
                itemStyle: {
                    fontSize: '11px'
                }
            },
            series: [{
                name: 'Carriers',
                colorByPoint: true,
                data: [{
                    name: 'CNA',
                    y: 28,
                    url: 'carrier-visit.html',
                    color: '#446d8c'//color of the pie
                }, {
                    name: 'FCCI in Florida',
                    y: 18,
                    url: 'carrier-visit.html',
                    color: '#68a8d7'
                }, {
                    name: 'Hartford',
                    y: 2,
                    url: 'carrier-visit.html',
                    color: '#62bdbb'
                },  {
                    name: 'Liberty Mutual',
                    y: 8,
                    url: 'carrier-visit.html',
                    color: '#d5d5d5'
                }, {
                    name: 'Nationwide',
                    y: 12,
                    url: 'carrier-visit.html',
                    color: '#366a69'
                }, {
                    name: 'Travelers',
                    y: 3,
                    url: 'carrier-visit.html',
                    color: '#ababab'
                }]
            }]
        });
    });
});