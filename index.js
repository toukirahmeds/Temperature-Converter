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

let unit1Name, unit1Value, unit2Name, unit2Value;

if (fromUnitName === "celsius") {
    unit1Name = "Fahrenheit";
    unit1Value = fromValue * (9/5) + 32;

    unit2Name = "Kelvin";
    unit2Value = fromValue + 273.15;
} else if (fromUnitName === "fahrenheit") {
    unit1Name = "Celsius";
    unit1Value = (5/9) * (fromValue - 32);

    unit2Name = "Kelvin";
    unit2Value = (fromValue + 459.67) * (5/9);
} else if (fromUnitName === "kelvin") {
    unit1Name = "Celsius";
    unit1Value = fromValue - 273.15;

    unit2Name = "Fahrenheit";
    unit2Value = (fromValue - 273.15) * (9/5) + 32;
}

console.log(`${fromValue} ${fromUnitName}`);
console.log(`${unit1Value.toFixed(2)} ${unit1Name}`);
console.log(`${unit2Value.toFixed(2)} ${unit2Name}`);
