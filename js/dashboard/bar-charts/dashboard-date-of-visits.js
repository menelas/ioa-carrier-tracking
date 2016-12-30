$(function()
{
    Highcharts.chart('dashboard-date-of-visits',
    {
        chart: {
            type: 'column',
            backgroundColor: '#fcfcfc'
        },
        title:
        {
            text: ''
        },
        tooltip: {
            padding: 3,
            formatter: function () {
                return this.y; 
            }
        },
        xAxis:
        {
            categories: ['Dec \'15', 'Jan \'16', 'Feb \'16', 'Mar \'16', 'Apr \'16', 'May\'16', 'Jun \'16', 'Jul \'16', 'Aug \'16', 'Sep \'16', 'Oct \'16', 'Nov\'16', 'Dec\'16']
        },
        labels:
        {
            items: [
            {
                style:
                {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        legend:
        {
            enabled: false
        },
        series: [
            {
                name: 'Open',
                data: [400, 300, 350, 75, 300, 450, 250, 50, 120, 250, 300, 350, 25],
                color: '#296198',
                pointWidth: 23
        }]
    });
});
