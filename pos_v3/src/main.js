//TODO: Please write code in this file.



function printInventory (inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var have_promotion_info_items = build_preference_info_obj_from_receipt_items(receipt_items);
    var result = build_receipt_result(receipt_items);

    console.log(build_preferential_items_from_add_promotion_items(have_promotion_info_items));
}



