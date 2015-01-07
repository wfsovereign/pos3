/**
 * Created by wfsovereign on 15-1-6.
 */

function printInventoryB(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items_for_calculate = Strategy_B(receipt_items);
    var calculate= new Calculate(items_for_calculate);
    var result = build_receipt_result(receipt_items,calculate.get_preference_info_obj());
    //console.log(calculate.get_preference_info_obj(),"promotion_item");
    console.log(result);
}