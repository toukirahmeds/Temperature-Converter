const { printManualAndExit, getCalculatedResults } = require("./utils");
const { ACCEPTED_UNIT_NAMES } = require("./constants");

/**
 * Converts the temperature from command-line arguments.
 * 
 * @param {Array<string>} commandArgs 
 * @returns {{
 *      name: string,
 *      value: number,
 *      convertedResults: Array<{ name: string, value: number }>
 * }}
 */
const runForCmdLineArgs = (commandArgs) => {
    // Find the converted from unit from the command line arguments.
    const fromUnitArg = commandArgs.find(item => item.startsWith("--from="));

    // If no fromUnitArg is found, then print manual and exit.
    if (!fromUnitArg) {
        printManualAndExit();
    }

    const fromUnitName = fromUnitArg.slice(7);

    // If fromUnitName is not in the list of accepted names,
    // then print manual and exit.
    if (!ACCEPTED_UNIT_NAMES.includes(fromUnitName)) {
        printManualAndExit();
    }

    // Find the convert from value from command-line arguments.
    const fromValueArg = commandArgs.find(item => item.includes("--value="));

    // If convert from value is not found, then print manual and exit.
    if (!fromValueArg) {
        printManualAndExit();
    }

    // Parse fromValue to float.
    const fromValue = parseFloat(fromValueArg.slice(8));

    // If fromValue is not a number, then print manual and exit.
    if (isNaN(fromValue)) {
        printManualAndExit();
    }

    // Calculate the results and return them.
    return getCalculatedResults(fromUnitName, fromValue);
};

module.exports = runForCmdLineArgs;
