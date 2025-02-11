const { getCalculatedResults } = require("./utils");

const acceptedUnitNames = ["celsius", "fahrenheit", "kelvin"];

const commandArgs = process.argv.slice(2, 4).map(
    arg => arg.toLowerCase()
);

const printManual = () => {
    const manualText = `
        Usage: node index.js --from=[unitName] --value=[number]\n
        Convert temperature to other units of temperature.\n
        Accepted values for [unitName]: "celsius", "fahrenheit" and "kelvin"\n
        Accepted values for [number]: It must always be a valid decimal number.\n
        Example: node index.js --from=celsius --value=200
    `;

    console.log(manualText);
}

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

const results = getCalculatedResults(fromUnitName, fromValue);

console.log(`${fromValue} ${results.name}`);
results.convertedResults.forEach(({ name, value }) => {
    console.log(`${value} ${name}`);
});
