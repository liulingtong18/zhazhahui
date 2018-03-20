var express = require('express');
var router = express.Router();
var ObjectId = require("mongodb").ObjectId
// var mongoose = require('mongoose')
var cats = require('../../models/cats.model')



//第三个参数会默认加个s，所以需要加上第三个参数
/* GET home page. */
router.get('/', function(req, res, next) {
    cats.find((err,data)=>{
        if(err){
            res.send(err)
            return
        }
        res.render('admin/category_list',{data:data});
    })
});
router.get('/add', function(req, res, next) {
    res.render('admin/category_add');
});

router.post('/add', function(req, res, next) {
    var title = req.body.title
    var sort = req.body.sort
    console.log(req.body)
    cats.create({title,sort},(error,data)=>{
        if (error){
            res.send(error)
        }
        else{
            res.send("添加成功   <a href='/admin/cats'>查看分类列表</a>")

        }
    })
});
router.get('/edit', function(req, res, next) {
    var id = req.query.id
    cats.find({_id: ObjectId(id)},(err,data)=>{
        if(err){
            res.send(err)
            return;
        }
        res.render('admin/category_edit',{data:data[0]});

    })
});
router.post('/edit', function(req, res, next) {
    var title = req.body.title
    var sort = req.body.sort
    var id = req.body.id
    cats.update({_id:ObjectId(id)},{$set:{title:title,sort:sort}},(error,data)=>{
        if (error){
            res.send(error)
        }
        else{
            res.send("修改成功   <a href='/admin/cats'>返回分类列表</a>")

        }
    })
});
router.get('/del', function(req, res, next) {
    var id = req.query.id
    console.log(id)

    cats.remove({_id:ObjectId(id)},(error,data)=>{
        if (error){
            res.send(error)
        }
        else{
            res.redirect("/admin/cats")

        }
    })
});
module.exports = router;
