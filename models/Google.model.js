const { Schema, model } = require("mongoose");

const googleSchema = new Schema({
    username: { type: String, unique: true },
    // password: { type: String, required: true },
    googleID: { type: String, unique: true},

})

module.exports = model("Google", googleSchema);