const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
// routes.get('/', lesson1Controller.karlaRoute);
// routes.get('/william', lesson1Controller.williamRoute);
// routes.get('/lukas', lesson1Controller.lukasRoute);

routes.use('/contacts', require('./contacts'));
routes.use('/', require('./swagger'));

routes.use(
    '/',
    (docData = (req, res) => {
        let docData = {
        documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
        };
        res.send(docData);
    })
);

module.exports = routes;