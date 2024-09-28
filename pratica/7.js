var arr1 = []
var arr2 = []
var arr3 = []
var i
var j = 0

for(i = 0; i<21; i++){
    arr1[i] = i+1*3
    arr2[i] = i*2
}

for( let c = 0; c < 40; c++){
    if(c % 2 == 0){
        j++
        arr3[c] = arr2[j]
    }else{
        arr3[c] = arr1[j]
    }
}

console.log(arr1, arr2, arr3)