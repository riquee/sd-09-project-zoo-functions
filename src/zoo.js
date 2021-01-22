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
  const animal = data.animals.filter(bicho => ids.includes(bicho.id));
  return animal;
}

function animalsOlderThan(especie, idade) {
  const animaisFiltrados = data.animals.find(bicho => bicho.name === especie);
  if (animaisFiltrados.residents.every(animal => animal.age > idade)) {
    return true;
  }
  return false;
}

function employeeByName(employeeName) {
  if (!employeeName){
    return {};
  }
  let funcionarios = data.employees.find((func) => {
    func.firstName === employeeName || func.lastName === employeeName});
  return funcionarios;
}
console.log(employeeByName());

function createEmployee(personalInfo, associatedWith) {
  const novoFuncionario = { ...personalInfo, ...associatedWith };
  return novoFuncionario;
}

function isManager(id) {
  const gerente = employees.some(elemento => elemento.managers.includes(id));
  return gerente;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newFunc = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newFunc);
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => (animal.name === species).residents.length);
}

function entryCalculator(entrants) {
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const findFunc = data.employees.find(funcionario => (funcionario.id === id));
  const findAnimal = data.animals.find(animal => animal.id === findFunc.responsibleFor[0]);
  const sortAnimal = findAnimal.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortAnimal[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
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
