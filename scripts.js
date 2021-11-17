generate_option = (data) => {
    var option = {
        tooltip: {
            show: false
        },
        xAxis: {
            data: data,
            show: false
        },
        yAxis: {
            show: false
        },
        grid: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        },
        series: [{
            type: 'line',
            data: [...data],
            symbol: 'none',
            smooth: true,
            silent: true,
            areaStyle: {
                color: '#BDC7EF',
                opacity: 0.5
            }
        }],

    };
    return option;
}
var y1 = [];
var y2 = [];

for (let x = 0; x <= 20; x+= 0.1) {
    y1.push(Math.sin(x)+1.1);
}

for (let x = 0; x <= 20; x+= 0.1) {
    y2.push((Math.sin(x+(2*Math.PI))-1.1));
}

var chart1 = echarts.init(document.getElementById('chart1'));
chart1.setOption(generate_option(y1));

var chart2 = echarts.init(document.getElementById('chart2'));
chart2.setOption(generate_option(y2));

$(".nav-contact").on("mouseover", () => {
  $(".nav-contact-icons").addClass('permahover');
});
