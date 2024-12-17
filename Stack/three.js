let arr = [2,0,1,5,9,2,10,6,3]
let stack = []
let ans = new Array(arr.length).fill(-1)

for(let x=0; x<arr.length; x++){

   while(stack.length > 0 && arr[stack[stack.length-1]] < arr[x]){
    let index = stack.pop()
     ans[index] = arr[x]
   }


    stack.push(x)
}

console.log(ans)