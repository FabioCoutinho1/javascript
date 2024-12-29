const prompt = require('prompt-sync')();

const quartos = [];

while(true){
    console.log("ADD hospede: (1)")

    const op = prompt("Escolha um opção: ")

    if(op === "1"){
        let quarto = parseInt(prompt("Quarto: "))
        let nome = prompt("Nome: ")
        let saida = prompt("Saida: ")

        const addHospedes = (quarto, nome, saida) =>{
            const hospede = {quarto, nome, saida}
            quartos.push(hospede)
        };

        addHospedes(quarto, nome, saida)
        console.log(quartos)
    };

    if(op !== "1"){
        console.log("Opção invalida")
        break
    }
};


