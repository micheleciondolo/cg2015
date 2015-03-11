function mcm () {
		var i= 3;
		var j= 2;
var max= Math.max(i,j);
var n=0;
var mcm=0;
   for(n=1; n<=i*j; n++)
   if(n%i==0&&n%j==0) { mcm=n; 
   	break;
}
return mcm;

}


mcm();