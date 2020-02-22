var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;

// Create database
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// Create collection
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("employees", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });

// Insert document
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("employees").insertOne(data[1], function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });


var DBurl = "mongodb://192.168.56.104:27017/mydb";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Should be able to return data from database
app.get("/getdata", (req, res, next) => {
    MongoClient.connect(DBurl, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("employees").find({}).toArray(function(err, result) {
            if (err) throw err;
            db.close();
            res.json(result)
        });
    });
});

// Just listen on port 80
app.listen(80, () => {
 console.log("Server running on port 3000");
});