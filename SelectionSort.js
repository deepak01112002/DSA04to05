let arr = [11,55,0,5,8,9]

for(let i=0; i<arr.length-1; i++){
    let minIn = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] > arr[minIn]){
             minIn = j;
        }
    }

    let temp = arr[i];
    arr[i] = arr[minIn];
    arr[minIn] = temp;
}

console.log(arr)