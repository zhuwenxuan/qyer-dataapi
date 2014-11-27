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
//	 console.log(f)
//    var str = File.readFile(dir+filename+".json","utf8",function(err,data){
    	// res.json(JSON.parse(data));


    	if (params.query && params.query.callback) {
		   //console.log(params.query.callback);
		   var str =  params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
		   res.end(str);
		 } else {
		   res.json(data);//普通的json
		 }     
//    });
    
});

module.exports = router;
