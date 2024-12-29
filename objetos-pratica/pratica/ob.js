const prompt = require('prompt-sync')();

const produtos = [
    {id: 1, nome: "celular", preco: 700},
    {id: 2, nome: "notebook", preco: 2500},
    {id: 3, nome: "geladeira", preco: 4000}
]

console.log("\nBuscar produto")

let nomeProduto = prompt("Nome do produto: ")

const buscar = produtos.find(produto => produto.nome === nomeProduto)

console.log(buscar)

console.log("\nfiltrar por preço")

const filtrar = produtos.filter(produtos => produtos.preco > 700)

console.log("\nProdutos caros:")

console.log(filtrar)

// const numero =  [1, 2, 3, 4, 5]

// const numerosQuadrados = numero.map(numeros => numeros * numeros)

// console.log(numerosQuadrados)

// const nomes = ["fabio", "pedro", "arthur", "bueno"]

// const nomesSr = nomes.map(nome => console.log(`Sr. ${nome}`))

// console.log(nomesSr)