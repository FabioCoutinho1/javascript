var arr = []
num = 0

while (arr.length < 10) {
    if(num % 2 == 1){
        arr.push(num)
    }
    num+=1
}

console.log(arr)