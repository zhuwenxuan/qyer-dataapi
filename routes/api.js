var express = require('express');
var router = express.Router();
var File = require("fs");
var path = require('path');
var urllib = require('url');

/* GET home page. */
router.get('/:key', function(req, res) {
	var filename = req.params.key;
	var params = urllib.parse(req.url, true);
	var dir = path.join(__dirname,"../public/json/");
    var data = require(dir+filename+".js").getData();
    if (params.query && params.query.callback) {
        //jsonp
        var str =  params.query.callback + '(' + JSON.stringify(data) + ')';
        res.end(str);
    } else {
        //普通的json
        res.json(data);
    }
});

module.exports = router;
