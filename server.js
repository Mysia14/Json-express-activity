// Import Modules

const dotenv = require('dotenv').config() // import dotenv module
const express = require('express'); // import express module
const app = express();


app.use(express.static('public')) // Serve static files using middleware

const api = require('./routes/api') // import api module

app.use('/SAIT2021/JS/cpnt262-a5-draft/model/seeds/findphoto.js', api) // middleware api


const mongoose = require('.model/connections') // import connection module


// Handle 404 errors with middleware - should be html5 error handler

app.use(function(request, response) {
    try {
        if (request.url.startsWith('/api')) {
            response.status(404).send({ error: 'Not Found' }); //json 404 error
        } else {
            response.status(404).redirect('/SAIT2021/JS/cpnt262-a5-draft/public/404.html') //****create a html error page
        }
    } catch {
        response.status(404).send({ error: 'Not Found' })
    }

});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});