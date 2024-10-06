const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://nharihar1:zi66aQAR2CdQrORO@clusterabj.dqz87.mongodb.net/jawa?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('jawa');
    const collection = database.collection('shop');

    // Insert multiple documents
    const result = await collection.insertMany([
      {
        item: 'abc',
        price: 10,
        quantity: 2,
        date: new Date('2014-03-01T08:00:00Z'),
      },
      {
        item: 'jkl',
        price: 20,
        quantity: 1,
        date: new Date('2014-03-01T09:00:00Z'),
      },
      {
        item: 'xyz',
        price: 5,
        quantity: 10,
        date: new Date('2014-03-15T09:00:00Z'),
      },
      {
        item: 'xyz',
        price: 5,
        quantity: 20,
        date: new Date('2014-04-04T11:21:39.736Z'),
      },
      {
        item: 'abc',
        price: 10,
        quantity: 10,
        date: new Date('2014-04-04T21:23:13.331Z'),
      },
      {
        item: 'def',
        price: 7.5,
        quantity: 5,
        date: new Date('2015-06-04T05:08:13Z'),
      },
      {
        item: 'def',
        price: 7.5,
        quantity: 10,
        date: new Date('2015-09-10T08:43:00Z'),
      },
      {
        item: 'abc',
        price: 10,
        quantity: 5,
        date: new Date('2016-02-06T20:20:13Z'),
      },
    ]);

    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
