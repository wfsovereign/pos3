
/**
 * Created by wfsovereign on 14-12-25.
 */

function find_item_by_barcode(barcode) {
    return _(loadAllItems()).findWhere({"barcode":barcode});
}

function build_receipt_items_from_inputs(inputs) {
     var receipt_items;
         receipt_items = _.chain(inputs).map(function(obj) {
         return{
             barcode:_.keys(obj)[0],
             count: _.values(obj)[0]
         }
     }).map(function(element) {
         var item = find_item_by_barcode(element.barcode);
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
}

function build_preference_info_obj_from_receipt_items(items) {

}