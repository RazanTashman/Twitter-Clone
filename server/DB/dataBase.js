var mysql = require('mysql');

var con = mysql.createConnection({
  host: "twitterclone.cxtdeqdoh110.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "0123456789",
  database: "twitterclone",
});

con.connect(function(err) {
//   if (err) throw err;
  console.log("Connected!");
});

module.exports =con