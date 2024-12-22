const prompt = require('prompt-sync')();
const produtos = []

let id = 0

while(true){

    const nome = prompt("Nome do produto")
const preco = parseInt(prompt("Preço do preduto"))

function addProduto (id, nome, preco){
    const produto = {id, nome, preco}
    produtos.push(produto)
}

addProduto(id+=1, nome, preco )

console.log(produtos)
}

