//TODO: Please write code in this file.



function printInventory (inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var result = build_receipt_result(receipt_items);
    
    var have_promotion_info_items = build_preference_info_obj_from_receipt_items(receipt_items);
    console.log(have_promotion_info_items,"--------");
    //console.log(result);
}



