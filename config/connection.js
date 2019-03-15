const mysql = require("mysql");
const keys = require("../login.js")
const password = keys.mySQL.pass
// Creates connection to MYSQL Database uses .env for password
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "fenrir32",
    database: "burgers_db"
});

module.exports = connection;