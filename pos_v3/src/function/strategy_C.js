
/**
 *
 * Created by wfsovereign on 15-1-8.
 */

function get_promotion_C() {
    var promotion_C =[],promotion = [];
    var regulation_info_C = [
        {
            type: 'brand_discount',
            name: '可口可乐品牌打折',
            discount_rate: 0.9,
            barcode: {barcode: ['ITEM000000', 'ITEM000010']},
            special:null
        },
        {
            type: 'single_produce_discount',
            name: '单品打折',
            discount_rate: 0.95,
            barcode: {barcode: ['ITEM000000']},
            special:null
        },
        {
            type: 'brand_produce_fullreduce',
            name: '满100减2',
            discount_rate: {top: 100, reduce: 2},
            barcode: {barcode: ['ITEM000005', 'ITEM000008']},
            special:'康师傅品牌满100减2'
        },
        {
            type: 'all_produce_fullreduce',
            name: '满100减5',
            discount_rate: {top: 100, reduce: 5},
            barcode: {barcode:'all',besides_barcode:['ITEM000002']},
            special:'满100减5'
        }
    ];
    //promotion_C.push(
    //    new Generate_promotion('brand_discount', '可口可乐品牌打折',
    //        0.9, {barcode: ['ITEM000000', 'ITEM000010']}).discount());
    //promotion_C.push(
    //    new Generate_promotion('single_produce_discount', '单品打折', 0.95, {barcode: ['ITEM000000']}).discount());
    //promotion_C.push(
    //    new Generate_promotion(
    //        'brand_produce_fullreduce', '满100减2',
    //        {top: 100, reduce: 2}, {barcode:['ITEM000005','ITEM000008']},"康师傅品牌满100减2").fullreduce()
    //);
    //promotion_C.push(
    //    new Generate_promotion(
    //        'all_produce_fullreduce', '满100减5',
    //        {top: 100, reduce: 5}, {barcode:'all',besides_barcode:['ITEM000002']},'满100减5').fullreduce()
    //);
    //console.info(promotion,"promotion");
    //console.info(promotion_C,"C");
    //console.info(promotion == promotion_C);
    return Build_regulation_of_strategy(regulation_info_C);
}



function Strategy_C(receipt_items){
    var regulation_of_strategy_C = get_promotion_C();
    _(receipt_items).each(function (item) {
        add_promotion_info_from_this_promotion(regulation_of_strategy_C, item)
    });
    var have_besides_barcode_promotion = get_besides_barcode_from_this_promotion(regulation_of_strategy_C);
    _(have_besides_barcode_promotion.barcode.besides_barcode).each(function (barcode) {
        del_promotion_info_from_this_barcode(barcode, receipt_items,have_besides_barcode_promotion.type);
    });
    var have_type_receipt_items = filter_item_of_not_have_type(receipt_items);
    var calculator= new Calculator(have_type_receipt_items);
    calculator.calculate_base();

    return calculator.get_preference_info_obj();
}
