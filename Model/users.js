
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    }
})

const users = mongoose.model("User", userSchema);

module.exports = users;