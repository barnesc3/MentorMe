const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    biography: String,
    accountType: String,
    location: String
})

UserSchema.index({biography: 'text', location: 'text'});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
