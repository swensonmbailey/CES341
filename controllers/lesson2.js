const mongodb = require('../db/connect');
let client;

const contactsRoute = async (req, res) =>  {
    try {

        


        console.log("in contactsRoute");
        client = mongodb.getDb();
        // Get the database and collection on which to run the operation
        const database = client.db("CSE341");
        const contacts = database.collection("contacts");
        
        // Execute query 
        const cursor = await contacts.find().toArray();

        console.log(JSON.stringify(cursor[0]));

        res.send(JSON.stringify(cursor));

        
        
      } finally {
        await client.close();
      }
};

const findContactRoute = async (req, res, ) =>  {
    try {

        

        console.log("in contactsRoute");
        client = mongodb.getDb();
        
        const contactid = new ObjectId(params.id);
        const contact = await client
        .collection("contacts")
        .findOne({
            _id: contactid
        });

        res.send(JSON.stringify(contact))
        
      } finally {
        await client.close();
      }
};


module.exports = {
    contactsRoute,
    findContactRoute
};