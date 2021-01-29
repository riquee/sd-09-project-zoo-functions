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
  return animals.filter((animal, index) => ids[index] === animal.id);
}

function animalsOlderThan(animal, age) {
  /*
  Verificar se é 'true' o retorno de um filtro realizado por espécie e idade mínima
  1. Buscar o objeto contendo os animais;
  2. Buscar nesse objeto a espécie indicada no parâmetro da função;
  3. Acessar a idade de cada um dos animais da espécie
  4. Verificar se essa idade é superior ao parâmetro passado
  5. Retornar true se todos os animais atenderem aos critérios, senão retorna false
  */

  const findSpecies = animals.find(element => element.name === animal).residents;

  return findSpecies.every(element => element.age > age);
}

function employeeByName(employeeName) {
  /*
  Objetivo: Retornar o objeto do funcionário.
  Deverá ser possível pesquisar por nome ou sobrenome.
  Caso não seja indicado um nome ou sobrenome retornar um objeto vazio.

  1 - Acessar o objeto employee
  2 - Buscar pelo nome ou sobre nome
  3 - Retornar o objeto
  */

  const employeeReturn = employees.find(
    element => element.firstName === employeeName || element.lastName === employeeName);

  const emptObject = {};

  if (employeeName === undefined) {
    return emptObject;
  }
  return employeeReturn;
}

function createEmployee(personalInfo, associatedWith) {
  /*
  A função deverá receber dois objetos e consolidá-los.
  Retornar ao usuário como return.

  1 - Consolidar os parâmetros e criar o objeto
  2 - Retornar ao usuário o objeto criado
  */

  const newEmployee = { ...personalInfo, ...associatedWith };

  return newEmployee;
}

function isManager(id) {
  /*
  Verificar por meio do ID do funcionário se ocupa cargo de gerência.

  1 - Acessar o objeto employess e localizar por meio do id;
  2 - Verificar se o profissional encontrado possui cargo de gerente;
  Obs.: Se a chave manager tiver 1 item é gerente.
  */

  const findEmployeeById = employees.find(employee => employee.id === id);

  if (findEmployeeById.managers.length === 1) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  /*
  Irá adicionar um novo colaborar ao Objeto employees no arquivo Data.

  1 - Criar um objeto com os parâmetros passados na função;
  2 - Inserir esse objeto como chave ao final do objeto employees no arquivo Data.
  */

  const newEmployee = { id, firstName, lastName, managers, responsibleFor };

  employees.push(newEmployee);
}

function animalCount(species) {
  /*
  Deverá contabilizar a quantidade de animais considerando:
  - Sem parâmetro: Retorna um objeto com chave animal: quantidade.
  - Com a espécie: Retorna a quantidade.

  0 - Criar um objeto vazio para a lista de animais
  1 - Verificar se o parâmetro é undefined.
  - Se sim: Retornar um objeto com todos os nomes e quantidades;
  - Se não: Fazer um find que acesse a chave e retorne a quantidade.
  */

  if (species === undefined) {
    const allAnimals = {};
    animals.map(animal => (allAnimals[animal.name] = (animal.residents.length)));

    return allAnimals;
  }

  const especificSpecieNumber = animals.find(animal => animal.name === species);

  return especificSpecieNumber.residents.length;
}

function entryCalculator(entrants) {
  /*
  Calcular o valor total a ser cobrado dos visitantes considerando:
  - Adult paga 49.99;
  - Child paga 20.99: e
  - Senior paga 24.99.

  1 - Resgatar os valores do arquivo data conforme tipo de visitante;
  2 - Multiplicar quantidade de visitantes pelo valor e somar retornando o total;
  3 - Exceções:
  - Se nenhum argumento for passado retorne 0;
  - Se um objeto vazio for passado retorne 0.
  */

  const { Child = 0, Adult = 0, Senior = 0 } = entrants;

  const totalEntryRevenues =
    (Child * prices.Child) +
    (Adult * prices.Adult) +
    (Senior * prices.Senior);

  return totalEntryRevenues;
}


function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  /*
  Deve disponibilizar os dias e horário de funcionamento conforme pesquisa do usuário.
  */
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  /*
  Atualizar os preços dos ingressos por meio de percentual.
  Deverá receber um numero inteiro que representa um percentual de reajuste.
  O valor retornado deverá ter arredendamento de valor.

  1 - Acessar os valores dos ingressos no objeto prices do data;
  2 - Multiplicar os values das chaves pelo input dado pelo usuário;
  3 - Arredondar os valores obtidos; e
  4 - Atualizar o objeto prices do data
  */

  Object.keys(prices).forEach(increase =>
    (prices[increase] =
      (Math.round(prices[increase] * percentage) +
      (prices[increase] * 100)) / 100));
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
