const dotenv = require('dotenv').config()
const express = require('express');
const app = express();



const api = require('../api.js')
app.use('/api/findPhoto', api)

//console.log('randomItem')
//console.log(randomItem (findPhotoServer))
//const inputValue = process.argv[2];



// Dynamic JSON Endpoint
app.get('/api/photosILove', function(request, response) {
    response.send(photosILove)
})

if (request.query.filter === "") {
    console.log(request.query)
}
// Item route
app.get('/api/photosILove/:id', function(request, response) {
    //const item = randomItem (photosILove)???
    const findPhoto = photosILove.find(function(item) {
        return Number(inputValue) === item.id;
        if (request.params.id === item.id) {
            return true
        } else false
    });
    response.send(findPhoto)

})

//console.log(findPhoto)
console.log("Found a photo", findPhoto);
//console.log("No photo found, Please try again");

// Use Array.find() here



// Handle 404 errors with middleware - should be html5 error handler

app.use(function(request, response) {
    response.status(404)
    response.send('<h1>404: File Not Found</h1>') //****create a html error page
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});