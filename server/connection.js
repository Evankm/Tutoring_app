var express = require('express')
var mongoose = require('mongoose')
var app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const postsRoute = require('../routes/post-get')

app.use('/api', postsRoute)

mongoose.connect('mongodb+srv://admin:admin1@cluster0.e0zvx.mongodb.net/hackApp', ()=>
console.log("connected to db"))

app.listen(3000)
