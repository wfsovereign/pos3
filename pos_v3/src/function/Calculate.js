/**
 * Created by wfsovereign on 14-12-31.
 */

function caculate_sum(not_preferential_items) {
    var sum =0;
    _(not_preferential_items).each(function(item){
        sum+=item.subtotal;
    });
    sum = Math.floor(sum/100)*3;
    return sum;
}
function calculate_subtotal_for_receipt_items(receipt_items) {
    var subtotal =0;
    _(receipt_items).each(function(item) {
        subtotal +=item.subtotal;
    });
    return subtotal;
}

function calculate_save_money_for_preference_info_obj(preference_info_obj) {
    var save_money = 0;
    _(preference_info_obj).each(function(obj) {
        save_money+=obj.sum;
    });
    return save_money;
}

function Calculate(){

}