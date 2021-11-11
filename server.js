// Import Modules

const dotenv = require('dotenv').config() // import dotenv module
const express = require('express'); // import express module
const app = express();


app.use(express.static('public')) // Serve static files using middleware

const api = require('./routes/api') // import api module

app.use('/api', api) // middleware api


// Handle 404 errors with middleware - should be html5 error handler

app.use(function(request, response) {
    try {
        if (request.url.startsWith('/api')) {
            response.status(404).send({ error: ' Ops, File Not Found' }); //json 404 error
            console.log(response.status)
        } else {
            response.status(404).redirect('404.html') //****create a html error page
        }
    } catch {
        response.status(404).send({ error: ' So sorry but the Page is Not Found' })
    }

});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});