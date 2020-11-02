'use strict';
const fs = require('fs');
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : '34.78.79.123',
  user     : 'root',
  password : 'xyFPj1gpNldK4NEc',
  database : 'comic_store',
  ssl: {
    ca: fs.readFileSync(__dirname + '../../certs/server-ca.pem'),
    key: fs.readFileSync(__dirname + '../../certs/client-key.pem'),
    cert: fs.readFileSync(__dirname + '../../certs/client-cert.pem')
}
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;