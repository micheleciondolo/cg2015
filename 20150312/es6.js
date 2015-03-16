(function() {

  function MusicBox(){
   if (!(this instanceof MusicBox)){
        return new MusicBox();
   }
  
                        }
       ;
  MusicBox.prototype= {
                    arralb:new Array(),
                    addAlbum:function(n){this.arralb.push(n);},
                    favoriteAlbum:function() {
                    var arr2= new Array();
                    this.arralb.forEach(function(item) {
                           arr2.push(item.count);})
                          var m= Math.max.apply(Math,arr2);
                          console.log(m);
                         var j= this.arralb.filter(function(item){return item.count==m}).pop(); 
                           return j.artist+" - "+j.name}
  }
  function Album(artist,name){
 if (!(this instanceof Album)){
        return new Album(artist,name);
   }
   this.artist=artist;
   this.name=name;
 }
  
  Album.prototype={  
           count: 0,
           play: function() {this.count=this.count+1;}
  }
  ;

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play(); // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());