const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))



const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 113.42;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.0065;
    // retornamos el valor
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};