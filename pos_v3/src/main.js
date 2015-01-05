//TODO: Please write code in this file.


function printInventory(inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    //var preferential_info_obj = build_preferential_info_obj_from_receipt_items(receipt_items);
    //var result = build_receipt_result(receipt_items,preferential_info_obj);
    Strategy_A(receipt_items);
    console.log(receipt_items);
}



