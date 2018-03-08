//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }

    console.log("connected to the server");

    // db.collection('Todos').find({
    //     _id: new ObjectID("5aa0f021f5a701eb21ee2ec7")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     //console.log(JSON,stringify(docs, undefined, 2));
    //     console.log(docs);
    // },(err)=>{
    //     console.log("enable to fetch data",err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
        //console.log(JSON,stringify(docs, undefined, 2));
        
    },(err)=>{
        console.log("enable to fetch data",err);
    });


    db.close();

})
//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath C:\Users\Seam\Desktop\mongo-data