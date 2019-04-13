var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
}

var orm = {
    selectAll: function(tableInputs, cb){
        var queryString = "SELECT * FROM " + tableInputs + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, val, cb){
        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ") VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        console.log(queryString);

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