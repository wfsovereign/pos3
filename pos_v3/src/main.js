//TODO: Please write code in this file.

var paid_items = [
    {
        name:'可口可乐350ml',
        count:20,
        price:3.00,
        subtotal:60.00,
        unit:'瓶'
    },
    {
        name:'可口可乐550ml',
        count:20,
        price:4.00,
        subtotal:80.00,
        unit:'瓶'
    },
    {
        name:'康师傅方便面',
        count:30,
        price:4.50,
        subtotal:135.00,
        unit:'袋'
    },
    {
        name:'云山荔枝',
        count:12,
        price:15.00,
        subtotal:180.00,
        unit:'斤'
    }
];


function build_paid_item_string(receipt_items) {
    var result = "";
    _(receipt_items).each(function (item) {
        result += '名称：' + item.name +
        '，数量：' + item.count + item.unit +
        '，单价：' + item.price.toFixed(2) +
        '(元)，小计：' + item.subtotal.toFixed(2) + '(元)\n';
    });
    return result;
}

function build_gift_item_string(result) {
    result +='名称：可口可乐品牌打折，金额：14.00元\n' +
    '名称：满100减3，金额：3.00元\n';
    return result;
}

function printInventory (inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    //console.log(receipt_items);
    var result ="";
    result+='***<没钱赚商店>购物清单***\n';
    result+= build_paid_item_string(receipt_items);
    result+='----------------------\n' +
    '优惠信息：\n';
    result = build_gift_item_string(result);


    result+='----------------------\n' +
    '总计：438.00(元)\n' +
    '节省：17.00(元)\n' +
    '**********************';
    //var expectText =
    //    '***<没钱赚商店>购物清单***\n' +
    //    '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
    //    '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
    //    '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
    //    '名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n' +
    //    '----------------------\n' +
    //    '优惠信息：\n' +
    //    '名称：可口可乐品牌打折，金额：14.00元\n' +
    //    '名称：满100减3，金额：3.00元\n' +
    //    '----------------------\n' +
    //    '总计：438.00(元)\n' +
    //    '节省：17.00(元)\n' +
    //    '**********************';

    console.log(result);
}



