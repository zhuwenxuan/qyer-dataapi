var express = require('express');
var router = express.Router();
var File = require("fs");
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res) {
    

    var dir = path.join(__dirname,"../public/json/");
    console.log(dir);
    var data = require(dir+"getOrder.js");
    debugger
    console.log(data.getOrder());
//    var order = require('getOrder');
//    console.log(order)

});

module.exports = router;
