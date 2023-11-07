"use strict";
//Excercise 40....Album
function make_album(Artist, Title, Tracks) {
    let album = {
        Artist,
        Title
    };
    if (Tracks !== undefined) {
        album.numTracks = Tracks;
    }
    return album;
}
;
let album1 = make_album("Ariana Grande", "Sweetener");
let album2 = make_album("Camila Cabello", "Familia", 12);
console.log(album1);
console.log(album2);
