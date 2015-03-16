(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');

    }
  };
  var x = this.prototype={size:20};// write code here
return x;
  var y = this.prototype={size:10}// write code here
console.log(typeof x);
  larger(x, y);    
}());


