/**
 * Created by fyqj on 14-10-31.
 */
function assignzero(array){
    _.each(array,function(array_member){
        array_member.count=0;
    })
}

function separation_barcode(array){
    var array_result;
    array_result = _.map(array,function(array_member){
        if(array_member.length>10){
            var reveive_over,receive_object;
            reveive_over =array_member.split("-",[2]);
            receive_object={
                barcode:reveive_over[0],
                count:reveive_over[1]
            };
            return receive_object
        }
        return array_member;
    });
    return array_result
}

function determine() {
    this.get_emptybox = function() {
        return [];
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
    var purchase_commodity =this.get_emptybox();
    purchase_commodity = _.filter(allitem,function(item){
        if(item.count>0){
            return item;
        }
    });
    return purchase_commodity;
};

determine.prototype.getgift = function(discount_commodity,purchase_commodity){
    var mid_gift,gift_mid_result,gift_result;
    gift_mid_result=[];
    var barcodesarr=discount_commodity[0].barcodes;
    _.each(barcodesarr,function(bar) {
        mid_gift = _.find(purchase_commodity, function (purchase) {

            if (bar == purchase.barcode) {
                return purchase;
            }
        });
        if(typeof (mid_gift)!='undefined'){
            gift_mid_result.push(mid_gift);
        }
    } );
    gift_result = _.map(gift_mid_result,function(mid_result){
        if(mid_result.count>2){
           mid_result.count= Math.floor(mid_result.count/3);
            return mid_result;
        }
    });

};