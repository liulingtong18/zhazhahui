var mongoose = require('mongoose')
//定义一个骨架
const catsSchema = new mongoose.Schema({
    title: String,
    sort: Number
})
const cats = mongoose.model('cats',catsSchema,'cats')
module.exports=cats