var express = require('express');
var router = express.Router();


//import the burger (yum)
var burger = require('../models/burger.js');


//routes
router.get('/', function(req, res){
    burger.selectAll(function(data) {
        var handlebarsObject = {
          burgers: data
        };
          // console.log(handlebars object);
    res.render('index', handlebarsObject);
});
});


router.post('/burgers', function(req, res) {
    burger.insertOne(

    [
      'burger_name'
    ], 
    [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });


  router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  //burger eater eats burger
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });


  module.exports = router;