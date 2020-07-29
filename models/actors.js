const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
    name: String,
    age: String
})

const Actor = mongoose.model('Actor', actorSchema)

module.exports = Actor