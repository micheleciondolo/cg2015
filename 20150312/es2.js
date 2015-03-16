(function() {
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };

  var music = [this.prototype={name: "Definitely Maybe - Oasis", played: 3},this.prototype={name: "Abbey Road - The Beatles", played: 7}];

  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  fav= "Your favorite album was played " + fav.play + " times";
  console.log( fav );
}());