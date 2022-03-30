var express = require("express");
var cors = require("cors");
var mongodb = require("mongodb").MongoClient;
const app = express();

app.use(cors());
app.use(express.json());

var url = "mongodb://localhost:27017/";

app.post("/add", (req, res, next) => {
  var data = [req.body];
  var post = {
    title: req.body.title,
    body: req.body.content,
    author: req.body.author,
  };
  mongodb.connect(url, function (err, client) {
    if (err) {
      console.log(err.message);
    } else {
      var db = client.db("blog");
      db.collection("social").insertOne(post, function (err, res) {
        if (err) {
          console.log(err.message);
        } else {
          console.log("inserted " + post.title);
        }
      });
      console.log("Database created!");
    }
  });
});

app.get("/getpost", (req, res, next) => {
  mongodb.connect(url, function (err, client) {
    if (err) {
      console.log(err.message);
    } else {
      var db = client.db("blog");
      db.collection("social")
        .find({})
        .toArray(function (err, result) {
          if (err) {
            console.log(err.message);
          } else {
            console.log("found ");
            res.json(result);
          }
        });
      console.log("Database created!");
    }
  });
});

app.listen(5000, function () {
  console.log("server listning on 5000");
});
