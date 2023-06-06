const foodRouter = require('express').Router()
const Food = require('../models/Food')
const Restaurant = require('../models/Restaurant')

foodRouter.post('/', async (request, response) => {
    const newRestaurant = new Food(request.body)
    const save = await newRestaurant.save()
    response.status(201).json(save)

    let rest = await Restaurant.findById(request.body.restaurant)
    rest.foods = rest.foods.concat(save._id)
    await rest.save()
})

foodRouter.get('/', async (request, response) => {
    const foods = await Food.find()
    response.json(foods)
})

module.exports = foodRouter