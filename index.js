// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
     return [drivers[0],drivers[1]];
};

const returnLastTwoDrivers = function(drivers){
    let size = drivers.length;
     return [drivers[size -2],drivers[size - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}

const fareDoubler = function (fare ){
    return fare * 2;
}

const fareTripler = function (fare ){
    return fare * 3;
}

const selectDifferentDrivers = function (arrayOfDrivers, func ){
    return func(arrayOfDrivers);
}
