const readline = require("readline").promises;

const unitProperties = require("./unitProperties");
const { getCalculatedResults } = require("./utils");

const rlInterface = readline.createInterface(process.stdin, process.stdout);

const getFromUnit = async () => {
    const fromUnitInput = (await rlInterface.question(
        `From unit ('c' for celsius, 'f' for fahrenheit, 'k' for kelvin): `
    )).toUpperCase().trim();
    
    const unitProperty = Object.values(unitProperties)
            .find(value => value.symbol === fromUnitInput);

    if (!unitProperty) {
        console.log("Please provide a valid unit...");
        return getFromUnit();
    }

    return unitProperty;
};

const getFromValue = async () => {
    const fromValue = parseFloat(await rlInterface.question(
        `\nFrom value: `
    ));

    if (isNaN(fromValue)) {
        console.log("Please provide a valid number...");
        return getFromValue();
    }

    return fromValue;
};

const runForConsoleInput = async () => {
    const unitProperty = await getFromUnit();
    const fromValue = await getFromValue();

    rlInterface.close();
    
    return getCalculatedResults(
        unitProperty.name.toLowerCase(),
        fromValue
    );
};

module.exports = runForConsoleInput;
