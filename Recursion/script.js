function a(b){
  if(b == 0){
    return 1;
  }
  
    return b * a(b - 1)
}

console.log(a(5))