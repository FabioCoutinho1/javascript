var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

for(var i = 0; i <= 8; i++){
    for(var j = 15; j >= 7; j--){
        var m = arr[i]
        arr[i] = arr[j]
        arr[j] = m
        i+=1
    }
}
console.log(arr)