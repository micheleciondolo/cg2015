function printrandeven () {
	var i= Math.floor(Math.random() * 101);
  var j=0;
  for (j=0; j<i; j++) {
  	if(j%2==0) console.log(j)
 }
}

printrandeven();