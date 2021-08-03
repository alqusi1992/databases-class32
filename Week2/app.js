const mysql = require("mysql");

const {
  connectDatabase,
  dropDatabase,
  createDatabase,
  useDatabase,
  execQuery,
  execQuerySelect,
} = require("./execute.js");
const {
  CREATE_TABLE_AUTHORS,
  ADD_COLUMN_MENTOR,
  CREATE_TABLE_RESEARCH_PAPERS,
  JUNCTION_AUTHORS_PAPERS,
  INSERT_INTO_TABLE,
} = require("./queries.js");

const { AUTHORS_DATA, PAPER_DATA, JUNCTION_DATA } = require("./data.js");

const {
  qeustion_0,
  question_1,
  question_2,
  question_3,
  question_4,
  question_5,
} = require("./selectQueries.js");

const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

db.connect(connectDatabase);

db.query("DROP DATABASE IF EXISTS researchDB", dropDatabase);

db.query("CREATE DATABASE researchDB", createDatabase);

db.query("USE researchDB", useDatabase);

db.query(CREATE_TABLE_AUTHORS, execQuery);

db.query(ADD_COLUMN_MENTOR, execQuery);

db.query(CREATE_TABLE_RESEARCH_PAPERS, execQuery);

db.query(JUNCTION_AUTHORS_PAPERS, execQuery);

// Throughout all the data

AUTHORS_DATA.forEach((author) => {
  db.query(INSERT_INTO_TABLE.authors, author, execQuery);
});

PAPER_DATA.forEach((paper) => {
  db.query(INSERT_INTO_TABLE.papers, paper, execQuery);
});

JUNCTION_DATA.forEach((junctions) => {
  db.query(INSERT_INTO_TABLE.junction, junctions, execQuery);
});

// Select Quires

db.query(qeustion_0, execQuerySelect);
db.query(question_1, execQuerySelect);
db.query(question_2, execQuerySelect);
db.query(question_3, execQuerySelect);
db.query(question_4, execQuerySelect);
db.query(question_5, execQuerySelect);

connection.end();
