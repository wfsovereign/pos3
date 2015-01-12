

//function build_receipt_items_from_inputs(inputs) {
//     var receipt_items;
//         receipt_items = _.chain(inputs).map(function(obj) {
//         return{
//             barcode:_.keys(obj)[0],
//             count: _.values(obj)[0]
//         }
//     }).map(function(element) {
//         var item = find_item_by_barcode(element.barcode);
//         return {
//             barcode:item.barcode,
//             name:item.name,
//             count:element.count,
//             unit:item.unit,
//             price:item.price,
//             brand:item.brand,
//             subtotal:item.price*element.count
//         }
//     }).value();
//    return receipt_items;
//}

function Transfer_inputs_to_items(inputs){
    this.inputs = inputs;
}

Transfer_inputs_to_items.prototype.get_receipt_items = function(){
    var receipt_items;
    receipt_items = _.chain(this.inputs).map(function(obj) {
        return{
            barcode:_.keys(obj)[0],
            count: _.values(obj)[0]
        }
    }).map(function(element) {
        var item = _(loadAllItems()).findWhere({"barcode": element.barcode});
        return {
            barcode:item.barcode,
            name:item.name,
            count:element.count,
            unit:item.unit,
            price:item.price,
            brand:item.brand,
            subtotal:item.price*element.count
        }
    }).value();
    return receipt_items;
};
