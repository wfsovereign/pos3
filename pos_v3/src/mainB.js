/**
 * Created by wfsovereign on 15-1-6.
 */

function printInventoryB(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items = transfer_obj(receipt_items);

    var result = build_receipt_result(receipt_items,Strategy_B(items));
    console.log(result);
}