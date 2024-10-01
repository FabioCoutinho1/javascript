var arr = []

for (let i = 0; i < 40; i++) {
     arr[i] = i + 1
}

for( let i = 1; i < 40; i++){
    arr[i] = arr[i] + arr[i-1]
}


console.log(arr)