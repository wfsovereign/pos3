/**
 * Created by fyqj on 14-10-31.
 */
/*function judge_arrayelement_decimal(bbox){     //判断该数是否为小数，是则返回true
    return (Math.ceil(bbox.price) > bbox.price)
}

function postfix_goodsprice(a){   //postfix_pricearr
    var tempera;
        tempera=_.map(a,function(num){
        if (judge_arrayelement_decimal(num)){
            return "0(元)";
        }else{
            return ".00(元)";
        }
    });
    return tempera
}
function postfix_subtotal(a){
    var tempera;
    tempera=_.map(a,function(num){
        if (judge_decimal(num)){
            return "0(元)";
        }else{
            return ".00(元)";
        }
    });
    return tempera
}
function postfix_value(a){          //根据传进来的数通过foo（）函数判断得到为“.00”/“0”字符串
    var str1;
    if(judge_decimal(a)){
        str1 ="0(元)";
    }else{
        str1 =".00(元)";
    }
    return str1;
}*/
function judge_decimal(integer){
    return (Math.ceil(integer) > integer)
}

function postfix(value){
    if(judge_decimal(value)){

        return (value+"0(元)")
    }else{
        return (value+".00(元)")
    }
}

function prints(gift_object,purchase_commodity_object){      //打印函数
    this.sum=0;
    this.save=0;
    this.goodsstr="";
    this.giftstr="";
    this.time_output=moment().format('YYYY年MM月DD日'+" "+"HH:mm:ss");//格式化输出
    this.init(purchase_commodity_object,gift_object);
    this.goods_output(purchase_commodity_object);
    this.gift_output(gift_object);
    this.output();
}

prints.prototype.init=function(commodity_object,gift_object) {
    var sum_result = 0;
    var save_result = 0;
    var rich_commodity_object_subcount = [];
    rich_commodity_object_subcount = _.map(commodity_object, function (commodity) {
        for (var i = 0; i < gift_object.length; i++) {
            if (gift_object[i].barcode == commodity.barcode) {
                commodity.subcount = commodity.count - gift_object[i].count;
            }
        }
        return commodity;
    });
    _.each(rich_commodity_object_subcount,function(rich_commodity){
        if(rich_commodity.subcount != undefined){
            rich_commodity.subtotal = rich_commodity.price*rich_commodity.subcount;
            sum_result+=rich_commodity.subcount*rich_commodity.price;
        }else{
            rich_commodity.subtotal = rich_commodity.count*rich_commodity.price;
            sum_result+=rich_commodity.count*rich_commodity.price;
        }
    });
    _.each(gift_object,function(obj){
        save_result+=obj.count*obj.price;
    });
    this.sum = sum_result;
    this.save = save_result;
};


prints.prototype.goods_output=function(purchase_commodity_object){
    var goodsstring_result="";
    goodsstring_result= _.reduce(purchase_commodity_object,function(memo,commodity){
        var show_variable="";
        show_variable ="名称：" + commodity.name +"，数量：" + commodity.count + commodity.unit +"，单价：" + postfix(commodity.price) +"，小计：" +postfix(commodity.subtotal)+ "\n";
        return memo + show_variable
    },"");
    this.goodsstr=goodsstring_result;
};

prints.prototype.gift_output =function(gift_object){
     var giftstring_result="";
    giftstring_result=_.reduce(gift_object, function (memo, gift) {
        return memo + "名称：" + gift.name +
            "，数量：" + gift.count + gift.unit + "\n"
    }, "");
    this.giftstr =giftstring_result;
};

prints.prototype.output = function(){
    if(this.save != 0){
        var firststep="***<没钱赚商店>购物清单***\n" +'打印时间：' + this.time_output+ '\n' +'----------------------\n';
        var thirdstep= '----------------------\n'+'挥泪赠送商品：\n' ;
        var laststep = '----------------------\n' +'总计：' + postfix(this.sum) +'\n' +'节省：'  + postfix(this.save) +'\n' +'**********************';
        console.log(firststep+this.goodsstr+thirdstep+this.giftstr+laststep);
    }else{
        var firststep="***<没钱赚商店>购物清单***\n" +'打印时间：' + this.time_output+ '\n' +'----------------------\n';
        var laststep = '----------------------\n' +'总计：' + postfix(this.sum) +'\n'  +'**********************';
        console.log(firststep+this.goodsstr+this.giftstr+laststep);
    }

};
