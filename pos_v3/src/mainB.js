/**
 * Created by wfsovereign on 15-1-6.
 */

function printInventoryB(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items = transfer_obj(receipt_items);
    var factory = new Strategy_factory();
    var preference_info_obj = factory.select_strategy("createStrategyB",items);
    var result = build_receipt_result(receipt_items,preference_info_obj);
    console.log(result);
}