const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text:String,
    status: {
        type: Boolean,
        default: false
    }
})

const TodoModels = mongoose.model('to-dos', TodoSchema)

module.exports = TodoModels;