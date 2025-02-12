const { printManual, getCalculatedResults } = require("./utils");
const { acceptedUnitNames } = require("./constants");

const runForCmdLineArgs = (commandArgs) => {
    // console.log(commandArgs);
    const fromUnitArg = commandArgs.find(item => item.includes("--from="));

    if (!fromUnitArg) {
        printManual();
        process.exit();
    }

    const fromUnitName = fromUnitArg.slice(7);


    if (!acceptedUnitNames.includes(fromUnitName)) {
        printManual();
        process.exit();
    }

    const fromValueArg = commandArgs.find(item => item.includes("--value="));

    if (!fromValueArg) {
        printManual();
        process.exit();
    }

    const fromValue = parseFloat(fromValueArg.slice(8));

    if (isNaN(fromValue)) {
        printManual();
        process.exit();
    }

    return getCalculatedResults(fromUnitName, fromValue);
};

module.exports = runForCmdLineArgs;
