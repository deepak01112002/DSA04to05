let arr = [1,5,6,9,12,15]
let target =  9
function solve(){
    let left = 0;
let right = arr.length - 1;
while(left < right){
   let sum = arr[left] + arr[right]
   if(sum == target){
     return [left,right]
   }else if( sum  > target){
     right--
   }else {
     left++
   }


} 
  return -1
}


console.log(solve())