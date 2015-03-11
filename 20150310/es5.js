function randomize3 () {
	var a= [Math.floor(Math.random() * 101),Math.floor(Math.random() * 101),Math.floor(Math.random() * 101)];
    return Math.max.apply(Math,a);
}

randomize3();