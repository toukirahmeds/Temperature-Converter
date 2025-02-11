const unitProperties = require("./unitProperties");

const getCalculatedResults = (fromUnit, fromValue) => {
    const  currentUnitProperties = unitProperties[fromUnit];
    console.log(currentUnitProperties);

    return {
        name: currentUnitProperties.name,
        convertedResults: currentUnitProperties.convertTo.map(item => ({
            name: item.name,
            value: item.getValue(fromValue).toFixed(2)
        }))
    }
};

module.exports = {
    getCalculatedResults
};
