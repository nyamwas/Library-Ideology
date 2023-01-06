/* Date created: 25th Dec

   Date modified: 6th Jan
*/




class T{
  constructor(x){
    this.x = new Array(x)
  }







  function getX(){

   this.x.isEmpty() ? console.error() : console.log(this.x[0]).then((item) => console.log(item.toString())).catch((err) => console.error(err))


   return this.x
}
}





















class U extends T{
  constructor(x){
    this.x = new Object(x)
  }





  function getLeft(){





    this.x !== {} ? console.log(this.x.getX())  : console.error() 
  

    return
}





   function getRight(){




    this.x !== {} ? console.log(this.x.getX()) : console.error()

    return 
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


