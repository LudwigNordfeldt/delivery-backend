const couponRouter = require('express').Router()
const Coupon = require('../models/Coupon')

couponRouter.post('/', async (request, response) => {
    const newCoupon = new Coupon(request.body)
    const save = await newCoupon.save()
    response.status(201).json(save)
})

couponRouter.put('/:id', async(request, response) => {
    const username = request.body
    const id = request.params.id

    console.log('User is:', username.user)
    console.log('Coupon ID is:', id)

    const coupon = await Coupon.findById(id).exec()
    console.log("Coupon found is:", coupon)
    coupon.used = coupon.used.push(username.user.toString())

    await coupon.save()
    response.status(201)

})

couponRouter.get('/', async (request, response) => {
    const coupons = await Coupon.find()
    response.json(coupons)
})

module.exports = couponRouter