var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, val, cb){
        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ") VALUES (?)";

        connection.query(queryString, val, function(err, result){
            if(err) throw err;
            console.log(result);

            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;