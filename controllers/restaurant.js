const restaurantRouter = require('express').Router()
const Restaurant = require('../models/Restaurant')

restaurantRouter.post('/', async (request, response) => {
    const newRestaurant = new Restaurant(request.body)
    const save = await newRestaurant.save()
    response.status(201).json(save)
})

restaurantRouter.get('/', async (request, response) => {
    const rests = await Restaurant.find()
    response.json(rests)
})

module.exports = restaurantRouter