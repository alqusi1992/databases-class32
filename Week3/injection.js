const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

conn.connect();

function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  const sql =
    "SELECT Population FROM Country WHERE Name =" +
    conn.escape(name) +
    conn.escape(code);
  conn.query(sql, function (err, result) {
    if (err) cb(err);
    if (result.length == 0) cb(new Error("Not found"));
    cb(null, result[0].name);
    conn.end();
  });
}

const displayResult = (err, result) => {
  if (err) throw err;
  console.log(result);
};

getPopulation("country", "NLD", "Sam' OR '1=1", displayResult);
