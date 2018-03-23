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

function userExists(userStr) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    });
    console.log("Checking if user exists...\n");
    connection.query("SELECT * FROM users WHERE user ='" + userStr + "';", function (err, row) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            return;
        } else {
            if (row && row.length) {
                console.log('User was found!');
                return true;
            } else {
                console.log('No user: '+userStr+' found!');
                return false;
            }
        }
    });

    connection.end();
}

function putUser(userStr, pw) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    });
    console.log("Creating new user...\n");
    connection.query("INSERT INTO users (user, password) VALUES ('"+userStr+"', '"+pw+"');", function (err) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            connection.end();
            return;
        } else 
            console.log("User successfully created");
            connection.end();
            return;
    });
}

function userAuth(userStr,pw) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    });
    console.log("Authenticating user...\n");
    connection.query("SELECT * FROM users WHERE user ='" + userStr + "' AND password='"+pw+"';", function (err, row) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            connection.end();
            return false;
        } else {
            if (row && row.length) {
                console.log('User Authenticated!');
                connection.end();
                return true;
            } else {
                console.log('Authentication Failed!');
                connection.end();
                return false;
            }
        }
    });
}

function userHistory(userStr) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    });
    console.log("Getting user history...\n");
    connection.query("SELECT * FROM users WHERE user ='" + userStr + "';", function (err, rows) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            connection.end();
            return;
        } else {
            if (rows && rows.length) {
                console.log('History found!');
                var history = [];
                var i = 0;
                for (row in rows) {
                    history[i] = row;
                    i++;
                };
                console.log(jsonify(history));
                connection.end();
                return jsonify(history);
            } else {
                console.log('No user: ' + userStr + ' found!');
                connection.end();
                return;
            }
        }
    });
}

//TODO add 3 above and 3 below - need help on sequel query

function getArtist(artistStr) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    });
    console.log("Getting artist data for: "+artistStr+" ...\n");
    connection.query("SELECT * FROM artists WHERE user ='" + artistStr + "';", function (err, row) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            connection.end();
            return;
        } else {
            if (row && row.length) {
                console.log('Artist was found!');
                console.log(jsonify(row));
                var artistCol = [jsonify(row)];
                artistCol += getRandArtist();
                artistCol += getRandArtist();
                connection.end();
                return artistCol;
            } else {
                console.log('No artist: ' + artistStr + ' found!');
                connection.end();
                return;
            }
        }
    });
}

function getRandArtist() {
    console.log("Getting random artist data...\n");
    connection.query("SELECT * FROM artists ORDER BY RAND() LIMIT 1;", function (err, row) {
        if (err) {
            console.log('Error in DB');
            console.log(err);
            return;
        } else {
            if (row && row.length) {
                console.log('Random artist was found!');
                console.log(jsonify(row));
                return jsonify(row);
            } else {
                console.log('No artist found!');
                return;
            }
        }
    });
}


