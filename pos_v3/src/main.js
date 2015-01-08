//TODO: Please write code in this file.


function printInventory(inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    Strategy_A(receipt_items);
    var calculator = new Calculator(receipt_items);
    calculator.calculate();
    var result = build_receipt_result(receipt_items,calculator.get_preference_info_obj());
    console.log(result);
}
