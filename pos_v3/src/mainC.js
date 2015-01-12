/**
 * Created by wfsovereign on 15-1-8.
 */

function printInventoryC(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items = transfer_obj(receipt_items);

    var result = build_receipt_result(receipt_items,Strategy_C(items));
    console.log(result);
}