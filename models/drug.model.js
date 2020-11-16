const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const drugSchema = new Schema({
    name: { type: String, required: true },
    look: { type: String, required: true },
    method: { type: String, required: true },
    effect: { type: String, required: true },
    duration: { type: String, required: true },
    mixing: { type: String, required: true },
    addiction: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    alsoCalled: { type: [String], required: true },
}, {
    timestamps: true
})

module.exports = model("Drug", drugSchema);