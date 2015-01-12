/**
 * Created by wfsovereign on 15-1-12.
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
