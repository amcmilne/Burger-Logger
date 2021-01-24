const mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "webapi",
    password: "password123",
    database: "burgers_db", 
});
connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return; 
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection; 