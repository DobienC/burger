// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "@"+"D"+"r"+"d"+"r"+"a"+"g"+"o"+"n"+"9"+"2"+"6"+"0",
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
