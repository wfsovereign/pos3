//TODO: Please write code in this file.



function printInventory (inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var result = build_receipt_result(receipt_items);

    console.log(result);
}



