/**
 * Created by wfsovereign on 15-1-6.
 */

function printInventoryB(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items_for_calculate = Strategy_B(receipt_items);
    var calculator= new Calculator(items_for_calculate);
    calculator.calculate();
    var result = build_receipt_result(receipt_items,calculator.get_preference_info_obj());
    console.log(result);
}