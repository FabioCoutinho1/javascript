var arr = []
var cont = 0

for(var i = 0; i < 40; i++){
    const numAle = Math.floor(Math.random() * 1000)
    arr[i] = numAle

    if(arr[i] % 2 == 0){
        cont+=1
        console.log(arr[i], "Esse e par" )
    }

}

console.log("são ", `${cont}`, "pares no total")