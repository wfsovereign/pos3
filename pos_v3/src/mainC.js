/**
 * Created by wfsovereign on 15-1-8.
 */
function transfer_obj(items_for_calculate) {
    var items = [];
    _(items_for_calculate).each(function (item) {
        items.push({
            barcode: item.barcode,
            brand: item.brand,
            count: item.count,
            name: item.name,
            price: item.price,
            subtotal: item.subtotal,
            type: item.type,
            unit: item.unit
        });
    });
    return items;
}

function printInventoryC(inputs){
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var items = transfer_obj(Strategy_C(receipt_items));
    var calculator= new Calculator(items);
    calculator.calculate_base();
    var result = build_receipt_result(receipt_items,calculator.get_preference_info_obj());
    console.log(result);
}