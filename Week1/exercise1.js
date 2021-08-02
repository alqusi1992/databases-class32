var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

// Connection with database
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

});

 con.query("DROP DATABASE IF EXISTS meetup", (err, result) => {
    if(err) throw err;
    console.log(result);
});

  /* Create a database named "meetup": */
  con.query("CREATE DATABASE meetup", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

// Create Invitee table

const invitee_sql =
  "CREATE TABLE IF NOT EXISTS invitee (invitee_no INT, invitee_name  VARCHAR(50), invited_by  VARCHAR(50))";
con.query(invitee_sql, function (err, result) {
  if (err) throw err;
  console.log("Invitee Table created");
});

// Create Room table

const room_sql =
  "CREATE TABLE IF NOT EXISTS room (room_no INT,  room_name  VARCHAR(50), floor_number INT)";
con.query(room_sql, function (err, result) {
  if (err) throw err;
  console.log("room Table created");
});

// Create meeting table

const meeting_sql =
  "CREATE TABLE IF NOT EXISTS meeting (meeting_no INT, meeting_title TEXT, starting_time TIMESTAMP, ending_time TIMESTAMP, room_no INT)";
con.query(meeting_sql, function (err, result) {
  if (err) throw err;
  console.log("meeting Table created");
});

// Data

// Insert Invitee Data

const invitee_data =
  "INSERT INTO invitee VALUES (1, 'Sam', 'Hans'),(2, 'Yara', 'Mo'),(3, 'Rafe', 'Majdolen'),(4, 'Mayez', 'Ali'),(5, 'Waseem', 'Anas')";
con.query(invitee_data, function (err, result) {
  if (err) throw err;
  console.log("Invitee data has been inserted");
});

// Insert Room Data

const room_data =
  "INSERT INTO room VALUES (101, 'Study', 1),(102, 'Spare', 2),(103, 'Nursery', 3),(104, 'Utility', 4),(105, 'Loft', 5)";
con.query(room_data, function (err, result) {
  if (err) throw err;
  console.log("Room data has been inserted");
});

// Insert meeting Data

const meeting_data =
  "INSERT INTO meeting VALUES (1, 'A Celebration of Success', '2021-05-25 15:20:30','2021-05-25 18:20:30', 101),(2, 'Focus on Success', '2022-01-25 18:40:00','2022-01-26 20:40:00', 102),(3, 'Social', '2022-04-13 14:00:00','2022-04-13 15:00:00', 103),(4, 'Exams', '2021-03-20 14:00:00', '2021-03-21 15:00:00',104),(5, 'Dating', '2023-02-14 18:00:00', '2023-02-14 20:00:00', 105)";
con.query(meeting_data, function (err, result) {
  if (err) throw err;
  console.log("meeting data has been inserted");
});
