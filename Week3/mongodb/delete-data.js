const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://malqusi:malqusi@cluster0.b8yuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function findData() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log(`Connected to server`);

    const db = client.db("HackyourFuture");
    const collection = await db.collection("city");
    console.log(await collection.deleteOne({ Name: "Rotterdam" }));
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

findData();
