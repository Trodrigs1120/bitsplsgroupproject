var unique = require('unique-words');
const artistFolder = './artists/';
const fs = require('fs');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "ice_creamDB"
});


fs.readdir(artistFolder, (err, files) => {
    files.forEach(file => {
        fs.readFile(file, function (err, data) {
            var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
            var artist = obj.artist;
            var numOfSongs = obj.numOfSongs;
            var unique_words = unique(obj.words).length;
            var wordsPerSong = (obj.words.length / numOfSongs);
            var uniqueWPS = (unique_words / numOfSongs);
            var url = obj.imgUrl;
            var percentUnique = (uniqueWPS / wordsPerSong);

        });
    });
})

