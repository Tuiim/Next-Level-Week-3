// import dependency
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// initiating express
const server = express();
server
    // utilizing req body
    .use(express.urlencoded({ extended: true }))
    // using static files
    .use(express.static('public'))

    // config template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // create route
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// turn the server on
server.listen(5500);