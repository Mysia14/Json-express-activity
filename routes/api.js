// Importing Modules //

const express = require('express');
const router = express.Router();

const findPhotoServer = require('../findPhoto.js') // import findPhoto module
const randomItem = require('../random-item.js'); // import random image/item ,module


// Defining API routes and middle //


// Dynamic JSON Endpoint
router.get('/api/photosILove', function(request, response) {
    response.send(photosILove)
})

if (request.query.filter === "") {
    console.log(request.query)
}
// Item route
router.get('/api/photosILove/:id', function(request, response) {
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

module.exports = router