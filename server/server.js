const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
    res.status(200).send({'message': 'data recieved'})
})
 app.listen(PORT, function() {
     console.log('server is running on local Host ' + PORT);
 })
 //run command after going to server folder "node server"