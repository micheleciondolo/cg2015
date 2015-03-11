function randomize3 () {
	var a= [Math.floor((Math.random() * 100) + 1),Math.floor((Math.random() * 100) + 1),Math.floor((Math.random() * 100) + 1)];
    return Math.max.apply(Math,a);
}

randomize3();