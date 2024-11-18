let arr = [1,2,2,3,4,4,5];
// let output = [1,2,3,4,5];

let ans = []
for(let x=0; x<arr.length; x++){
    if(!ans.includes(arr[x])){
          ans.push(arr[x])
    }
}

// let obj = {}
// for(let x=0; x<arr.length; x++){
//     if(obj[arr[x]] == undefined){
//         obj[arr[x]] = 1
//     }else{
//         obj[arr[x]]++
//     }
// }

// for(let key in obj){
//     ans.push(+(key))
// }


console.log(ans)