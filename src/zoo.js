/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const emptyArray = [];
  ids.forEach(newID => emptyArray.push(animals.find(parametro => parametro.id === newID)));
  return emptyArray;
}

function animalsOlderThan(animal, age) {
  const especies = animals.find(especie =>
    especie.name === animal).residents.every(resident =>
    resident.age >= age);
  return especies;
}

function employeeByName(employeeName = false) {
  let name = {};
  if (!employeeName) return name;
  name = employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return name;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employee = createEmployee(personalInfo, associatedWith);
  employees.push(employee);
}

function animalCount(species) {
  const result = animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  if (species) return result[species];
  return result;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants)
    .reduce((acc, cur) => {
      return acc + prices[cur] * entrants[cur]
    }, 0);
}

function animalMap(options) {

}

function schedule(dayName) {

}

function oldestFromFirstSpecies(id) {

}

function increasePrices(percentage) {

}

function employeeCoverage(idOrName) {

}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
