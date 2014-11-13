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
function judge_decimal(b){
    return (Math.ceil(b) > b)
}
function postfix(value){
    if(judge_decimal(value)){

        return (value+"0(元)")
    }else{
        return (value+".00(元)")
    }
}
function prints(box,bbox){      //打印函数
    this.sum=0;
    this.save=0;
    this.goodsstr="";
    this.giftstr="";
    this.firststep=moment().format('YYYY年MM月DD日'+" "+"HH:mm:ss");//格式化输出
    this.init(bbox,box);
    this.goodsoutput(bbox);
    this.giftoutput(box);
    this.output(bbox,box);
    /*var goodsstroutput,smallsum, m,smallsumstr,sum,save,goodspricestr,sumstr,giftstroutput,savestr;
     goodsstroutput="" ;            //购买商品输出字符
     smallsum =[];                  //小计值
     m= 0;                          //box下标
     smallsumstr=[];
     sum =0;                          //总计值
     save = 0;                        //节省值
     goodspricestr = [];            //已购买商品单价字符
     sumstr = "";                      //总计字符
     giftstroutput = "";                      //赠送商品字符
     savestr = "";                     //节省钱的字符
    smallsum = _.map(bbox, function (num) {
            if (num.barcode == box[m].barcode) {
                var sume = num.count * num.price - box[m].price;
                m++;
                return sume
            } else {
                return num.count * num.price
            }
        });
    goodspricestr = postfix_goodsprice(bbox);
    this.getsum =function() {
        sum = _.reduce(smallsum, function (memo, num) {
            return memo + num;
        }, 0);
        return sum
    };
    smallsumstr =postfix_subtotal(smallsum);
    this.getsumstr=function() {
        sumstr = postfix_value(sum);
    return sumstr
    };
    this.getgoosstrpoutput = function() {
        for (var i = 0; i < bbox.length; i++) {
            goodsstroutput = goodsstroutput + "名称：" + bbox[i].name +
                "，数量：" + bbox[i].count + bbox[i].unit +
                "，单价：" + bbox[i].price + goodspricestr[i] +
                "，小计：" +
                smallsum[i] + smallsumstr[i] + "\n"
        }
        return goodsstroutput
    };
    this.getgiftstroutput = function() {
        giftstroutput = _.reduce(box, function (memo, num) {
            return memo + "名称：" + num.name +
                "，数量：" + num.count + num.unit + "\n"
        }, "");
        return giftstroutput
    };
    this.getsave =function(){
    save = _.reduce(box,function(memo,nm){
        return memo + nm.price
    },0);
        return save
    };
    this.getsavestr=function(){
        savestr = postfix_value(save);
        return savestr
    }*/
}
prints.prototype.init=function(goodsbox,giftbox){
    var tempary=0;
    var tep=0;
        _.each(goodsbox,function(box){
           for(var i=0;i<giftbox.length;i++){
               if(box.barcode==giftbox[i].barcode){
                   box.subtotal=box.count*box.price - giftbox[i].price;
                   tempary+=box.subtotal;
                   tep+=giftbox[i].price;
               }
           }});
    _.each(goodsbox,function(box){
        for(var i=0;i<giftbox.length;i++){
            if(typeof (box.subtotal)=='undefined') {
                box.subtotal=box.count * box.price;
                tempary+=box.subtotal;
            }
        }
    });
    this.sum =tempary;
    this.save =tep;
};
prints.prototype.goodsoutput=function(goodsbox){
    var temp="";
    temp= _.reduce(goodsbox,function(memo,bbox){
        var num="";
        num ="名称：" + bbox.name +"，数量：" + bbox.count + bbox.unit +"，单价：" + postfix(bbox.price) +"，小计：" +postfix(bbox.subtotal)+ "\n";
        return memo + num
    },"");
    this.goodsstr=temp;

};
prints.prototype.giftoutput =function(box){
     var temp="";
    temp=_.reduce(box, function (memo, num) {
        return memo + "名称：" + num.name +
            "，数量：" + num.count + num.unit + "\n"
    }, "");
    this.giftstr =temp;
};
prints.prototype.output = function(goodsbox,giftbox){
    var firststep="***<没钱赚商店>购物清单***\n" +'打印时间：' + this.firststep+ '\n' +'----------------------\n';
    var thirdstep= '----------------------\n'+'挥泪赠送商品：\n' ;
    var laststep = '----------------------\n' +'总计：' + postfix(this.sum) +'\n' +'节省：'  + postfix(this.save) +'\n' +'**********************'
    console.log(firststep+this.goodsstr+thirdstep+this.giftstr+laststep);
};
/*
prints.prototype.printout =function(){
    goodsstroutput =this.getgoosstrpoutput();
    giftstroutput =this.getgiftstroutput();
    sum =this.getsum();
    sumstr =this.getsumstr();
    save =this.getsave();
    savestr =this.getsavestr();
    var now= moment().format('YYYY年MM月DD日'+" "+"HH:mm:ss");//格式化输出
    console.log(
            "***<没钱赚商店>购物清单***\n" +
            '打印时间：' + now+ '\n' +
            '----------------------\n'
            + goodsstroutput
            +   '----------------------\n'+'挥泪赠送商品：\n' +
            giftstroutput+
            '----------------------\n' +
            '总计：' + sum + sumstr +'\n' +
            '节省：' + save + savestr +'\n' +
            '**********************')
};*/