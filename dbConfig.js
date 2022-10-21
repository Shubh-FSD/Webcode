const mongodb = require('mongodb')
const dbName = 'Webcode2'
const dbUrl = `mongodb+srv://Shubham:Shubham1999@shubham.d1qasaw.mongodb.net/${dbName}?retryWrites=true&w=majority`
const MongoClient=mongodb.MongoClient
module.exports ={mongodb,dbName,dbUrl,MongoClient}