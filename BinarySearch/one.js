let arr = [1,2,2,2,2,2,2,3,4]
let target = 8;
let left = 0;
let right = arr.length - 1
while(left <= right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid] == target){
        console.log(mid);
        break;
    }

    if(target < arr[mid]){
      right = mid - 1
    }else if(target > arr[mid]){
       left = mid + 1
    }
}