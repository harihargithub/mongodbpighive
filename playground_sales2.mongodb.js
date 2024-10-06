/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Find the sales on April 4th, 2014.
const salesOnApril4th = db
  .getCollection('sales')
  .find({
    date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') },
  })
  .toArray();

// Print the result to the output window.
console.log(`${salesOnApril4th.length} sales occurred on April 4th, 2014.`);

// Return the result to show in the Playground Result panel.
salesOnApril4th.length;
