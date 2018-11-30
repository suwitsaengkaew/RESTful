'user strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'intradb',
    user: 'ITDB',
    password: 'ITDB',
    database: 'ITDB',
    insecureAuth: true
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;
