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
             }
}



// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var result = {};
  for (var p in library['playlists']){
    if (library['playlists'].hasOwnProperty(p)){
      result[p] = library['playlists'][p]['name'] + ' - ' + library['playlists'][p]['tracks'].length + ' tracks';
      console.log(p + ': ' + result[p]);
    }
  }
  return result;
}

// console.log("Playlists: ", printPlaylists());


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var result = {};
  for (var t in library['tracks']){
    if (library['tracks'].hasOwnProperty(t)){
      result[t] = library['tracks'][t]['name'] + ' by ' + library['tracks'][t]['artist'] + ' (' + library['tracks'][t]['album'] + ')';
      console.log(t + ': ' + result[t]);
    }
  }
  return result;
}

//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var result = {};

  result[playlistId] = library['playlists'][playlistId]['name'] + ' - ' + library['playlists'][playlistId]['tracks'].length + ' tracks';

  for (var t in library['playlists'][playlistId]['tracks']){
      var track = library['playlists'][playlistId]['tracks'][t]
      result[track] = library['tracks'][track]['name'] + ' by ' + library['tracks'][track]['artist'] + ' (' + library['tracks'][track]['album'] + ')';

  }
  console.log(result);

  return result;

}

// printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  if (library['tracks'][trackId]){

    if (library['playlists'][playlistId]['tracks'].indexOf(trackId) === -1){

      library['playlists'][playlistId]['tracks'].push(trackId);
      console.log(library['playlists'][playlistId]['tracks']);
      console.log('Track added');

    } else {

      console.log('Track already exists.');
    }
  } else {
    console.log('Track does not exist in Track List.');
  }

}

// addTrackToPlaylist('t02', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  library['tracks'][uniqueId] = {
    id: uniqueId,
    name: name,
    artist: artist,
    album: album
  };
}

// addTrack("at the lighthouse" , "David and Brenton", "Week 1 Day 3");


// adds a playlist to the library

var addPlaylist = function (name) {
  var uniqueId = uid();
  library['playlists'][uniqueId] = {
    id: uniqueId,
    name: name,
    tracks: []
  };

}

// addPlaylist("WEB");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

  var result = [];
  for (var t in library['tracks']){
    if (library['tracks'].hasOwnProperty(t)){
      for (var p in library['tracks'][t]){
        if (library['tracks'][t][p].search(query) !== -1){
          result.push(t);
          break;
        }
      }
    }
  }


  printSelectedTracks(result);


}

printSearchResults('Jonathan');


function printSelectedTracks(tracksArr) {
  var result = {};
  for (var t in tracksArr){

    var track = library['tracks'][tracksArr[t]];
    result[t] = track['name'] + ' by ' + track['artist'] + ' (' + track['album'] + ')';


  }
  console.log(result);
}






