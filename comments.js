// create web server
var express = require('express');
var router = express.Router();
var db = require('../db');
var ObjectId = require('mongodb').ObjectID;

router.get('/', function (req, res) {
    db.get().collection('comments').find().toArray(function (err, docs) {
        res.render('comments', {comments: docs});
    })
});