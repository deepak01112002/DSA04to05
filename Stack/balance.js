function isBalance(str){
   let stack  = [];
   let obj = {
     "}" : "{",
      "]" : "[",
      ")" : "("
   }
   for(let char of str){
     if(char == "(" || char == "{" || char =="["){
        stack.push(char)
     }else if(char == "}" || char == "]" || char == ")"){
           if(stack.length == 0 || stack.pop()  != obj[char]){
              return false;
           }
     }
   }
   return stack.length == 0
}

console.log(isBalance('{{[{()}]}'))