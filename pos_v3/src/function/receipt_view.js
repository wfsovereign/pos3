/**
 * Created by wfsovereign on 14-12-25.
 */
function calculate_subtotal_for_receipt_items(receipt_items) {
    var subtotal = 0;
    _(receipt_items).each(function (item) {
        subtotal += item.subtotal;
    });
    return subtotal;
}

function calculate_save_money_for_preference_info_obj(preference_info_obj) {
    var save_money = 0;
    _(preference_info_obj).each(function (obj) {
        save_money += obj.sum;
    });
    return save_money;
}


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
    _(preferential_info_obj).each(function(obj) {
        result+='名称：'+obj.name+'，金额：'+obj.sum.toFixed(2)+'元\n';
    });
    return result;
}


//function build_receipt_result(receipt_items,preference_info_obj) {
//    var result = "";
//    result += '***<没钱赚商店>购物清单***\n';
//    result += build_paid_item_string(receipt_items);
//    var subtotal = calculate_subtotal_for_receipt_items(receipt_items);
//    if(preference_info_obj != undefined){
//        var save_money = calculate_save_money_for_preference_info_obj(preference_info_obj);
//        result += '----------------------\n' +
//        '优惠信息：\n';
//        result+= build_preferential_info_string(preference_info_obj);
//        result += '----------------------\n' +
//        '总计：'+(subtotal-save_money).toFixed(2)+'(元)\n' +
//        '节省：'+save_money.toFixed(2)+'(元)\n' +
//        '**********************';
//    }else{
//        result += '----------------------\n' +
//        '总计：'+subtotal.toFixed(2)+'(元)\n' +
//        '**********************';
//    }
//    return result;
//}

function Build_receipt_result(receipt_items,preference_info_obj){
    this.items = receipt_items;
    this.preference_info_obj = preference_info_obj;
    this.result = "";
}

Build_receipt_result.prototype.generate_receipt_result = function(){
    this.result += '***<没钱赚商店>购物清单***\n';
    this.result += build_paid_item_string(this.items);
    var subtotal = calculate_subtotal_for_receipt_items(this.items);
    if(this.preference_info_obj != undefined){
        var save_money = calculate_save_money_for_preference_info_obj(this.preference_info_obj);
        this.result += '----------------------\n' +
        '优惠信息：\n';
        this.result += build_preferential_info_string(this.preference_info_obj);
        this.result += '----------------------\n' +
        '总计：'+(subtotal-save_money).toFixed(2)+'(元)\n' +
        '节省：'+save_money.toFixed(2)+'(元)\n' +
        '**********************';
    }else{
        this.result += '----------------------\n' +
        '总计：'+subtotal.toFixed(2)+'(元)\n' +
        '**********************';
    }
};

Build_receipt_result.prototype.get_result = function() {
    this.generate_receipt_result();
    return this.result;
};

