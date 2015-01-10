/**
 * Created by wfsovereign on 14-12-31.
 */


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

function exist_all_discount(preference_info_obj) {
    return _(preference_info_obj).some(function(info_obj){
        return info_obj.type == "all_produce_discount"
    })
}

var calculationManager = {};
calculationManager.single_produce_discount = function(type,item){
    return {
        name: item.name+type.name,
        sum: parseFloat(parseFloat((item.subtotal*(1-type.discount_rate)).toFixed(1)).toFixed(2))
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
        discount_rate:type.discount_rate,
        type:type.type
    }
};
calculationManager.brand_discount = function(type,item){
    return {
        name: type.name,
        sum: parseFloat(parseFloat((item.subtotal * (1-type.discount_rate)).toFixed(1)).toFixed(2))
    }
};
calculationManager.factory = function(type,item){
    if(type.special){
        return new calculationManager["create_special"](type,item)
    }else if(typeof (type.discount_rate) == "object"){
        return new calculationManager["create_fullreduce"](type,item)
    } else {

        return new calculationManager[type.type](type,item)
    }
};



function exist_brand_and_all_fullreduce(full_reduce_obj) {
    var exist_brand_fullreduce = _(full_reduce_obj).some(function (obj) {
        return obj.type == "brand_produce_fullreduce"
    });
    var exist_all_fullreduce = _(full_reduce_obj).some(function (obj) {
        return obj.type == "all_produce_fullreduce"
    });
    return exist_brand_fullreduce && exist_all_fullreduce;
}


function Calculator(items){
    this.items = items;
    this.preference_info_obj=[];

}


Calculator.prototype._preference_from_type_fullreduce = function(){
    if(exist_brand_and_all_fullreduce(this.preference_info_obj)){
        var brand_fullreduce_sum = 0;
        _(this.preference_info_obj).each(function(info_obj){
            if(info_obj.type == "brand_produce_fullreduce"){
                info_obj.sum = Math.floor(info_obj.sum/info_obj.discount_rate.top)*info_obj.discount_rate.reduce;
                brand_fullreduce_sum += info_obj.sum;
            }else if(info_obj.type != "all_produce_fullreduce"){

                brand_fullreduce_sum += info_obj.sum;
            }
        });
        _(this.preference_info_obj).each(function(info_obj){
            if(info_obj.type == "all_produce_fullreduce"){
                info_obj.sum = Math.floor((info_obj.sum-brand_fullreduce_sum)/info_obj.discount_rate.top)*info_obj.discount_rate.reduce;
            }
        });
    }else if(exist_all_discount(this.preference_info_obj)){
        var all_preference_sum = 0;
        _(this.preference_info_obj).each(function(info_obj){
            if(typeof (info_obj.discount_rate) == 'object'){
                info_obj.sum = Math.floor(info_obj.sum/info_obj.discount_rate.top)*info_obj.discount_rate.reduce;
            }
            all_preference_sum += info_obj.sum;
        });
        _(this.preference_info_obj).each(function(info_obj){
            if(info_obj.type == "all_produce_discount"){
                info_obj.sum = ((info_obj.sum*2)-all_preference_sum)*(1-info_obj.discount_rate);
            }
        });
    }else {
        _(this.preference_info_obj).each(function(info_obj){
            if(typeof (info_obj.discount_rate) == 'object'){
                info_obj.sum = Math.floor(info_obj.sum/info_obj.discount_rate.top)*info_obj.discount_rate.reduce;
            }
        });
    }
};

Calculator.prototype._first_single_then_brand = function(){
    var preference_info_obj = [];
    function get_preference_info_obj_from_array_type(item, preference_info_obj) {
            if(item.type.length>2) {
                var item_sub = item.subtotal;
                var single_type = _(item.type).findWhere({type: "single_produce_discount"});
                var single_info_from_one_type = calculationManager.factory(single_type, item);
                item.subtotal =item_sub - single_info_from_one_type.sum;
                add_one_preference_info_info(single_info_from_one_type, preference_info_obj);
                var brand_type = _(item.type).findWhere({type: "brand_discount"});
                var brand_info_from_one_type = calculationManager.factory(brand_type, item);
                add_one_preference_info_info(brand_info_from_one_type, preference_info_obj);
                var all_fullreduce_type = _(item.type).findWhere({type: "all_produce_fullreduce"});
                var all_fullreduce_info_from_one_type = calculationManager.factory(all_fullreduce_type, item);
                add_one_preference_info_info(all_fullreduce_info_from_one_type,preference_info_obj);
            }else{
                _(item.type).each(function (type) {
                    var promotion_info_from_one_type = calculationManager.factory(type,item);
                    add_one_preference_info_info(promotion_info_from_one_type, preference_info_obj);
                });
            }
    }
    _(this.items).each(function(item){
        get_preference_info_obj_from_array_type(item,preference_info_obj);
    });
    this.preference_info_obj = preference_info_obj;
};


function add_one_preference_info_info(promotion_info_from_one_type, preference_info_obj) {
    if (exist_this_preferential_name(promotion_info_from_one_type.name, preference_info_obj)) {
        get_this_promotion_info_obj(promotion_info_from_one_type.name, preference_info_obj).sum += promotion_info_from_one_type.sum;
    } else {
        preference_info_obj.push(promotion_info_from_one_type);
    }
}
Calculator.prototype._preference_from_type_discount = function(){
    var preference_info_obj=[];
    _(this.items).each(function(item){
             get_preference_info_obj(item,preference_info_obj)
    });
    function get_preference_info_obj(item,preference_info_obj) {
        _(item.type).each(function (type) {
            var promotion_info_from_one_type = calculationManager.factory(type,item);
            add_one_preference_info_info(promotion_info_from_one_type, preference_info_obj);
        });
    }
    this.preference_info_obj = preference_info_obj;
};

Calculator.prototype.calculate_base = function(){
    this._first_single_then_brand();
    this._preference_from_type_fullreduce()
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
