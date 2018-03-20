var express = require('express');
var router = express.Router();

var posts = require('../../models/posts.model')
var ObjectId = require("mongodb").ObjectId

/* GET home page. */
router.get('/', function(req, res, next) {
    posts.find((err,data)=>{
        if(err){
            res.send(err)
            return
        }
        res.render('admin/article_list',{data:data});
    })

});
router.get('/add', function(req, res, next) {
    posts.find((err,data)=>{
        if (err){
            res.send(err)
            return;
        }
        res.render('admin/article_add',{data:data});

    })
});
router.post('/add',function(req, res, next) {
    var cat = req.body.cat
    var title = req.body.title
    var summary = req.body.summary
    var content = req.body.content
    var time = new Date()
    posts.create({cat,title,summary,content,time},(err,data)=>{
        if (err){
            res.send(err)
            return;
        }
        res.send("添加成功   <a href='/admin/posts'>查看文章列表</a>")

    })
});

module.exports = router;