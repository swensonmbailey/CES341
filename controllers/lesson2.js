const mongodb = require('../db/connect');


const contactsRoute = async (req, res, next) =>  {
    

        


        console.log("in contactsRoute");
        const connection = mongodb.getDb();
        // Get the database and collection on which to run the operation
        const database = mongodb.getDb().db("CSE341");
        const contacts = database.collection("contacts");
        
        // Execute query 
        const cursor = await contacts.find().toArray().then((lists) => {
            res.send(JSON.stringify(lists));
            console.log(JSON.stringify(lists));
          });;

        

        // res.send(JSON.stringify(cursor));
    

        
        
      
};

const findContactRoute = async (req, res, next ) =>  {


        

        console.log("in findContactRoute");
        const ObjectId = require('mongodb').ObjectId;
        const userId = new ObjectId(req.params.id);
        
        // Get the database and collection on which to run the operation
        const database = mongodb.getDb().db("CSE341");
        const contacts = database.collection("contacts");
        
        // Execute query 
        const cursor = await contacts.find({_id: userId}).toArray().then((list) => {
            res.send(JSON.stringify(list[0]));
            console.log(JSON.stringify(list[0]));
          });;

};


module.exports = {
    contactsRoute,
    findContactRoute
};


// const mongodb = require('../db/connect');
// const ObjectId = require('mongodb').ObjectId;

// const getAll = async (req, res, next) => {
//   const result = await mongodb.getDb().db().collection('contacts').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists);
//   });
// };

// const getSingle = async (req, res, next) => {
//   const userId = new ObjectId(req.params.id);
//   const result = await mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find({ _id: userId });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

// module.exports = { getAll, getSingle };