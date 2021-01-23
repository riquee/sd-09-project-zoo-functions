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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const receivedIds = [...ids];
  const animalsArray = [];
  receivedIds.forEach((id) => {
    animals.forEach((specie) => {
      if (id === specie.id) {
        animalsArray.push(specie);
      }
    });
  });
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  const specieName = animals.find(specie => specie.name === animal);
  const animalsValidadeAge = specieName.residents.every(item => item.age >= age);
  return animalsValidadeAge;
}

function employeeByName(name = {}) {
  const search = employees.find(employee =>
  employee.firstName === name || employee.lastName === name);
  return search === undefined ? {} : search;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers
    .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(specie) {
  const objCount = animals.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.residents.length;
    return previousValue;
  }, {});
  const search = animals.find(animal => animal.name === specie);
  return search === undefined ? objCount : search.residents.length;
}

function entryCalculator(entrants = 0) {
  let result = 0;
  const getPrices = Object.entries(prices);
  const getEntrances = Object.entries(entrants);
  getEntrances.forEach((typeEntry) => {
    getPrices.forEach((price) => {
      if (typeEntry[0] === price[0]) {
        result += (typeEntry[1] * price[1]);
      }
    });
  });
  return result;
}

// 9
// function returnAnimalsByLocation() {
//   const object = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   Object.keys(object).forEach((key) => {
//     object[key] = animals
//     .filter(item => item.location === key)
//     .map(specie => specie.name);
//   });
//   return object;
// }

function animalMap(options = '') {
  // seu codigo aqui
}

// 10
function newSchedule() {
  const object = {};
  const getHoursEntries = Object.entries(hours);
  getHoursEntries.forEach((day) => {
    if (day[1].open === 0) {
      object[day[0]] = 'CLOSED';
    } else {
      object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    }
  });
  return object;
}

function scheduleOfDay(day, object) {
  const newObject = {};
  const getScheduleEntries = Object.entries(object);
  const verify = getScheduleEntries.find(entry => entry[0] === day);
  newObject[verify[0]] = verify[1];
  return newObject;
}

function schedule(dayName) {
  return (dayName === undefined) ? newSchedule() : scheduleOfDay(dayName, newSchedule());
}

// 11

function findEmployee(receivedId) {
  const filteredEmployee = employees.find(employee => employee.id === receivedId);
  return filteredEmployee;
}

function findSpecie(employee) {
  const specie = employee.responsibleFor
  .map(idResp => animals
  .find(animal => animal.id === idResp));
  return specie;
}

function oldestFromFirstSpecies(id) {
  const receivedSpecie = findSpecie(findEmployee(id));
  const getOlder = receivedSpecie[0].residents
  .reduce((older, current) => (older.age > current.age ? older : current));
  return Object.values(getOlder);
}

// 12
// Esse tipo de arredondamento de casa decimal usado na linha 156 foi encontrado no stackoverflow, no link 'https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary'

function increasePrices(percentage) {
  const convertPercentage = 1 + (percentage / 100);
  const result = Object.keys(prices).forEach((item) => {
    prices[item] = (Math.round((prices[item] * convertPercentage) * 100)) / 100;
  });
  return result;
}

// 13
// Recebe id ou firsName ou lastName do employee como parametro
// Retorna um objeto { nomeDoColaborador: ['specie1', 'specie2',...]}

// Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis.
function returnCompleteList() {
  const result = {};
  employees.forEach((employee) => {
    result[`${employee.firstName} ${employee.lastName}`] = []
    employee.responsibleFor.forEach((idResp) => {
      const getAnimals = animals.find(animal => animal.id === idResp);
      result[`${employee.firstName} ${employee.lastName}`]
      .push(getAnimals.name);
    });
  });
  return result;
}

// Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
function returnListById(id) {
  const result = {};
  const findEmployee = employees.find(employee => employee.id === id);
  result[`${findEmployee.firstName} ${findEmployee.lastName}`] = [];
  findEmployee.responsibleFor.forEach((idResp) => {
    const getAnimals = animals.find(animal => animal.id === idResp);
    result[`${findEmployee.firstName} ${findEmployee.lastName}`]
    .push(getAnimals.name);
  });
  return result;
}

// Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
function returnListByName(name) {
  const result = {};
  const findEmployee = employees
  .find(employee => employee.firstName === name || employee.lastName === name);
  result[`${findEmployee.firstName} ${findEmployee.lastName}`] = [];
  findEmployee.responsibleFor.forEach((idResp) => {
    const getAnimals = animals.find(animal => animal.id === idResp);
    result[`${findEmployee.firstName} ${findEmployee.lastName}`]
    .push(getAnimals.name);
  });
  return result;
}

// Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
// function returnListByLastName(lastName) {
//   const result = {};
//   const findEmployee = employees.find(employee => employee.firstName === lastName);
//   result[`${findEmployee.firstName} ${findEmployee.lastName}`] = [];
//   findEmployee.responsibleFor.forEach((idResp) => {
//     const getAnimals = animals.find(animal => animal.id === idResp);
//     result[`${findEmployee.firstName} ${findEmployee.lastName}`]
//     .push(getAnimals.name);
//   });
//   return result;
// }

function employeeCoverage(idOrName) {
  if (!idOrName) return returnCompleteList();
  if (idOrName.length === 36) return returnListById(idOrName);
  return returnListByName(idOrName);
}

//

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
