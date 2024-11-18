let arr = [1,2,2,3,4,2];
// let target = 2;
let obj = {}
for(let x=0; x<arr.length; x++){
    if(obj[arr[x]] == undefined){
        obj[arr[x]] = 1
    }else{
        obj[arr[x]]++
    }
}

// if(obj[target] == undefined){
//     console.log(-1)
// }else{
//     console.log(obj[target])
// }