var express = require('express');
var router = express.Router();
var posts = require('../../models/posts.model')
var ObjectId = require("mongodb").ObjectId


/* GET home page. */
router.get('/', function(req, res, next) {
    var id =req.query.id
    posts.find({_id:ObjectId(id)},(err,data)=>{
        if (err){
            res.send(err)
            return
        }
        res.render('home/article',{data:data[0]});

    })
});

module.exports = router;
