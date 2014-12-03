//酒店 查询订单号是否符合要求  
module.exports.getData = function(){
    return {
        "error_code":0,
        "result":"通过",
        "error_msg":"error",
        "data":{
            "msg":"消息"     //1.订单号不存在, 2.订单号重复, 3.订单号不符合要求...
        }
    }
}