let mat = [
    [1,2,3],
    [4,5,6]
]

// output = [[1,4],[2,5],[3,6]]
let ans = []
for(let x=0; x<mat[0].length; x++){
    let a  = []
    for(let i=0; i<mat.length; i++){
       a.push(mat[i][x])
    }
    ans.push(a)
}
console.log(ans)
