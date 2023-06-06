const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    pic: String,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
})

foodSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food