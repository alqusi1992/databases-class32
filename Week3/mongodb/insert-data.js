const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://malqusi:malqusi@cluster0.b8yuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function insertData() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log(`Connected to server`);
    const city_1 = {
      Name: "Rotterdam",
      CountryCode: "NLD",
      District: "Zuid-Holland",
      Population: 500000,
    };
    const result1 = await client
      .db("HackyourFuture")
      .collection("city")
      .insertOne(city_1);
    console.log(result1);

    var city_2 = {
      Name: "Amsterdam",
      CountryCode: "NLD",
      District: "Noord-Holland",
      Population: 1000000,
    };
    const result2 = await client
      .db("HackyourFuture")
      .collection("city")
      .insertOne(city_2);
    console.log(result2);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

insertData();
