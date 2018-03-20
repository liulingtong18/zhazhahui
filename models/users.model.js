var mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    username: String,
    pwd: String
})
const users = mongoose.model('users',usersSchema,'users')
module.exports=users