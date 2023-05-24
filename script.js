const cantonsLookUp = {
    1: 'ch-zh',
    2: 'ch-be',
    3: 'ch-lu',
    4: 'ch-ur',
    5: 'ch-sz',
    6: 'ch-nw',
    7: 'ch-ni',
    8: 'ch-gl',
    9: 'ch-zg',
    10: 'ch-fr',
    11: 'ch-so',
    12: 'ch-bs',
    13: 'ch-bl',
    14: 'ch-sh',
    15: 'ch-ag',
    16: 'ch-ai',
    17: 'ch-sg',
    18: 'ch-gr',
    19: 'ch-ar',
    20: 'ch-tg',
    21: 'ch-ti',
    22: 'ch-vd',
    23: 'ch-vs',
    24: 'ch-ne',
    25: 'ch-ge',
    26: 'ch-ju'
}

function getDataForYear(data, year) {
    yearData = []

    for (let row of data) {
        if (row.YEAR == year) {
            yearData.push(row)
        }
    }
    return yearData
}

var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
    yearSlider = ''
    $fill.css("width", $slider.val())
    yearSlider = $slider.val()
    console.log(yearSlider)
    return yearSlider
}

(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
    ).then(response => response.json());

    const d = await fetch(
        'Kantone_AlterMutter.json'
    ).then(response => response.json());

    $slider.on("input", setBar);
    setBar();

    yearData = getDataForYear(d, yearSlider)
    console.log(yearData)

    let result = {}
    for (const [key, value] of Object.entries(cantonsLookUp)) {
        result[key] = { 'hc-key': value }
    }
    for (let row of yearData) {
        if (row.SEX_CHILD == "T") {
            result[row.CANTON].value = row.OBS_VALUE
        }
        if (row.SEX_CHILD == "F") {
            result[row.CANTON].female = row.OBS_VALUE
        }
        if (row.SEX_CHILD == "M") {
            result[row.CANTON].male = row.OBS_VALUE
        }
    }


    console.log(result)

    const data = Object.values(result)

    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'Geburtenzahl in der Schweiz pro Kanton im Jahr'
        },

        subtitle: {
            text: 'Source data: <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung/geburten-todesfaelle/geburten.html">Bundesamt für Statistik</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Anzahl Geburten im Jahr pro Kanton',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }],
        tooltip: {
            formatter: function () {
                console.log(this.point)
                female = this.point.female
                male = this.point.male
                total = this.point.value
                return `Gesammtanzahl: ${total}, Mädchen: ${female}, Knaben: ${male}`
            }
        }

    });


})();

