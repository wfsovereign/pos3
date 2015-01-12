/**
 * Created by wfsovereign on 15-1-10.
 */

function printInventory(inputs,strategy_name){

    var receipt_items = new Transfer_inputs_to_items(inputs).get_receipt_items();
    var items = transfer_obj(receipt_items);
    var factory = new Strategy_factory();
    var preference_info_obj = factory.select_strategy(strategy_name,items);
    //var result = build_receipt_result(receipt_items,preference_info_obj);
    var result = new Build_receipt_result(receipt_items,preference_info_obj).get_result();
    console.log(result);
}