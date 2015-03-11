function divide () {
	 var i=  Math.floor((Math.random() * 10000));
	 var j=  Math.floor((Math.random() * 10000));
	 console.log(i+" "+j)
	 var k=0;
	 var max= Math.max(i,j);
	 var num=0;
	for(k=max; k>1; k--)
		if(i%k==0&&j%k==0) num=k;
    if (num==0) return "non trovato"
    	      else return num;
}

divide();