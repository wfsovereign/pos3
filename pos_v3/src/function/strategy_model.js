/**
 * Created by wfsovereign on 14-12-26.
 */

function build_preferential_strategy_from_promotion(){
    var regulartion_of_strategy_one = [];
    _(loadPromotions()).find(function(promotion) {
      if(promotion.name == "可口可乐品牌打折") {
          regulartion_of_strategy_one.push(promotion);
      }
    });
    _(loadPromotions()).find(function(promotion) {
        if(promotion.type == 'single produce discount') {
            promotion.barcode = ['ITEM000000'];
            regulartion_of_strategy_one.push(promotion);
        }
    });

    _(loadPromotions()).find(function(promotion) {
        if(promotion.name == '满100减3') {
            promotion.barcode = ['ITEM000005'];
            regulartion_of_strategy_one.push(promotion);
        }
    });

    return regulartion_of_strategy_one;
}

function is_this_promotion(barcode, barcodes) {
    var result = _(barcodes).find(function(bar) {
        if(bar == barcode) {
            return bar
        }
    });
    return result != undefined
}

function add_type_to_item(item, promotion) {
    if(item.type){
        var type = {
            type:promotion.type,
            name:promotion.name,
            discount:promotion.discount_rate
            };
        item.type.push(type);
    }else{
        item.type = [{
            type:promotion.type,
            name:promotion.name,
            discount:promotion.discount_rate
        }]
    }
}

function add_promotion_from_promotion(item) {
    _(build_preferential_strategy_from_promotion()).each(function(promotion) {
        if(is_this_promotion(item.barcode,promotion.barcode)){
            add_type_to_item(item,promotion);
        }
    })

}

function build_preference_info_obj_from_receipt_items(items) {
    _(items).each(function(item){
        add_promotion_from_promotion(item);
    });
    return items;

}