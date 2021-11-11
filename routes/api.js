// Importing Modules //

const express = require('express');
const router = express.Router();

const Photos = require('../model/seeds/findphoto.js') // import findPhoto module
const finder = require('../model/seeds/findphoto.js') // import findPhoto module
const randomItem = require('./random-item.js'); // import random image/item ,module


// Defining API routes and middle //



router.get('/api/findPhoto', async function(request, response) {

        try {

            let data = await Photos.find() // to find all images

            //check if mongoose is inoperable or non-existent
            if (data.length === 0) {
                data = finder
            }
            // check if filter = random
            if (request.query.filter === randomItem) {
                response.send(randomItem(data)) // to show random image
            } else {
                response.send(data)
            }
        } catch (err) {
            console.log(err) // to show error message
            response.send({ error: "Sorry, something went wrong" }) // json error message
        }

    })
    /****************************************** */
    /*****formula: *******/
    //if (request.query.filter === "") {
    //console.log(request.query)
    //}
    /****************************************** */




// Item route




router.get('/api/photosILove/:id', async function(request, response) {

    //const item = randomItem (photosILove)???
    try {
        let data = await Photos.findOne({ id: request.params.id })

        if (!data) {
            data = finder.find(image => image.id === request.params.id) // to find local module
        }
        if (data) { //check for mongoose
            response.send(data)

        } else {
            response.send({ error: "Sorry, We can not find the image" }) // json error message
        }

    } catch (error) {
        console.log(error) // console.log(error) 
        response.send({ error: "Page not found" }) // json error message
    }
})


module.exports = router // export router