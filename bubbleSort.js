let arr = [11,55,0,5,8,9]
let swap = false;
let n = arr.length;
for(let x=0; x<arr.length; x++){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swap = true;
        }
    }
    if(swap == false){
        break;
    }
}

console.log(arr)

// Merge Sort
// insertion sort

// do{
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i] > arr[i+1]){
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         swap = true;
//     }
// }
// n--
// }while(swap && n != 0)