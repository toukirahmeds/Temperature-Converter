const runForCmdLineArgs = require("./runForCmdLineArgs");
const runForConsoleInput = require("./runForConsoleInput");

const main = async () => {
    const commandArgs = process.argv.slice(2, 4).map(
        arg => arg.toLowerCase()
    );

    let results;

    if (commandArgs.length) {
        results = runForCmdLineArgs(commandArgs);
    } else {
        results = await runForConsoleInput();
    }

    console.log(`\n${results.value} ${results.name}`);
    results.convertedResults.forEach(({ name, value }) => {
        console.log(`${value} ${name}`);
    });

    process.exit();
};

main();
