//cantonsLookUp definiert die Chiffrierung der unterschiedlichen Bezeichnungen für die Kantone
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

//Funktion extrahiert alle Werte für die Geburtenhäufigkeitsstatistik pro Jahr 
//aus der datei und speichert sie in ein array mit drei Parametern.
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

let countsYear = []
//Funktion nimmt alle Jahreszahlen und setzt sie in ein array
//Funktion wird für das Balkendiagramm von Lebend- und Todgeburten benötigt
function countYear(data) {
    let counts = []
    for (let row of data) {
        if (row.SEX_CHILD == "F") {
            counts[row.YEAR] = row.OBS_VALUE
            Object.keys(counts).forEach(item => {
                if (countsYear.includes(item)) {
                    //do nothing
                } else {
                    countsYear.push(item)
                }
            });
        }
    }
    return countsYear
}

let countsForFemale = []
let countsForMale = []
//Funktion nimmt alle Weiblichen-/Mänlichengeburten pro jahr, zählt alle Werte der Kantone zusammen und setzt sie in ein array
//Achtung! funktion ist sehr lange, da keine schönere Lösung gefunden und sie so funktioniert :)
//Funktion wird für das Balkendiagramm von Lebend- und Todgeburten benötigt
function countTotalValuesForYear(data) {
    let countsForYearFemale = []
    let countsForYearMale = []
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1969) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1970) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1971) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1972) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1973) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1974) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1975) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1976) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1977) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1978) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1979) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1980) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1981) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1982) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1983) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1984) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1985) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1986) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1987) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1988) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1989) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1990) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1991) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1992) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1993) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1994) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1995) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1996) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1997) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1998) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 1999) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2000) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2001) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2002) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2003) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2004) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2005) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2006) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2007) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2008) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2009) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2010) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2011) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2012) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2013) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2014) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2015) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2016) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2017) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2018) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2019) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2020) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "F" && row.YEAR == 2021) {
            countsForYearFemale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearFemale.length; i++) {
        var val = 0
        Object.values(countsForYearFemale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForFemale.push(val)
        countsForYearFemale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1969) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1970) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1971) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1972) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1973) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1974) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1975) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1976) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1977) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1978) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1979) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1980) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1981) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1982) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1983) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1984) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1985) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1986) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1987) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1988) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1989) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1990) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1991) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1992) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1993) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1994) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1995) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1996) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1997) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1998) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 1999) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2000) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2001) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2002) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2003) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2004) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2005) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2006) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2007) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2008) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2009) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2010) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2011) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2012) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2013) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2014) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2015) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2016) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2017) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2018) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2019) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2020) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    for (let row of data) {
        if (row.SEX_CHILD == "M" && row.YEAR == 2021) {
            countsForYearMale.push(row.OBS_VALUE)
        }
    }
    for (let i = 0; i <= countsForYearMale.length; i++) {
        var val = 0
        Object.values(countsForYearMale).forEach(item => {
            let x = item
            val = val + x
        });
        countsForMale.push(val)
        countsForYearMale = []
    }
    return [countsForFemale, countsForMale]
}

let todgeburt = []
//Funktion extrahiert alle Werte pro Jahr aus der datei und speichert sie in ein array
//Funktion wird für das Balkendiagramm von Lebend- und Todgeburten benötigt
function getDataForYearBalken(dataB) {
    resultBalken = {}
    for (let row of dataB) {
        if (row.Alter_Mutter == "Total") {
            resultBalken[row.Jahr] = row.Anzahl
        }
    }
    Object.values(resultBalken).forEach(item => {
        todgeburt.push(item)
    });
    return todgeburt
}

var $slider = $("#slider");
var $fill = $(".bar .fill");
//Funktion definiert die Funktion des Sliders, der die Jahreszahl für die Kartengrafik verändert
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

let yearLine = []
let dataFrau = []
let dataErsatz = []
//Funktion extrahiert die Werte für die Durchschnittliche Kinderanzahl je Frau und die nötige Anzahl für den Elterngenerationsersatz.
//Zudem werden die Jahreszahlen ausgelesen und in ein array gespeichert
//Funktion wird für die Generationsersatzgrafik benötigt
function getDataForYearLine(dataL) {
    resultFrau = {}
    resultErsatz = {}
    for (let row of dataL) {
        if (row.Durchschnitt_Frau != "") {
            resultFrau[row.Jahr] = row.Durchschnitt_Frau
            Object.values(resultFrau).forEach(item => {
                if (dataFrau.includes(item)) {
                    //do nothing
                } else {
                    dataFrau.push(item)
                }
            });
        }
        if (row.Ersatz != "") {
            resultErsatz[row.Jahr] = row.Ersatz
            Object.values(resultErsatz).forEach(item => {
                if (dataErsatz.includes(item)) {
                    //do nothing
                } else {
                    dataErsatz.push(item)
                }
            });
        }
    }
    Object.keys(resultFrau).forEach(item => {
        if (yearLine.includes(item)) {
            //do nothing
        } else {
            yearLine.push(item)
        }
    });
    return [dataFrau, dataErsatz, yearLine]
}

let dataKarte;
let dataBalken;
let dataLinie;
let chart;
let chartBalken;
let chartLinie;
/*führt die ganze Darstellung auf der Webseite aus.
Hier werden auch die benötigten Datensätze hineingeladen sowie die Grafiken definiert.*/
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

    dataBalken = await fetch(
        'totgeburten.json'
    ).then(response => response.json());

    $slider.on("input", setBar);
    setBar();

    valueCounts = countTotalValuesForYear(dataKarte)
    yearCounts = countYear(dataKarte)
    data = getDataForYear(dataKarte, yearSlider)
    dataL = getDataForYearLine(dataLinie)
    dataB = getDataForYearBalken(dataBalken)

    //Definition für die Schweizerkartengrafik
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
                female = this.point.female
                male = this.point.male
                total = this.point.value
                return `Gesammtanzahl: ${total}, Mädchen: ${female}, Knaben: ${male}`
            }
        }
    });

    //Definition für die Generationserhaltgrafik
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
            categories: yearLine,
        },
        yAxis: {
            title: {
                text: 'Durchschnittliche kinderanzahl je Frau'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Durchschnittliche Kinderanzahl je Frau',
            data: dataFrau
        }, {
            name: 'Ersatz der Elterngeneration',
            data: dataErsatz
        }]
    });

    //Definition für die Lebend- und Todgeburtengrafik
    chartBalken = Highcharts.chart('balkenContainer', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Lebend- und Totgeburten pro Jahr in der Schweiz',
            align: 'center'
        },
        xAxis: {
            categories: countsYear.slice(1)
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Anzahl'
            }
        },
        series: [{
            name: 'Lebendgeburten Mädchen',
            data: countsForFemale.slice(1),
            stack: 'lebend'
        }, {
            name: 'Lebendgeburten Knaben',
            data: countsForMale.slice(1),
            stack: 'lebend'
        }, {
            name: 'Todgeburten',
            data: todgeburt,
            stack: 'tot'
        }],
        tooltip: {
            format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
                'Total: {point.stackTotal}'

        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        }
    });
})();