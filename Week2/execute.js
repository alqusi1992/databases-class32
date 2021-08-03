exports.connectDatabase = function (err) {
  if (err) throw err;
  console.log("Connected!");
};

exports.dropDatabase = function (err, result) {
  if (err) throw err;
  console.log(result);
};

exports.createDatabase = function (err) {
  if (err) throw err;
  console.log("Database created");
};

exports.useDatabase = function (err) {
  if (err) throw err;
  console.log("Database changed");
};

exports.execQuery = function (err) {
  if (err) throw err;
  console.log("Query is created");
};

exports.execQuerySelect = function (err, result) {
  if (err) throw err;
  console.log("Query is selected");
};
