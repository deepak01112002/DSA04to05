// print the 2d array

let arr = [
    [1,2,3,6,8],
    [4,5,6],
    [7,8,9,9,5]
]

// let output = 1 2 3
//              4 5 6
//              7 8 9 

for(let x=0; x<arr.length; x++){
    let r = ""
    for(let i = 0; i<arr[x].length; i++){
        r += arr[x][i] + " "
    }
    console.log(r)
}

