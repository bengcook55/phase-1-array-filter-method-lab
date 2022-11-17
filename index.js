// Code your solution here

function findMatching(names, string) {
    const result = names.filter(drivers => string.toLowerCase() === drivers.toLowerCase());
    return result;
}

function fuzzyMatch(initial, strings) {
    const beforeEach = initial.filter(drivers => drivers.slice(0,2) === strings);
    return beforeEach;
}

function matchName(driversMatch, name) {
    return driversMatch.filter((driver) => driver.name === name);
}