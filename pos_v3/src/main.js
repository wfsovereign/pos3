//TODO: Please write code in this file.


function printInventory(inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    Strategy_A(receipt_items);
    var calculate = new Calculator(receipt_items);
    calculate.calculate();
    var result = build_receipt_result(receipt_items,calculate.get_preference_info_obj());
    console.log(result);
}
