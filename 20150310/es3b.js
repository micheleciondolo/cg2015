function capitalized (stringa) {
	 return stringa.toUpperCase()
	 ;
}

function cap2 () 
{a= "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var d = a.split(" ");
d.forEach(function (item,index,array) {
 array[index]= item.toUpperCase();
});
return d.join(" ");
}
console.log(cap2());