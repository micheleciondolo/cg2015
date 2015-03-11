function printrand40 () {
	var i= Math.floor(Math.random() * 101);
  var j;
  for (j=40; j<i; j++) {
  	if(j%2!=0) console.log(j)
 }
}

printrand40();