const mysql = require("mysql")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assignment-demo",
})

module.exports = db
