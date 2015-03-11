function printrandn(n) {
	var i=0;
	var arr = new Array();
	arr.push(Math.floor(Math.random() * 101));
   for(i=0; i<n; i++) 
   	 arr.push(Math.floor(Math.random() * 101));
    console.log(arr);
   	console.log(Math.max.apply(Math,arr));
}

printrandn(10);