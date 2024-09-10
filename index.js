var numero = document.querySelector('#n')
var i = 0

function adicionar(){
    i+=1
    
    numero.innerHTML = i
    return numero
}

function limpar(){
    i-=1
    numero.innerHTML = i
}