var unique = require('unique-words');
const artistFolder = './artists/';
const fs = require('fs');
var mysql = require("mysql");

var connection = mysql.createConnection({
    //look in slack for connection details
    host: "", 
    port: 1234,

    // Your username
    user: "",

    // Your password
    password: "",
    database: "bitsPleaseDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    fs.readdir(artistFolder, (err, files) => {
        files.forEach(file => {
            fs.readFile(file, function (err, data) {
                var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
                var artistObj = {
                    artist = obj.artist,
                    numOfSongs = obj.numOfSongs,
                    unique_words = unique(obj.words).length,
                    wordsPerSong = (obj.words.length / numOfSongs),
                    uniqueWPS = (unique_words / numOfSongs),
                    url = obj.imgUrl,
                    percentUnique = (uniqueWPS / wordsPerSong)
                }
                createArtist(artistObj);
            });
        });
    })
});

function createArtist(artistObj) {
    console.log("Inserting a new artist: " +artistObj.artist+" ...\n");
    var query = connection.query(
        "INSERT INTO artists SET ?",
        {
            artist: artistObj.artist,
            numOfSongs: artistObj.numOfSongs,
            unique_words: artistObj.unique_words,
            wordsPerSong: artistObj.wordsPerSong,
            uniqueWPS: artistObj.uniqueWPS,
            percentUnique: artistObj.percentUnique
        },
        function (err, res) {
            console.log(res.affectedRows + " product inserted!\n");
        }
    );
}
