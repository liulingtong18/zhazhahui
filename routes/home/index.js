var express = require('express');
var router = express.Router();

var posts = require('../../models/posts.model')

var cats = require('../../models/cats.model')

/* GET home page. */
router.get('/', function(req, res, next) {

    posts.find((err,data)=>{
        if(err){
            res.send(err)
            return
        }
        cats.find((err,docs)=>{
            if(err){
                res.send(err)
                return
            }
            res.render('home/index',{data,docs});

        })

    })
});

module.exports = router;
