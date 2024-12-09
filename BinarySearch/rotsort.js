let arr = [4,5,6,7,1,2,3]
let target = 6

let left = 0;
let right = arr.length - 1

function add(){
    while(left <= right){
        let mid  = Math.floor((left + right) / 2)
        if(arr[mid] == target){
           return mid; 
        }

        if(arr[left] <= arr[mid]){
             if(target >= arr[left] && target < arr[mid]){
                 right = mid - 1 
             }else{
                 left = mid + 1
             }
        }else{
             if(target > arr[mid] && target <= arr[right]){
                left = mid + 1
             }else{
                right = mid - 1
             }
        }
    }
    return -1   
}

console.log(add())