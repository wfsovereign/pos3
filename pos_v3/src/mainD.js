/**
 * Created by wfsovereign on 15-1-10.
 */
function printInventoryD(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items = transfer_obj(Strategy_D(receipt_items));
    //console.log(items,'items');
    var calculator= new Calculator(items);
    calculator.calculate();
    var result = build_receipt_result(receipt_items,calculator.get_preference_info_obj());
    console.log(result);
}