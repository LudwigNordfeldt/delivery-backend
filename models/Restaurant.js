const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: String,
    pic: String,
    foods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }
    ]
})

restaurantSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant