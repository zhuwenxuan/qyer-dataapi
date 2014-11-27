//酒店 获取返现详情接口   
module.exports.getData = function(){
    return {
        "data":{
            "id":123,      //返现ID
            "order_id":1234567,    //订单号
            "state":1,     //返现状态 0-未审核, 1-审核通过, 2-审核未通过, 3-付款成功
            "created":"2014-11-27 11:08:01", //提交时间, 如2014-11-27 11:08:01
            "remark":"asdfasdfasdf",
            "email":"biao.zhang@qyer.com",  
            "phone":13811231234,  
            "real_name":"张彪",  
            "deposit_bank":"招行",  
            "deposit_province":"河北省",  
            "deposit_city":"无市", 
            "deposit_town":"无区县",
            "deposit_branch":"河北支行",  
            "account":23534674587585673452   
        }
    }
}