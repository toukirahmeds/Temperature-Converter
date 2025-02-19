const readline = require("readline").promises;

const unitProperties = require("./unitProperties");
const { getCalculatedResults } = require("./utils");

/**
 * Creates an interface to read from stdin and
 * write to stdout.
 * 
 * @returns {readline.Interface}
 */
const getRLInterface = () => 
    readline.createInterface(process.stdin, process.stdout);

/**
 * Asks the user to input the unit to convert from in console
 * and returns the property of the unit.
 * 
 * @returns {{
 *  name: string,
 *  symbol: string,
 *  convertTo: Array<{
 *      name: string,
 *      getValue: (fromValue: number) => number
 *  }>
 * }}
 */
const getFromUnit = async () => {
    const rlInterface = getRLInterface();

    const fromUnitInput = (await rlInterface.question(
        `From unit ('c' for celsius, 'f' for fahrenheit, 'k' for kelvin): `
    )).toUpperCase().trim();

    // Close the interface for reading input from console.
    rlInterface.close();
    
    const unitProperty = Object.values(unitProperties)
            .find(value => value.symbol === fromUnitInput);

    if (!unitProperty) {
        console.log("Please provide a valid input...");
        return getFromUnit();
    }

    return unitProperty;
};

/**
 * Asks the user to input the convert from value in console
 * and returns the parsed value.
 * 
 * @returns {number}
 */
const getFromValue = async () => {
    const rlInterface = getRLInterface();

    const fromValue = parseFloat(await rlInterface.question(
        `\nFrom value: `
    ));

    // Close the interface for reading input from console.
    rlInterface.close();

    if (isNaN(fromValue)) {
        console.log("Please provide a valid number...");
        return getFromValue();
    }

    return fromValue;
};

/**
 * Converts the temperature from console input.
 * 
 * @returns {{
 *      name: string,
 *      value: number,
 *      convertedResults: Array<{ name: string, value: number }>
 * }}
 */
const runForConsoleInput = async () => {
    const unitProperty = await getFromUnit();
    const fromValue = await getFromValue();
    
    return getCalculatedResults(
        unitProperty.name.toLowerCase(),
        fromValue
    );
};

module.exports = runForConsoleInput;
