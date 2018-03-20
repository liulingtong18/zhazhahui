var express = require('express');
var router = express.Router();

var users = require('../../models/users.model')


var mongoose = require('mongoose')
// var users = mongoose.model('users')
var ObjectId = require("mongodb").ObjectId

router.get('/',(req,res,next)=>{
    res.render('admin/login')
})

router.post('/signin',(req,res,next)=>{
    var username= req.body.username
    var pwd= req.body.pwd
    users.find({username:username,pwd:pwd},(err,data)=>{
        if(err){
            res.send(err)
            return
        }
        if(data.length){
            req.session.isLogin = true
            res.redirect('/admin/index')
        }else{
            res.redirect('/admin/users')

        }
    })
})
router.get('/logout',(req,res,next)=>{
  req.session.isLogin = null
    res.redirect('/admin/users')
})
module.exports = router;