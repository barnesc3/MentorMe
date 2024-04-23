const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    biography: String,
    accountType: String,
    location: String,
    requests: [String],
    matches: [String]
})

UserSchema.index({biography: 'text', location: 'text'});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
