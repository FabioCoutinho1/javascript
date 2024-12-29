const prompt = require('prompt-sync')();

let tarefa = []

while(true){

    console.log("\nGerenciador de Tarefas");
    console.log("1. Adicionar Tarefa");
    console.log("2. Ver tarefa");
    console.log("3. Remover tarefa");
    console.log("4. Sair");

    let novaOpcao = prompt("Escolha uma tarefa ");

    if(novaOpcao === "1"){
        let novaTarefa = prompt("Adicione uma Tarefa ");
        tarefa.push(novaTarefa);
    }else if(novaOpcao === "2"){
        if(tarefa.length === 0){
            console.log("Nenhuma tarefa encotrada ");
        }else{
            console.log("\nSuas Tarefas!")
            tarefa.forEach((tarefas, index) =>{
                console.log(`${index + 1}. ${tarefas} `);
            });
        };
    } else if(novaOpcao === "3"){
        let i = parseInt(prompt("digite o numero da tarefa que deseja remover" )) -1
        if(i <= 0 && i < tarefa.length){
            console.log(`Terefa ${tarefa[i]}, Removida `)
            tarefa.splice(i, 1)
        }else{
            console.log("Tarefa invalida ")
        }
    }else if(novaOpcao === "4"){
        console.log("saindo...")
        break
    }else{
        console.log("Opção invalida, tente novamente ")
    };
};2
