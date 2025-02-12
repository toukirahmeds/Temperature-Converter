const runForCmdLineArgs = require("./runForCmdLineArgs");

const commandArgs = process.argv.slice(2, 4).map(
    arg => arg.toLowerCase()
);

let results;

if (commandArgs.length) {
    results = runForCmdLineArgs(commandArgs);
}

console.log(`${results.value} ${results.name}`);
results.convertedResults.forEach(({ name, value }) => {
    console.log(`${value} ${name}`);
});
