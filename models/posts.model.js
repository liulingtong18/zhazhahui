var mongoose = require('mongoose')
const postsSchema = new mongoose.Schema({
    cat:String,
    title: String,
    summary: String,
    content: String,
    time: String
})
const posts = mongoose.model('posts',postsSchema,'posts')
module.exports=posts