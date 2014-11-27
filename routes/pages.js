var express = require('express');
var router = express.Router();
var File = require("fs");

/* GET home page. */
router.get('/', function(req, res) {
	
  	res.render('page');
});

module.exports = router;
