/**
 * Created by wfsovereign on 14-12-25.
 */


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

function build_preferential_info_string(preferential_info_obj) {
    var result="";
    result += '名称：可口可乐品牌打折，金额：14.00元\n' +
    '名称：满100减3，金额：3.00元\n';
    return result;
}

function build_receipt_result(receipt_items) {
    var result = "";
    result += '***<没钱赚商店>购物清单***\n';
    result += build_paid_item_string(receipt_items);
    result += '----------------------\n' +
    '优惠信息：\n';
    var preferential_info_obj=0;
    result+= build_preferential_info_string(preferential_info_obj);


    result += '----------------------\n' +
    '总计：438.00(元)\n' +
    '节省：17.00(元)\n' +
    '**********************';
    return result;
}