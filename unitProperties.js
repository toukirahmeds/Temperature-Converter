const unitProperties = {
    "celsius": {
        name: "Celsius",
        symbol: "C",
        convertTo: [{
            name: "Fahrenheit",
            getValue: fromValue => fromValue * (9/5) + 32
        }, {
            name: "Kelvin",
            getValue: fromValue => fromValue + 273.15
        }]
    },
    "fahrenheit": {
        name: "Fahrenheit",
        symbol: "F",
        convertTo: [{
            name: "Celsius",
            getValue: fromValue => (5/9) * (fromValue - 32)
        }, {
            name: "Kelvin",
            getValue: fromValue => (fromValue + 459.67) * (5/9)
        }]
    },
    "kelvin": {
        name: "Kelvin",
        symbol: "K",
        convertTo: [{
            name: "Celsius",
            getValue: fromValue => fromValue - 273.15
        }, {
            name: "Fahrenheit",
            getValue: fromValue => (fromValue - 273.15) * (9/5) + 32
        }]
    }
};

module.exports = unitProperties;
