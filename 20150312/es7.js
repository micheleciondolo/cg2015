(function () {
function PhotoAlbum(){
   if (!(this instanceof PhotoAlbum)){
        return new PhotoAlbum();
   }

 };
 function Photo(name){
   if (!(this instanceof Photo)){
        return new Photo();
   }
  this.name=name;
 }
 Photo.prototype= { 
  tags: new Array(),
  tag: function (x){ this.tags.push(x);},
  showTags: function() {return this.tags;}}

  

 PhotoAlbum.prototype= {
  alb: new Array(),
   addPicture: function(x){ this.alb.push(x)},
   showPictures: function(nome){return this.alb.filter(function (x){console.log(x);x.showTags.some(function(a){console.log(a);return a==nome})})}
 }
 
  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());