/**
 * Created by wfsovereign on 14-12-26.
 */
/*

function build_preferential_strategy_from_promotion() {
    var regulation_of_strategy_one = [];
    _(loadPromotions()).find(function (promotion) {
        if (promotion.name == "可口可乐品牌打折") {
            regulation_of_strategy_one.push(promotion);
        }
    });
    _(loadPromotions()).find(function (promotion) {
        if (promotion.type == 'single produce discount') {
            promotion.barcode = ['ITEM000000'];
            regulation_of_strategy_one.push(promotion);
        }
    });
    _(loadPromotions()).find(function (promotion) {
        if (promotion.name == '满100减3') {
            promotion.barcode = ['ITEM000005'];
            regulation_of_strategy_one.push(promotion);
        }
    });
    return regulation_of_strategy_one;
}

function add_promotion_from_promotion(item) {
    _(build_preferential_strategy_from_promotion()).each(function (promotion) {
        if (is_this_promotion(item.barcode, promotion.barcode)) {
            add_type_to_item(item, promotion);
        }
    })
}


function build_preferential_items_from_add_promotion_items(items) {
    var preferential_items = _(items).filter(function (item) {
        return item.type != undefined;
    });
    _(preferential_items).each(function (item) {
        delete_invalid_type(item);
    });
    return preferential_items;
}

function build_not_preferential_items_from_add_promotion_items(items) {
    return _(items).filter(function (item) {
        return item.type == undefined;
    })
}





function get_full_reduce(preference_info_obj) {
    return _(preference_info_obj).filter(function (info_obj) {
        return info_obj.name == "满100减3";
    })[0]
}

function delete_sum_equal_zero_for_preferential_info_obj(preference_info_obj) {
    _(preference_info_obj).each(function (obj) {
        if (obj.sum == 0) {
            preference_info_obj.splice(_(preference_info_obj).indexOf(obj), 1)
        }
    });
}
function modify_full_reduce_to_preferential_info_obj(not_preferential_items, preference_info_obj) {
    if (get_full_reduce(preference_info_obj)) {
        get_full_reduce(preference_info_obj).sum = caculate_sum(not_preferential_items);
    } else {
        var promotion_info_from_one_type = {
            name: "满100减3",
            sum: caculate_sum(not_preferential_items)
        };
        preference_info_obj.push(promotion_info_from_one_type)
    }
    delete_sum_equal_zero_for_preferential_info_obj(preference_info_obj);
}

function build_preferential_info_obj_from_receipt_items(items) {
    _(items).each(function (item) {
        add_promotion_from_promotion(item);
    });
    var not_preferential_items = build_not_preferential_items_from_add_promotion_items(items);
    var preference_info_obj = [];
    _(build_preferential_items_from_add_promotion_items(items)).each(function (item) {
        _(item.type).each(function (type) {
            var promotion_info_from_one_type = {
                name: type.name,
                sum: get_promotion_info_from_one_type_sum(item, type)
            };
            if (exist_this_preferential_name(promotion_info_from_one_type.name, preference_info_obj)) {
                get_this_promotion_info_obj(promotion_info_from_one_type.name, preference_info_obj).sum += promotion_info_from_one_type.sum;
            } else {
                preference_info_obj.push(promotion_info_from_one_type);
            }
        });
    });
    modify_full_reduce_to_preferential_info_obj(not_preferential_items, preference_info_obj);
    return preference_info_obj;
}
 function is_this_promotion(barcode, barcodes) {
 var result = _(barcodes).find(function (bar) {
 if (bar == barcode) {
 return bar
 }
 });
 return result != undefined
 }


*/

















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

function del_type_to_this_item(type, item) {
   var count = 0,index;
    _(item.type).each(function(item_type){
        if(item_type.type == type){
            index = count;
        }
        count++;
    });
    if(index>=0){
        item.type.splice(index,1);
    }
}
function del_promotion_info_from_this_barcode(barcode,items,type) {

    _(items).each(function(item){
        if(barcode == item.barcode){
            del_type_to_this_item(type,item);
        }
    })
}
function del_fullduce_from_have_other_promotion_info(items,type) {
    _(items).each(function(item){
        if(item.type.length>1){
            del_type_to_this_item(type,item);
        }
    });
}

function not_exist_brand_and_single_discount(types) {
    var exist_brand_discount = _(types).some(function (type) {
        return type.type == "brand_discount"
    });
    var exist_single_produce_discount = _(types).some(function (type) {
        return type.type == "single_produce_discount"
    });
    return exist_brand_discount && exist_single_produce_discount;
}
function delete_invalid_type(item) {
    if (not_exist_brand_and_single_discount(item.type)) {
        var index_number = _(item.type).indexOf(_(item.type).findWhere({type: 'single_produce_discount'}));
        item.type.splice(index_number, 1);
    }
}
function del_single_discount_from_exist_single_and_brand_discount(items) {
    _(items).each(function(item){
        if(item.type.length>1){
            delete_invalid_type(item);
        }
    });
}

function get_besides_barcode_from_this_promotion(promotions) {
    return _(promotions).filter(function(promotion){
        return promotion.barcode.besides_barcode != undefined
    })[0];
}

function get_promotion_A() {
    var promotion_A = [];
    promotion_A.push(
        new Generate_promotion('brand_discount', '可口可乐品牌打折', 0.9, {barcode: ['ITEM000000', 'ITEM000010']}).discount());
    promotion_A.push(
        new Generate_promotion('single_produce_discount', '单品打折', 0.95, {barcode: ['ITEM000000']}).discount());
    promotion_A.push(
        new Generate_promotion(
            'all_produce_fullreduce', '满100减3',
            {top: 100, reduce: 3}, {besides_barcode: ['ITEM000005'], barcode: "all"}).fullreduce()
    );
    return promotion_A;
}
function Strategy_A(receipt_items) {
    var regulation_of_strategy_A = get_promotion_A();
    _(receipt_items).each(function (item) {
        add_promotion_info_from_this_promotion(regulation_of_strategy_A, item)
    });
    var have_besides_barcode_promotion = get_besides_barcode_from_this_promotion(regulation_of_strategy_A);
    _(have_besides_barcode_promotion.barcode.besides_barcode).each(function (barcode) {
        del_promotion_info_from_this_barcode(barcode, receipt_items,have_besides_barcode_promotion.type);
    });
    del_fullduce_from_have_other_promotion_info(receipt_items,have_besides_barcode_promotion.type);
    del_single_discount_from_exist_single_and_brand_discount(receipt_items);
    return receipt_items;
}


































