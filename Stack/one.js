class stack {
    constructor(){
        this.arr = []
    }
    push(el){
        this.arr.push(el)
    }
    pop(){
      if(this.isEmpty()){
          return "Underflow"
      }
      return this.arr.pop()
    }
    isEmpty(){
        return this.arr.length == 0
    }
    peek(){
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.arr[this.arr.length - 1]
    }
    size(){
        return this.arr.length
    }
    print(){
        return this.arr
    }
}


let stk = new stack(); 


let str = "pop";

for(let char of str){
    stk.push(char)
}

let ans = ""
while(stk.isEmpty()==false){
  ans += stk.peek()
  stk.pop()
}

if(str == ans){
    console.log("Palindrome")
}else{
    console.log("Not palindrome")
}
