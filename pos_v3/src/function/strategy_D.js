/**
 * Created by wfsovereign on 15-1-10.
 */


function get_promotion_D() {
    var promotion_D =[];
    promotion_D.push(
        new Generate_promotion('brand_discount', '可口可乐品牌打折',
            0.9, {barcode: ['ITEM000000', 'ITEM000010']}).discount());
    promotion_D.push(
        new Generate_promotion('single_produce_discount', '单品打折', 0.95, {barcode: ['ITEM000000']}).discount());

    promotion_D.push(
        new Generate_promotion(
            'single_produce_fullreduce', '满100减5',
            {top: 100, reduce: 5}, {barcode:['ITEM000007']},"果粒橙满100减5").fullreduce()
    );
    promotion_D.push(
        new Generate_promotion(
            'brand_produce_fullreduce', '满100减2',
            {top: 100, reduce: 2}, {barcode:['ITEM000002','ITEM000003']},"云山品牌满100减2").fullreduce()
    );
    promotion_D.push(
        new Generate_promotion(
            'all_produce_discount', '九折',
            0.9, {barcode:'all',besides_barcode:['ITEM000001']},'九折').fullreduce()
    );
    return promotion_D;
}



function Strategy_D(receipt_items) {
    var regulation_of_strategy_D = get_promotion_D();
    _(receipt_items).each(function (item) {
        add_promotion_info_from_this_promotion(regulation_of_strategy_D, item)
    });
    var have_besides_barcode_promotion = get_besides_barcode_from_this_promotion(regulation_of_strategy_D);
    _(have_besides_barcode_promotion.barcode.besides_barcode).each(function (barcode) {
        del_promotion_info_from_this_barcode(barcode, receipt_items,have_besides_barcode_promotion.type);
    });
    return receipt_items;
}