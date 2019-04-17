// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ih4ox3nnookutpna",
  password: "je8ap2g44ku6scv2",
  database: "m0feksfq5hoi2fkc"
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
