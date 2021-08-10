const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://malqusi:malqusi@cluster0.b8yuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function findData() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log(`Connected to server`);

    const db = client.db("HackyourFuture");
    const result = await db
      .collection("city")
      .updateOne(({ Name: "Rotterdam" }, { $set: { Population: 100000 } }));
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

findData();
