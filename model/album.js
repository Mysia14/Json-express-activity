const mongoose = require('mongoose') // import mongoose module

//  schema
const photoSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    pathURL: String,
    url: String,
    credit: String,
    creditURL: String,
})

module.exports = mongoose.model('findphoto', photoSchema) // export mongoose