var express = require('express');
var router = express.Router();
var File = require("fs");
var path = require('path');

/* GET home page. */
router.get('/:key', function(req, res) {
	var filename = req.params.key;
	var dir = path.join(__dirname,"../public/json/");
    var str = File.readFileSync(dir+filename+".js");
    res.format({
        'application/json':function(){
            res.send(str)
        }
    })
});

module.exports = router;
