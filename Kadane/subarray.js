let arr = [1,4,20,3,10,5]
let sum = 1002
let max = -Infinity
for(let i=0; i<arr.length; i++){
    let a = 0
    for(let j = i; j<arr.length; j++){
      a += arr[j]
    //   if(a > max){
    //     max = a
    //   }
     max = Math.max(a,max)
    }
    
}
console.log(max)

