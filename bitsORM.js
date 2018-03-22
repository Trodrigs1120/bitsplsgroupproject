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
});

function userExists(userStr) {
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
}

function putUser(userStr, pw) {
    console.log("Creating new user...\n");
    connection.query("INSERT INTO users (user, password) VALUES ('"+userStr+"', '"+pw+"');", function (err) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            return;
        } else 
            console.log("User successfully created");
            return;
    });
}

function userAuth(userStr,pw) {
    console.log("Authenticating user...\n");
    connection.query("SELECT * FROM users WHERE user ='" + userStr + "' AND password='"+pw+"';", function (err, row) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            return;
        } else {
            if (row && row.length) {
                console.log('User Authenticated!');
                return true;
            } else {
                console.log('Authentication Failed!');
                return false;
            }
        }
    });
}

function userHistory(userStr) {
    console.log("Getting user history...\n");
    connection.query("SELECT * FROM users WHERE user ='" + userStr + "';", function (err, rows) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
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
                return jsonify(history);
            } else {
                console.log('No user: ' + userStr + ' found!');
                return;
            }
        }
    });
}

//TODO add 3 above and 3 below - need help on sequel query

function getArtist(artistStr) {
    console.log("Getting artist data for: "+artistStr+" ...\n");
    connection.query("SELECT * FROM artists WHERE user ='" + artistStr + "';", function (err, row) {

        if (err) {
            console.log('Error in DB');
            console.log(err);
            return;
        } else {
            if (row && row.length) {
                console.log('Artist was found!');
                console.log(jsonify(row));
                return jsonify(row);
            } else {
                console.log('No artist: ' + artistStr + ' found!');
                return false;
            }
        }
    });
}


