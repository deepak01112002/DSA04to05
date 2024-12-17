let myMap = new Map()

myMap.set('a',1)
myMap.set('b',1)
myMap.set('c',1)
myMap.set('a',3)



// for(let key in myMap){
//     console.log(key)
// }

myMap.forEach((el)=>{
    console.log(el)
})


