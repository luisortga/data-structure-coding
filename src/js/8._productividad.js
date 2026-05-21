// Avance de numeros de reportes en los primeros días 4 días
/**@type {number} */
let dayList = [6, 8, 4, 16, 12, 0, 80, 16]

/**@type {number} */
let numberReference = dayList[0]
let infoAvance = ""

const avance = {
    "excelent": `Entrega de reportes excelentes.`,
    "normal": `Entrega de reportes normal.`,
    "low" : `Entrega de reportes bajo, debes de mejorar.`,
    "nothing" : `Ningun reporte entregado, pase a oficina.`
}

for (let day of dayList) {

    if (day >= numberReference) {
        infoAvance = avance.excelent
    } else if (day >= numberReference/2) {
        infoAvance = avance.normal
    } else if (day <= 0) {
        infoAvance = avance.nothing
    } else {
        infoAvance = avance.low
    }

    if (day > numberReference) {
        numberReference = day
    }
    console.log(infoAvance, day)
}