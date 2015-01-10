/**
 * Created by wfsovereign on 15-1-6.
 */
function get_promotion_B() {
    var promotion_B = [];
    promotion_B.push(
        new Generate_promotion('brand_discount', '可口可乐品牌打折', 0.9, {barcode: ['ITEM000000', 'ITEM000010']}).discount());
    promotion_B.push(
        new Generate_promotion('single_produce_discount', '单品打折', 0.95, {barcode: ['ITEM000000']}).discount());
    promotion_B.push(
        new Generate_promotion(
            'all_produce_fullreduce', '满100减2',
            {top: 100, reduce: 2}, {barcode:['ITEM000005','ITEM000008']},"康师傅品牌满100减2").fullreduce()
    );
    promotion_B.push(
        new Generate_promotion(
            'all_produce_fullreduce', '满100减5',
            {top: 100, reduce: 5}, {barcode:['ITEM000003']},"云山荔枝满100减5").fullreduce()
    );
    return promotion_B;
}

function delete_brand_discount_type(item) {
    if (not_exist_brand_and_single_discount(item.type)) {
        var index_number = _(item.type).indexOf(_(item.type).findWhere({type: 'brand_discount'}));
        item.type.splice(index_number, 1);
    }
}
function del_invalid_discount_from_exist_single_and_brand_discount_for_B(items) {
    _(items).each(function(item){
        if(item.type.length>1){
            delete_brand_discount_type(item);
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

function Strategy_B(receipt_items){
    var regulation_of_strategy_B = get_promotion_B();
    _(receipt_items).each(function (item) {
        add_promotion_info_from_this_promotion(regulation_of_strategy_B, item)
    });
    receipt_items = filter_item_of_not_have_type(receipt_items);
    del_invalid_discount_from_exist_single_and_brand_discount_for_B(receipt_items);
    return receipt_items;
}
