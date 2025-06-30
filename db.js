const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27018";
const dbName = "E-Commerce";

async function connect() {
 const client = new MongoClient(url);
 await client.connect();
 const db = client.db(dbName);
 return { db, client };
}



module.exports = { connect };
