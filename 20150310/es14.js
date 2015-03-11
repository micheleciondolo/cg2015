function mediaedev() {
var i= Math.floor((Math.random() * 10));
var j= Math.floor((Math.random() * 10));
var media= (i+j)/2;
console.log(i-media);
console.log(j-media);
var deviazione= Math.sqrt((Math.pow((i-media),2)+Math.pow((j-media),2))/2);
console.log("I numeri sono: "+i+" e "+j+" La media è: "+media+", la deviazione è: "+deviazione);
}

mediaedev();