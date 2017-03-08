var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },




  // FUNCTIONS TO IMPLEMENT:

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    var result = {};
    for (var p in this['playlists']){
      if (this['playlists'].hasOwnProperty(p)){
        result[p] = this['playlists'][p]['name'] + ' - ' + this['playlists'][p]['tracks'].length + ' tracks';
        console.log(p + ': ' + result[p]);
      }
    }

  },




  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    var result = {};
    for (var t in this['tracks']){
      if (this['tracks'].hasOwnProperty(t)){
        result[t] = this['tracks'][t]['name'] + ' by ' + this['tracks'][t]['artist'] + ' (' + this['tracks'][t]['album'] + ')';
        console.log(t + ': ' + result[t]);
      }
    }

  },


  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var result = {};

    result[playlistId] = this['playlists'][playlistId]['name'] + ' - ' + this['playlists'][playlistId]['tracks'].length + ' tracks';

    for (var t in this['playlists'][playlistId]['tracks']){
        var track = this['playlists'][playlistId]['tracks'][t]
        result[track] = this['tracks'][track]['name'] + ' by ' + this['tracks'][track]['artist'] + ' (' + this['tracks'][track]['album'] + ')';

    }
    console.log(result);



  },


  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    if (this['tracks'][trackId]){

      if (this['playlists'][playlistId]['tracks'].indexOf(trackId) === -1){

        this['playlists'][playlistId]['tracks'].push(trackId);
        console.log(this['playlists'][playlistId]['tracks']);
        console.log('Track added');

      } else {

        console.log('Track already exists.');
      }
    } else {
      console.log('Track does not exist in Track List.');
    }

  },


  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // adds a track to the this

  addTrack: function (name, artist, album) {
    var uniqueId = this.uid();
    this['tracks'][uniqueId] = {
      id: uniqueId,
      name: name,
      artist: artist,
      album: album
    };
  },



  // adds a playlist to the this

  addPlaylist: function (name) {
    var uniqueId = this.uid();
    this['playlists'][uniqueId] = {
      id: uniqueId,
      name: name,
      tracks: []
    };

  },




  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {

    var result = [];
    for (var t in this['tracks']){
      if (this['tracks'].hasOwnProperty(t)){
        for (var p in this['tracks'][t]){
          if (this['tracks'][t][p].search(query) !== -1){
            result.push(t);
            break;
          }
        }
      }
    }


    this.printSelectedTracks(result);


  },

  printSelectedTracks: function(tracksArr) {
    var result = {};
    for (var t in tracksArr){

      var track = this['tracks'][tracksArr[t]];
      result[t] = track['name'] + ' by ' + track['artist'] + ' (' + track['album'] + ')';


    }
    console.log(result);
  }






}


// library.printPlaylists();
// library.printTracks();
// library.printPlaylist('p01');
// library.addTrackToPlaylist('t02', 'p01');
// library.addTrack("at the lighthouse" , "David and Brenton", "Week 1 Day 3");
// library.addPlaylist("WEB");
// library.printSearchResults('Jonathan');
