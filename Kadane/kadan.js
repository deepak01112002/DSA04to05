let arr = [-2,3,1,-4,2,5]

let sum = arr[0]
let ans = arr[0]
for(let i=0; i<arr.length; i++){
    sum = Math.max(arr[i], sum + arr[i])
    ans = Math.max(ans,sum)
}
console.log(ans)