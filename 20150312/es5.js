function Bingo () {
         
	    };

Bingo.prototype= {num: Math.floor((Math.random()*10)+1),
	              guess: function(n) {return n==this.num}}
          
var b= new Bingo();

