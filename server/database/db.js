// //DATABASE
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'database'


// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
//     db.collection('data').insertMany([
//         {
//             Name: 'Jenny San',
//             Address: 'Bula',
//             Age: 24

//         },
//         {
//             Name: 'Jenny San',
//             Address: 'Bula',
//             Age: 24

//         }
//     ])
// })
