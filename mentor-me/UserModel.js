const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    biography: String,
    accountType: String,
    location: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
