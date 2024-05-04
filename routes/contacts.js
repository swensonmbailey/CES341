// const routes = require('express').Router();
// const lesson2Controller = require('../controllers/lesson2');

// routes.get('/contacts/', lesson2Controller.contactsRoute);
// routes.get('/contacts/:id', lesson2Controller.findContactRoute);


// module.exports = routes;

const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/lesson2');

router.get('/', contactsController.contactsRoute);

router.get('/:id', contactsController.findContactRoute);

module.exports = router;