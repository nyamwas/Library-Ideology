class T{
  constructor(x){
    this.x = new Array(x)
  }

}




















class U extends T{
  constructor(x){
    this.x = new Object(x)
  }
  function getLeft(){




    this.x !== {} ? console.log(this.x)  : console.error() 
  }
  function getRight(){



    this.x !== {} ? console.log(this.x) : console.error()
 
  }

}
 

class V extends U{
  constructor(z){
   this.a = z.childNodes[0] 
   this.b = z.childNodes[1]
   this.c = false
  }
  function moveFwd(){
   this.b.style.transform = `translateX(${Math.floor(Math.random(2))}px)` 
   return this.b
  }
  function moveBack(){
   this.b.style.transform = `translateX(${Math.floor(Math.random(2))}px`
   return this.b
  }
}

  function 
