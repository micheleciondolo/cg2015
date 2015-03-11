function printrand402 () {
	var i= Math.floor(Math.random() * 101);
 
  if(i>=40)
  for (j=40; j<i; j++) {
  	if(j%2!=0) console.log(j)
 }
  else
  	 for (j=40; j>=i; j--) {
  	if(j%2!=0) console.log(j)
}
}
printrand402();