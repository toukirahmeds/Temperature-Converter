const unitProperties = require("./unitProperties");

/**
 * Calculates the temperature unit conversions.
 * 
 * @param {string} fromUnit 
 * @param {number} fromValue 
 * @returns {{
 *      name: string,
 *      value: number,
 *      convertedResults: Array<{ name: string, value: number }>
 * }}
 */
const getCalculatedResults = (fromUnit, fromValue) => {
    const  currentUnitProperties = unitProperties[fromUnit];

    return {
        name: currentUnitProperties.name,
        value: fromValue,
        convertedResults: currentUnitProperties.convertTo.map(item => ({
            name: item.name,
            value: item.getValue(fromValue).toFixed(2)
        }))
    }
};

/**
 * Prints the manual.
 */
const printManualAndExit = () => {
    const manualText = `
        Usage: node index.js --from=[unitName] --value=[number]\n
        Convert temperature to other units of temperature.\n
        Accepted values for [unitName]: "celsius", "fahrenheit" and "kelvin"\n
        Accepted values for [number]: It must always be a valid decimal number.\n
        Example: node index.js --from=celsius --value=200
    `;

    console.log(manualText);

    process.exit();
}

module.exports = {
    getCalculatedResults,
    printManualAndExit
};
