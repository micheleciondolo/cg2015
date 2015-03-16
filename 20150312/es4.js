(function () {
  var person = {buy: function (ogg){console.log("I'm rich")}};
    // fill code here
  

  var  car = 
   {                   price: 1200,
                       drive: function() {console.log("Vrum Vrum")}// fill code here
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
 
}());



(function () 
{
  var employees = [{hello: function() {console.log("I")}},{ hello: function() {console.log("work")}},{hello: function() {console.log("at")}},{hello: function() {console.log("IBM")}}]

  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }

}());