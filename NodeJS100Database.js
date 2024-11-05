const {MongoClient}=require("mongodb");
// console.log(MongoClient);

/* ~ 6 = % `  + ^ | _*/
const URL="mongodb+srv://mukeshrawatmkr:fwded6bmlG8RQ2Qf@cluster0testing.lgzkt.mongodb.net/";//connection string but if I had installed mongodb in my system I would have written that local URL over here.

const client = new MongoClient(URL);

// Database Name
const dbName = 'TestingDatabase';


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Test1');
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
    // the following code examples can be pasted here...
  
    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());//closing the connection.