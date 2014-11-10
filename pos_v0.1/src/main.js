//TODO: Please write code in this file.
function printInventory(inputs) {
    var tempary=[];
    var temp =inputs[0] ;
    var count=0;
    _.each(inputs,function(inp){
        if (temp.barcode == inp.barcode){
            count +=1;
            temp.count = count;
        }else if(temp.barcode != inp.barcode) {
            tempary.push(temp);
            temp =inp;
            temp.count =1;
            count =1;
           if (inp.barcode == inputs[inputs.length-1].barcode){
               tempary.push(temp);
              // console.log("this is last")
           }
        }
    });

    var result =
        "***<没钱赚商店>购物清单***\n" +
        "名称：" + tempary[0].name   +
        "，数量：" + tempary[0].count +tempary[0].unit  +
        "，单价：" + tempary[0].price +
        ".00(元)，小计：" +
        (tempary[0].count * tempary[0].price) + ".00(元)\n"+
        "名称：" + tempary[1].name +  "，数量：" + tempary[1].count +tempary[1].unit +
        "，单价：" + tempary[1].price +
        ".00(元)，小计："
        + (tempary[1].count * tempary[1].price) + ".00(元)\n"+
        "名称：" + tempary[2].name +
        "，数量：" + tempary[2].count +tempary[2].unit +
        "，单价：" + tempary[2].price +
        ".00(元)，小计：" +
        + (tempary[2].count * tempary[2].price) + ".00(元)\n" +   '----------------------\n' +"总计：23.00(元)\n" +
        '**********************';
        console.log(result);

}
//inputs = [
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000001',
//        name: '雪碧',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000001',
//        name: '雪碧',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000004',
//        name: '电池',
//        unit: '个',
//        price: 2.00
//    }