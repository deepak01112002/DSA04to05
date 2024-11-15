let arr = [1,2,3,4,5,6]
// output :- true
// let arr = [4,6,8,9,12,156,556] // true
// let arr = [99, 58 , 36]  // false

// let flag = true;
// for(let x=0; x<arr.length; x++){
//     if(arr[x] > arr[x+1]){
//         flag = false;
//         break;
//     }
// }
// console.log(flag)


function isSorted(){
    for(let x=0; x<arr.length; x++){
        if(arr[x] > arr[x+1]){
            return false;
        }
    }
    return true;
}

console.log(isSorted())