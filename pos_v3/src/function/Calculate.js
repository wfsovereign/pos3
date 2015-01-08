/**
 * Created by wfsovereign on 14-12-31.
 */

//function caculate_sum(not_preferential_items) {
//    var sum =0;
//    _(not_preferential_items).each(function(item){
//        sum+=item.subtotal;
//    });
//    sum = Math.ceil(sum/100)*3;
//    return sum;
//}
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


var calculationManager = {};
calculationManager.single_produce_discount = function(type,item){
    return {
        name: item.name+type.name,
        sum: Math.round(item.subtotal*(1-type.discount_rate))
    }
};
calculationManager.create_fullreduce = function(type,item){
    return {
        name: type.name,
        sum:  Math.floor(item.subtotal/type.discount_rate.top)*type.discount_rate.reduce
    }
};
calculationManager.create_special =function(type,item){
    return {
        name: type.special,
        sum: item.subtotal,
        type:type.discount_rate
    }
};
calculationManager.brand_discount = function(type,item){
    return {
        name: type.name,
        sum: Math.round(item.subtotal * (1-type.discount_rate))
    }
};
calculationManager.factory = function(type,item){
    if(type.special){
        return new calculationManager["create_special"](type,item)
    }else if(typeof (type.discount_rate) == "object"){
        return new calculationManager["create_fullreduce"](type,item)
    } else {
        console.log(type);
        return new calculationManager[type.type](type,item)
    }
};

function Calculator(items){
    this.items = items;
    this.preference_info_obj=[];

}

Calculator.prototype._preference_from_type_fullreduce = function(){
    _(this.preference_info_obj).each(function(info_obj){
        if(typeof (info_obj.type) == 'object'){
            info_obj.sum = Math.floor(info_obj.sum/info_obj.type.top)*info_obj.type.reduce;
        }
    })
};

Calculator.prototype._preference_from_type_discount = function(){
    var preference_info_obj=[];
    _(this.items).each(function(item){
        if(item.type.length>0){
             get_preference_info_obj(item,preference_info_obj)
        }
    });
    function get_preference_info_obj(item,preference_info_obj) {
        _(item.type).each(function (type) {
            var promotion_info_from_one_type = calculationManager.factory(type,item);
            if (exist_this_preferential_name(promotion_info_from_one_type.name, preference_info_obj)) {
                get_this_promotion_info_obj(promotion_info_from_one_type.name, preference_info_obj).sum += promotion_info_from_one_type.sum;
            } else {
                preference_info_obj.push(promotion_info_from_one_type);
            }
        });
    }
    this.preference_info_obj = preference_info_obj;
};

Calculator.prototype.calculate = function () {
    this._preference_from_type_discount();
    this._preference_from_type_fullreduce();
};

Calculator.prototype.get_preference_info_obj = function(){
    this.preference_info_obj = _(this.preference_info_obj).filter(function(info_obj){
        return info_obj.sum>0
    });
    return this.preference_info_obj;
};
