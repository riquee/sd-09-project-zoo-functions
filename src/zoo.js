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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map(arrayIds => animals.find(arrayAnimals => arrayAnimals.id === arrayIds));
}

function animalsOlderThan(animal, age) {
  return animals.find(animalFind => animalFind.name === animal)
  .residents.every(arrayResidents => arrayResidents.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(employee =>
  employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  let returValue = false;
  employees.forEach((arrayEmployees) => {
    if (arrayEmployees.managers.some(manager => (manager === id))) {
      returValue = true;
    }
  });
  return returValue;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
}

//   const id = '7ed1c9bb-8570-44f6-b718-06669999573a';
//   const firstName = 'teste';
//   const lastName = 'testado';


// const  teste2 = [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992'
//   ];

// const teste3 = [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
//   ];

// addEmployee(id, firstName, lastName, teste2, teste3);
// console.log(employees);

function animalCount(species) {
  if (species === undefined) {
    const objectAnimals = {};
    animals.forEach((animal) => (objectAnimals[animal.name] = animal.residents.length ));
    return objectAnimals;
  } 
  return animals.find(animal => animal.name === species).residents.length;
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
