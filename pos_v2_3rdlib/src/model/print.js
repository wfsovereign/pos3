/**
 * Created by fyqj on 14-10-29.
 */
function foo(bbox){     //判断该数是否为小数，是则返回true
    return (Math.ceil(bbox.price) > bbox.price)
}
function foo1(b){
    return (Math.ceil(b) > b)
}

function math(a){
    _.map(a,function(num){
        if (foo(num)){
            return "0(元)";
        }else{
            return ".00(元)";
        }
    })

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
    var now= moment().format('YYYY年MM月DD日'+" "+"HH:mm:ss");
     //格式化输出
    var str="" ;//购买商品字符
    var smallsum =[];
    var m= 0;
    var str2=[];
    var sum=0;
    var save=0;
    var str1=[];
    var str5=""; //总计.00
    var str4="";        //赠送商品字符
    var str3="";        //节省钱的.00
    smallsum = _.map(bbox,function(num){
        if(num.barcode ==box[m].barcode){
            var sum =num.count*num.price-box[m].price;
            m++;
            return sum
        }else{
            return num.count*num.price
        }
    });
    str1=math(bbox);
    //console.log(str1)
    sum =_.reduce(smallsum,function(memo,num){
        return memo+num;
    },0);
    str2 =math(smallsum);
    //console.log(str2)
    str5 =math2(sum);
    for (var i=0;i<bbox.length;i++){
        str=str+"名称：" + bbox[i].name   +
            "，数量：" + bbox[i].count +bbox[i].unit  +
            "，单价：" + bbox[i].price +str1[i]+
            "，小计：" +
            smallsum[i] + str2[i]+"\n"
    }
    str4 = _.reduce(box,function(memo,num){
        return memo+"名称：" + num.name   +
            "，数量：" + num.count +num.unit+"\n"
    },"");
    save = _.reduce(box,function(memo,nm){
        return memo + nm.price
    },0);
    str3 = math2(save);
    console.log(
            "***<没钱赚商店>购物清单***\n" +
            '打印时间：' + now+ '\n' +
            '----------------------\n'
            +str

            +   '----------------------\n'+'挥泪赠送商品：\n' +

            str4+
            '----------------------\n' +
            '总计：'+sum+str5+'\n' +
            '节省：'+save+str3+'\n' +
            '**********************')
}
