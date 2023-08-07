const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  name: String,
  code: {
    type: String,
    unique: true,
  },
  discount: Number,
  used: {
    type: [String],
    default: []
  },
});

couponSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
