/**
 * Created by fyqj on 14-10-31.
 */
function assignzero(array){
    _.each(array,function(member){
        member.count=0;
    })
}
function separation_barcode(array){
    var array_temporary;
    array_temporary = _.map(array,function(member){
        if(member.length>10){
            var reveive_over,receive_object;
            reveive_over =member.split("-",[2]);
            receive_object={
                barcode:reveive_over[0],
                count:reveive_over[1]
            };
            return receive_object
        }
        return member;
    });
    return array_temporary
}
function determine() {
    this.get_box = function() {
        var box = [];
        return box;
    };
    this.getbbox = function() {
        var bbox =[];
        return bbox;
    };
}
determine.prototype.getcount =function(inputs,allitem){
    var reveive_convert_inputs;
    assignzero(allitem);
    reveive_convert_inputs=separation_barcode(inputs);
    _.each(reveive_convert_inputs,function(convert_inputs){
        _.each(allitem,function(item){
            if(typeof (convert_inputs)!="object"){
                if(item.barcode ==convert_inputs){
                    item.count+=1;
                }
            }else{
                if(item.barcode ==convert_inputs.barcode){
                    item.count=convert_inputs.count;
                }
            }
        })
    });
};


determine.prototype.getgoods =function(allitem){
    var purchase_commodity =this.getbbox();
    purchase_commodity = _.filter(allitem,function(item){
        if(item.count>0){
            return item;
        }
    });
    return purchase_commodity;
};
determine.prototype.getgift = function(discount_commodity,purchase_commodity){
    var gift_commodity =this.get_box();
    var discount_commodity_barcode =discount_commodity[0].barcodes;
    _.each(discount_commodity_barcode,function(commodity_barcode){
        _.each(purchase_commodity,function(purchase_commodity_member) {
            if (commodity_barcode == purchase_commodity_member.barcode && purchase_commodity_member.count>2) {
                var obj = {};
                obj.barcode = purchase_commodity_member.barcode;
                obj.name = purchase_commodity_member.name;
                obj.count = 1;//( elem.count >= 2) ? (1) : (0)
                obj.price = purchase_commodity_member.price;
                obj.unit = purchase_commodity_member.unit;
                gift_commodity.push(obj);
            }
        })
    });
    return gift_commodity;
};