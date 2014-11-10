/**
 * Created by fyqj on 14-11-1.
 */
function foo(bbox){     //判断该数是否为小数，是则返回true
    return (Math.ceil(bbox.price) > bbox.price)
}
function foo1(b){       //根据传入参数，判断其是否为小数，是则返回true
    return (Math.ceil(b) > b)
}
function math(a){       //根据传入数组，调用foo（）得到字符串数组
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
function math1(a){      //根据传入数组，调用foo1(）得到字符串数组
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
function prints(bbox){      //打印函数
    console.log(bbox)
    var goodsstroutput,smallsum,smallsumstr,sum,goodspricestr,sumstr;
    goodsstroutput="" ;            //购买商品输出字符
    smallsum =[];                  //小计值
    smallsumstr=[];
    sum =0;                          //总计值
    goodspricestr = [];            //已购买商品单价字符
    sumstr = "";                      //总计字符
    smallsum = _.map(bbox,function(num){    //为小计数组赋值
            return num.count*num.price
    });
    goodspricestr = math(bbox);             //为已购买商品单价的字符数组赋值
    sum = _.reduce(smallsum,function(memo,num){     //为商品总价赋值
        return memo+num;
    },0);
    smallsumstr =math1(smallsum);
    sumstr =math2(sum);
    for (var i=0;i<bbox.length;i++){
        goodsstroutput = goodsstroutput +"名称：" + bbox[i].name   +
            "，数量：" + bbox[i].count +bbox[i].unit  +
            "，单价：" + bbox[i].price +goodspricestr[i]+
            "，小计：" +
            smallsum[i] + smallsumstr[i]+"\n"
    }
    console.log(
            "***<没钱赚商店>购物清单***\n"
            + goodsstroutput

            +
            '----------------------\n' +
            '总计：' + sum + sumstr +'\n' +

            '**********************')
}