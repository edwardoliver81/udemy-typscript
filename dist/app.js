"use strict";
var _a;
const e1 = {
    name: 'Eddie',
    privileges: ['create-server'],
    startDate: new Date(),
};
function addVals(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addVals('Eddie', ' Godsey');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Eddie',
    job: { title: 'CEO', description: 'My own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
