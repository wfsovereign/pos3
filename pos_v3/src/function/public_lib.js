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



function exist_this_promotion(barcode, barcodes) {
    if (barcodes == "all") {
        return true
    } else if (barcodes) {
        var result = _(barcodes).find(function (bar) {
            if (bar == barcode) {
                return bar
            }
        });
        return result != undefined
    }
    return false
}

function add_type_to_item(item, promotion) {
    if (item.type) {
        var type = {
            type: promotion.type,
            name: promotion.name,
            discount_rate: promotion.discount_rate,
            special: promotion.special
        };
        item.type.push(type);
    } else {
        item.type = [{
            type: promotion.type,
            name: promotion.name,
            discount_rate: promotion.discount_rate,
            special: promotion.special
        }]
    }
}

function add_promotion_info_from_this_promotion(promotions, item) {
    _(promotions).each(function (promotion) {
        if (exist_this_promotion(item.barcode, promotion.barcode.barcode)) {
            add_type_to_item(item, promotion);
        }
    });
}

function filter_item_of_not_have_type(items) {
    return _(items).filter(function(item){
        if(item.type){
            return item.type.length>0;
        }else{
            return item.type != undefined;
        }
    })
}