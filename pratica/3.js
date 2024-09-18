var arr = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]

for(var i = 0; i < 8; i++){
    for(var j = 15; j > 7; j--){
        var m = arr[i]
        arr[i] = arr[j]
        arr[j] = m
        i+=1
    }
}
console.log(arr)