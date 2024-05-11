
const express = require('express');
const router = express.Router();


const contactsController = require('../controllers/lesson2');
const requestsController = require('../controllers/lesson3');

router.get('/', contactsController.contactsRoute);

router.get('/:id', contactsController.findContactRoute);

//post route

router.post('/', requestsController.postRoute);

//put route
router.put('/:id', requestsController.putRoute);

//delete route
router.delete('/:id', requestsController.deleteRoute);

module.exports = router;