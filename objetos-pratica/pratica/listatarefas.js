    const prompt = require('prompt-sync')();

let tarefas = []

while(true){
    console.log("\nGerenciador de Tarefas");
    console.log("1. Adicionar Tarefa");
    console.log("2. Ver tarefa");
    console.log("3. Remover tarefa");
    console.log("4. Sair");

    let opcao = prompt("Escolha uma opção: ");

    if(opcao === "1"){
        let novaTarefa = prompt("Digite uma terefa: ")
        tarefas.push(novaTarefa)
        console.log(`Tarefa "${novaTarefa}" Adicionada`)
    }else if (opcao === "2"){
        console.log("\nSuas Tarefas")
        if(tarefas.length === 0){
            console.log("Nenhuma Tarefa encontrada")
        }else{
            tarefas.forEach((tarefa, i) => {
                console.log(`${i + 1}. ${tarefa}`)
            });
        };
    }else if(opcao === "3"){
        let i = parseInt(prompt("Digite o numero da tarefa que deseja remover")) - 1
        if(i >= 0 && i < tarefas.length){
            console.log(`Tarefa "${tarefas[i]}" Removida! `)
            tarefas.splice(i, 1)
        }else{
            console.log("tarefa invalida")
        }

    }else if (opcao === "4"){
        console.log("Saindo do gerenciador de tarefas, ate logo")
        break   
    } else{
        console.log("Opção invalida, Tente novamente")
    };
};


