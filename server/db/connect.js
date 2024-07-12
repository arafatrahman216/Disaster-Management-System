const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arafat219:Hackathon_24@dms.dn3gaj9.mongodb.net/?retryWrites=true&w=majority&appName=DMS";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
      const result = await client.db("DMS").collection("User").find({}).toArray();
      console.log(result);
    } 
    catch (e) {
        console.error(e);
        console.log("Error occurred while connecting to MongoDB");
    }
    
  }

  const closeConnection = async () => {
    await client.close();
  }

  
  module.exports = run;