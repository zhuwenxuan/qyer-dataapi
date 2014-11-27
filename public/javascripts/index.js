//json
// $.ajax({
// 	url:"/api/getPoi",
// 	success:function(data){
// 		console.log(data);
// 	}
// })



//jsonp
$.ajax({
	url:"/api/getOrder",
	jsonp:"callback",
	dataType:"jsonp",
	success:function(data){
		console.log(data);
	}
})