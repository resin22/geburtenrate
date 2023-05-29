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
    return Object.values(result)
}
let countsForYearFemal = {}
let countsForYearMal = {}

function countTotalValuesForYear(data) {
    for (let row of data) {
        if (row.SEX_CHILD == "F") {
            countsForYearFemal[row.YEAR] = row.OBS_VALUE
        }
        if (row.SEX_CHILD == "M") {
            countsForYearMal[row.YEAR] = row.OBS_VALUE
        }
    }
    return [countsForYearFemal, countsForYearMal]
}

function getDataForYearBalken(dataB) {
    resultBalken = {}

    for (let row of dataB) {
        if (row.Alter_Mutter == "Total") {
            resultBalken[row.Jahr] = row.Anzahl
        }
    }
    return resultBalken
}

var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
    yearSlider = ''
    $fill.css("width", $slider.val())
    yearSlider = $slider.val()
    data = getDataForYear(dataKarte, yearSlider)
    // verändert die Chartdarstellung bei jeder väränderung des Sliders
    if (chart) {
        chart.series[0].update({
            data: data
        }, true);
        chart.title.update({
            text: 'Geburtenzahl in der Schweiz pro Kanton im Jahr ' + yearSlider
        })
    }
    return yearSlider
}
resultFrau = {}
resultErsatz = {}

function getDataForYearLine(dataL) {
    for (let row of dataL) {
        if (row.Durchschnitt_Frau != "") {
            resultFrau[row.Jahr] = row.Durchschnitt_Frau
        }
        if (row.Ersatz != "") {
            resultErsatz[row.Jahr] = row.Ersatz
        }
    }
    return [resultFrau, resultErsatz]
}

let dataKarte;
let dataBalken;
let chart;
let chartBalken;
let chartLinie;

(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/ch/ch-all.topo.json'
    ).then(response => response.json());

    dataKarte = await fetch(
        'Kantone_AlterMutter.json'
    ).then(response => response.json());

    dataLinie = await fetch(
        'Elterngenerationsersatz.json'
    ).then(response => response.json());
    console.log(dataLinie)

    dataBalken = await fetch(
        'totgeburten.json'
    ).then(response => response.json());

    $slider.on("input", setBar);
    setBar();

    test = countTotalValuesForYear(dataKarte)
    console.log(test)


    data = getDataForYear(dataKarte, yearSlider)
    dataL = getDataForYearLine(dataLinie)
    console.log(dataL)
    dataB = getDataForYearBalken(dataBalken)
    console.log(dataB)

    chart = Highcharts.mapChart('container', {
        chart: {
            map: topology,
            animation: false
        },
        title: {
            text: 'Geburtenzahl in der Schweiz pro Kanton im Jahr 1969'
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

    chartLinie = Highcharts.chart('lineContainer', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Ersatz der Elterngeneration'
        },
        subtitle: {
            text: 'Source: <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung/geburten-todesfaelle/geburten.html">Bundesamt für Statistik</a>'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Durchschnittliche kinderanzahl je Frau'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Durchschnittliche Kinderanzahl je Frau',
            data: dataL
        }, {
            name: 'Ersatz der Elterngeneration',
            data: resultErsatz
        }]
    });

    chartBalken = Highcharts.chart('balkenContainer', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Lebend- und Totgeburten pro Jahr in der Schweiz',
            align: 'left'
        },

        xAxis: {
            categories: ['Geburten']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Anzahl'
            }
        },

        series: [{
            name: 'Lebendgeburt Mädchen',
            data: [148],
            stack: 'lebend'
        }, {
            name: 'Lebendgeburt Knaben',
            data: [102],
            stack: 'lebend'
        }, {
            name: 'Todgeburt',
            data: [113],
            stack: 'tot'
        }],

        tooltip: {
            formatter: function () {
                console.log(this.point)
                maedchen = this.point.maedchen
                knaben = this.point.knaben
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        }
    });
})();