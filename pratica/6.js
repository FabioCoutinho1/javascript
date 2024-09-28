var arr = [-1,12,15,-5,-8]
var pos

for(pos in arr){
    if(arr[pos] <= -1){
        arr[pos] = 0
    }
    
}

console.log(arr, "ola")