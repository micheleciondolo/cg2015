function sommanumeri () {

	var i= Math.floor((Math.random() * 10000));
	console.log(i);
	var s= cicla(i);
	while (s.toString().length>1)
		s=cicla(s);
	return s;
}

function cicla(i) {
	var g= i.toString().split('');
     var k=0;
     var s=0;
    for(k=0; k< g.length; k++)
    	s=s+parseInt(g[k]);
    return s;
}
sommanumeri();