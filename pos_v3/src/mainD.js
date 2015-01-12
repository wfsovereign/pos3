/**
 * Created by wfsovereign on 15-1-10.
 */
function printInventoryD(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items = transfer_obj(receipt_items);

    //var calculator= new Calculator(items);
    //calculator.calculate();
    var result = build_receipt_result(receipt_items,Strategy_D(items));
    console.log(result);
}