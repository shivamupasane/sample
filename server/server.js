const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
var newSchema = new mongoose.Schema({
    userName : String,
    password: String,
    confirmPassword: String,
    email: String,
    subscribe: Boolean
})
var User = mongoose.model("User", newSchema);

//port
const PORT = 3000;

 // instance of express
 const app = express();

// body parser to handle json data
 app.use(bodyParser.json());

 //to handle cors
 app.use(cors());

 //to test
 app.get('/', function(req, res) {
     res.send('hello from express server');
 })

 // endpoint to which angular application will post data

 app.post('/enroll', function(req, res) {
     console.log(req.body);
     res.status(200).send({'message': 'data recieved'})
 })
 app.post('/userRegistration', function(req, res) {
    console.log(req.body);
    var obj = {userName : req.body.userName,
        password:req.body.password,
        confirmPassword: req.body.confirmPassword,
        email: req.body.email,
        subscribe: req.body.subscribe}
    var myData = new User(obj);
    myData.save().then(item => {
        res.status(200).send({'message': 'saved data to database'})
    })
    .catch(err => {
        res.status(400).send({'message': 'unable to save to database'})
    });
    
})
 app.listen(PORT, function() {
     console.log('server is running on local Host ' + PORT);
 })
 //run command after going to server folder "node server"