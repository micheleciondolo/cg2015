(function () {

  function Summer(){
   if (!(this instanceof Summer)){
        return new Summer();
   }
   //the constructor properties and methods here
                       this.sum=0,
                     this.add= function(n){this.sum=this.sum+n;}, 
                    this.getCurrentSum=function() {return this.sum;} }
                       
  ;


  var s1 = Summer();
  var s2 = Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());
  console.log(this.prototype)

  // prints 35
  console.log(s2.getCurrentSum());

}());