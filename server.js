const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

app.use('/', require('./routes'));

const port = 3000;


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port);
    console.log('connection to db. Web Server is listening at port ' + (process.env.PORT || port));
    
  }
});


