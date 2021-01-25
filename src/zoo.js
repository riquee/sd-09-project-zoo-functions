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

const filt = (animals, ids) => {
  let b;
  for (let i = 0; i < ids.length; i += 1) {
    if (ids[i] === animals.id) {
      b = animals;
    }
  }
  return b;
};

const animals = idsA => data.animals.filter(item => filt(item, idsA));
function animalsByIds(...ids) {
  if (!ids[0]) {
    return [];
  }
  return animals([...ids]);
}

function animalsOlderThan(animal, age) {
  const selectedAnimal = data.animals.filter(item => item.name === animal);
  const isOlder = selectedAnimal[0].residents.every(resident => resident.age >= age);
  return isOlder;
}

const filtEmp = empName => data.employees.filter((emp) => {
  const emplo = emp.firstName === empName || emp.lastName === empName;
  return emplo;
})[0] || {};

function employeeByName(employeeName) {
  return filtEmp(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  personalInfo.managers = associatedWith.managers;
  personalInfo.responsibleFor = associatedWith.responsibleFor;
  return personalInfo;
}

function isManager(id) {
  return data.employees.map(item => item.managers.some(emp => emp === id))[0];
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmp = {};
  newEmp.id = id;
  newEmp.firstName = firstName;
  newEmp.lastName = lastName;
  newEmp.managers = managers || [];
  newEmp.responsibleFor = responsibleFor || [];
  data.employees.push(newEmp);
  return data;
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
