const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI;  

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  var db = null; 

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      db = client.db("DMS");
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      return true;
    } 
    catch (e) {
        console.error(e);
        console.log("Error occurred while connecting to MongoDB");
        return false;
    }
    
  }

  const closeConnection = async () => {
    if (db != null) {
      await client.close();
      console.log("Closed the connection to MongoDB");
    }
  }

  const getCollection = async (collectionName) => {
    if (db != null) {
      return await db.collection(collectionName).find({}).toArray();
    }
    return null;
  }

  const getCollectionByID = async (collectionName, ID) => {
    if (db != null) {
      return await db.collection(collectionName).find({"UserID": ID}).toArray();
    }
    return null;
  }



  
  module.exports = {run, closeConnection, getCollection, getCollectionByID};