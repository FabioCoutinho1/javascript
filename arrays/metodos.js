const pessoas = [
    { nome: "João Silva", idade: 30, salario: 3500.00, licenca: true },
    { nome: "Maria Oliveira", idade: 28, salario: 4000.00, licenca: false },
    { nome: "Carlos Souza", idade: 35, salario: 5500.00, licenca: true },
    { nome: "Ana Costa", idade: 40, salario: 6200.00, licenca: true }
];

// 1 - Reverse
// const reversePessoa = pessoas.reverse(); 

// 2 -  find

const highSallary = 5000

const highestSallary = pessoas.find((user) => user.salario > highSallary)
// so traz um resulado

console.log(highestSallary);

// 3 - findIndex 

const lowestSallary = pessoas.findIndex((user) => user.salario > 0 && user.salario < 4000);


pessoas[lowestSallary].salario += 1000;

console.log(pessoas);

// 4 - incluids

const numbers = [1, 2, 3, 4, 5]

const hasFour = numbers.includes(3)

console.log(hasFour)

// 5 - map

pessoas.map((user) => (user.newletter = false));

// console.log(pessoas )

// 6 - filter 

const drivers = pessoas.filter((user) => user.licenca)

console.log(drivers)

// 7 - reduce

const sallarieSum = pessoas.reduce((totalSallary, user) => (totalSallary += user.salario), 0)

console.log(sallarieSum)