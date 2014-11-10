/**
 * Created by fyqj on 14-10-31.
 */
function foo(bbox){     //判断该数是否为小数，是则返回true
    return (Math.ceil(bbox.price) > bbox.price)
}
function foo1(b){
    return (Math.ceil(b) > b)
}
function math(a){
    var tempera;
        tempera=_.map(a,function(num){
        if (foo(num)){
            return "0(元)";
        }else{
            return ".00(元)";
        }
    });
    return tempera
}
function math1(a){
    var tempera;
    tempera=_.map(a,function(num){
        if (foo1(num)){
            return "0(元)";
        }else{
            return ".00(元)";
        }
    });
    return tempera
}
function math2(a){          //根据传进来的数通过foo（）函数判断得到为“.00”/“0”字符串
    var str1;
    if(foo1(a)){
        str1 ="0(元)";
    }else{
        str1 =".00(元)";
    }
    return str1;
}
function prints(box,bbox){      //打印函数
    var goodsstroutput,smallsum, m,smallsumstr,sum,save,goodspricestr,sumstr,giftstroutput,savestr;
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
    goodspricestr = math(bbox);
    this.getsum =function() {
        sum = _.reduce(smallsum, function (memo, num) {
            return memo + num;
        }, 0);
        return sum
    };
    smallsumstr =math1(smallsum);
    this.getsumstr=function() {
        sumstr = math2(sum);
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
        savestr = math2(save);
        return savestr
    }
}
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
};