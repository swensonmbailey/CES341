const express = require('express');
const app = express();
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


// const express = require('express');
// const bodyParser = require('body-parser');
// const mongodb = require('./db/connect');

// const port = process.env.PORT || 8080;
// const app = express();

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/', require('./routes'));

// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });