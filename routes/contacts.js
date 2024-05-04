const routes = require('express').Router();
const lesson2Controller = require('../controllers/lesson2');

routes.get('/contacts', lesson2Controller.contactsRoute);
routes.get('/contacts/:id', lesson2Controller.findContactRoute)


module.exports = routes;