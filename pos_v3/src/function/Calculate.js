/**
 * Created by wfsovereign on 14-12-31.
 */

function caculate_sum(not_preferential_items) {
    var sum =0;
    _(not_preferential_items).each(function(item){
        sum+=item.subtotal;
    });
    sum = Math.floor(sum/100)*3;
    return sum;
}
function calculate_subtotal_for_receipt_items(receipt_items) {
    var subtotal =0;
    _(receipt_items).each(function(item) {
        subtotal +=item.subtotal;
    });
    return subtotal;
}

function calculate_save_money_for_preference_info_obj(preference_info_obj) {
    var save_money = 0;
    _(preference_info_obj).each(function(obj) {
        save_money+=obj.sum;
    });
    return save_money;
}

function get_promotion_info_from_one_type_sum(item, type) {
    var single_sum = 0;
    if (type.discount_rate == "5%") {
        single_sum = item.subtotal * 0.05;
    }
    if (type.discount_rate == "10%") {
        single_sum = item.subtotal * 0.1;
    }
    //if (type.discount_rate == "full one hundred reduce three" && item.subtotal >= 100) {
    //    single_sum = Math.ceil(item.subtotal / 100) * 3;
    //}
    return single_sum;
}


function Calculate(items){
    this.items = items;
    this.preference_info_obj=[];
    this._preference_from_type();
    //_(items).each(function (item) {
    //    if(item.type.length>0){
    //        this._preference_from_type(item);
    //    }
    //});

}

function exist_this_preferential_name(name, preference_info_obj) {
    return _(preference_info_obj).some(function (info_obj) {
        return info_obj.name == name;
    });
}

function get_this_promotion_info_obj(name, preference_info_obj) {
    return _(preference_info_obj).filter(function (info_obj) {
        return info_obj.name == name;
    })[0]
}

Calculate.prototype._preference_from_type = function(){
    var preference_info_obj=[];
    var items = this.items;
    _(items).each(function(item){
        if(item.type.length>0){
             get_preference_info_obj(item,preference_info_obj)
        }
    });

    function get_preference_info_obj(item,preference_info_obj) {
        var get_summary_for_object_of_discount_rate = function (this_item,type) {
            return Math.floor(this_item.subtotal/type.discount_rate.top)*type.discount_rate.reduce;
        };
        _(item.type).each(function (type) {
            var promotion_info_from_one_type = {};
            if (typeof(type.discount_rate) == "object") {
                promotion_info_from_one_type = {
                    name: type.name,
                    sum: get_summary_for_object_of_discount_rate(item,type)
                };
            } else {
                promotion_info_from_one_type = {
                    name: type.name,
                    sum: Math.ceil(item.subtotal * (1-type.discount_rate))
                };
            }
            if (exist_this_preferential_name(promotion_info_from_one_type.name, preference_info_obj)) {
                get_this_promotion_info_obj(promotion_info_from_one_type.name, preference_info_obj).sum += promotion_info_from_one_type.sum;
            } else {
                preference_info_obj.push(promotion_info_from_one_type);
            }
        });
    }
    this.preference_info_obj = preference_info_obj;
};

Calculate.prototype.get_preference_info_obj = function(){
    this.preference_info_obj = _(this.preference_info_obj).filter(function(info_obj){
        return info_obj.sum>0
    });
    return this.preference_info_obj;
};
