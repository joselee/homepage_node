/*--- Person Controller ---*/
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "homepagedb"
});

exports.getAllPersons = function(req, res){
    var query = "select * from person";
    
    connection.query(query, function(err, rows){
        res.send(rows);
    });
};

exports.getById = function(req, res){
    var id = req.params.id;
    var query = "select * from person where id = " + id;
    
    connection.query(query, function(err, rows){
        res.send(rows);
    });
};
