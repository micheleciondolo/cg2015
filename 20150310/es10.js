function sommanumeri () {
	var i= Math.floor((Math.random() * 10000));
	var g= i.toString().split('');
     var k=0;
     var s=0;
    for(k=0; k< g.length; k++)
    	s=s+parseInt(g[k]);
return s;

}

sommanumeri();