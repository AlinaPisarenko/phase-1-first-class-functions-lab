const arrayOfDrivers = ["Antonia", "Viki", "Mo", "Carl"];
const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

returnFirstTwoDrivers(arrayOfDrivers);
returnLastTwoDrivers(arrayOfDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function (int) {
    return fare * int;
  };
}
createFareMultiplier();

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, someFunction) {
  return someFunction(arrayOfDrivers);
};
