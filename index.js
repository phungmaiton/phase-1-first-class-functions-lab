// Code your solution in this file!

let drivers;

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let fare;

function createFareMultiplier(multiplier){ 
    return function(fare){
        return fare*multiplier;
    }
}

function fareDoubler(fare) {
    const doulbler = 2;
    return fare*doulbler;
}

function fareTripler(fare) {
    const tripler = 3;
    return fare*tripler;
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}