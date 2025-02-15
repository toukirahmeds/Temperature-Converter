const runForCmdLineArgs = require("./runForCmdLineArgs");
const runForConsoleInput = require("./runForConsoleInput");
const { printManualAndExit } = require("./utils");
const { HELP_ARG } = require("./constants");

/**
 * Starts the app.
 */
const main = async () => {
    // Create an array only containing first and second argument.
    const commandArgs = process.argv.slice(2, 4).map(
        arg => arg.toLowerCase()
    );

    const isHelpArgExists = commandArgs.includes(HELP_ARG);

    // If '--help' command-line argument exists, then
    // print manual and exit.
    if (isHelpArgExists) {
        printManualAndExit();
    }

    let results;

    // If there's input through command-line arguments, then
    // calculate using command-line arguments. Otherwise,
    // start taking input from console.
    if (commandArgs.length) {
        results = runForCmdLineArgs(commandArgs);
    } else {
        results = await runForConsoleInput();
    }

    // Print the output.
    console.log(`\n${results.value} ${results.name}`);
    results.convertedResults.forEach(({ name, value }) => {
        console.log(`${value} ${name}`);
    });
};

main();
