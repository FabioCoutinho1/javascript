const URL = ("https://dummyjson.com/products")


async function chamarApi (){
    const res = await fetch(URL)
    console.log(res)
    if(res.status === 200){
        const data = await res.json()
        console.log(data)

    }
}

chamarApi()