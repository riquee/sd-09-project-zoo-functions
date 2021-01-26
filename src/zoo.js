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

const data = require('./data');
const {animals, employees, hours, prices} = data;

// const teste2 = [5, 6, 7, 8];
// const [cinco, seis, sete, oito] = teste2;
// let teste3 = {...hours, ...prices}

// console.log(teste3);

function animalsByIds(...ids) {
  const foundAnimals = ids.map((actualId) => {
    const foundAnimal = data.animals.find(animal => actualId === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  return data.animals.some(objAnimal => objAnimal.residents.every(
    residentAnimal => residentAnimal.age >= age && objAnimal.name === animal,
  ));
}


function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(
    employee => employee.lastName === employeeName || employee.firstName === employeeName,
  );
}


function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
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
