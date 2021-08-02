const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

connection.connect((err) => {
  if (err) throw err;
});

connection.query("use world", (err, result) => {
  if (err) throw err;
  console.log(result);
});
// 1.What are the names of countries with population greater than 8 million?
connection.query(
  "SELECT name from country WHERE population > 8000000",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 2.What are the names of countries that have “land” in their names?

connection.query(
  "SELECT name from country WHERE name LIKE '%land'",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 3.What are the names of the cities with population in between 500,000 and 1 million?

connection.query(
  "SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 4.What's the name of all the countries on the continent ‘Europe’?

connection.query(
  "SELECT * FROM country WHERE continent = 'Europe'",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 5.List all the countries in the descending order of their surface areas.
connection.query(
  "SELECT * FROM country ORDER BY SurfaceArea DESC",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 6. What are the names of all the cities in the Netherlands?
connection.query(
  "SELECT Name FROM city WHERE CountryCode='NLD'",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 7. What is the population of Rotterdam?
connection.query(
  "SELECT Population from city WHERE name = 'Rotterdam'",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 8.What's the top 10 countries by Surface Area?
connection.query(
  "SELECT * FROM country ORDER BY SurfaceArea DESC LIMIT 10",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

//9. What's the top 10 most populated cities?
connection.query(
  "SELECT * FROM city ORDER BY Population  DESC LIMIT 10",
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

// 10. What is the population number of the world?

connection.query("SELECT SUM(population) FROM country", (err, result) => {
  if (err) throw err;
  console.log(result);
});

connection.end();
