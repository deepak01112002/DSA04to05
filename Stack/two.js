let arr = [2,0,1,5,9,2,10,6,3]
let stack = []
let ans = new Array(arr.length).fill(-1)
for(let x=arr.length-1; x>=0; x--){

   while(stack.length > 0 && stack[stack.length-1] <= arr[x]){
    stack.pop()
   }
    if(stack.length > 0){
    ans[x] = stack[stack.length - 1]
    }
    stack.push(arr[x])
   
}
console.log(ans)