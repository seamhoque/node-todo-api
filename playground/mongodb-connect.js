//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);









MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }

    console.log("connected to the server");

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false

    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    

    // });
    // db.collection('User').insertOne({
    //     name : "Md Mazharul Hoque",
    //     age : 24,
    //     location : "khilgaon"

    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    

    // });

    db.close();

})
//C:\Program Files\MongoDB\Server\3.6\bin>mongod.exe --dbpath C:\Users\Seam\Desktop\mongo-data