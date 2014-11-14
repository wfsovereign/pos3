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
determine.prototype.get_count =function(inputs,allitem){
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
    //console.log(allitem)
};


determine.prototype.get_goods =function(allitem){
    var purchase_commodity =this.get_emptybox();

    purchase_commodity = _.filter(allitem,function(item){
        if(item.count>0){
            return item;
        }
    });
    return purchase_commodity;
};

determine.prototype.assign_preferential_information = function(discount_commodity,purchase_commodity){

    _.each(purchase_commodity,function(purcommodity){
        for(var i=0; i<discount_commodity.length;i++){
            for(var j=0; j<discount_commodity[i].barcodes.length;j++){
                if(purcommodity.barcode == discount_commodity[i].barcodes[j]){
                    purcommodity.preferential_information = discount_commodity[i].type;
                }
            }
        }
    });
    return purchase_commodity;
};

determine.prototype.get_gift = function(discount_commodity,rich_purchase_commodity){
    var gift_result;
    gift_result=[];
    var barcodesarr=discount_commodity[0].barcodes;
    var purchase_commodity_mirror=[];
// 对象传值与引用的关系，数组对象这种赋值，一般都是引用，不论改变哪一个的值，他们两个的值都会改变，因为传值的时候，是赋予新对象一个指针而已
    _.each(rich_purchase_commodity,function(purchase){
        var mirror={};
        mirror.barcode = purchase.barcode;
        mirror.name = purchase.name;
        mirror.price = purchase.price;
        mirror.count = purchase.count;
        mirror.unit = purchase.unit;
        mirror.preferential_information = purchase.preferential_information;
       purchase_commodity_mirror.push(mirror);
    });
    _.each(purchase_commodity_mirror,function(mirror){
            if(mirror.preferential_information =='BUY_TWO_GET_ONE_FREE'){
                mirror.count =Math.floor(mirror.count/3);
                gift_result.push(mirror);
            }
    });
/*
    var rich_purchase_commodity_mirror;
    rich_purchase_commodity_mirror = _.map(purchase_commodity_mirror,function(mirror){
        _.each(barcodesarr,function(bar){
            if(bar ==mirror.barcode){
                mirror.mark ='true';
            }
        });
        return mirror;
    });*/
    //console.log('==========',purchase_commodity_mirror);

    //console.log('++++++',purchase_commodity)
        /*for(var i=0;i<rich_purchase_commodity_mirror.length;i++){
        if(rich_purchase_commodity_mirror[i].mark == 'true'){
            gift_mid_result.push(rich_purchase_commodity_mirror[i])
        }
    }*/

   /* _.each(rich_purchase_commodity_mirror,function(mirror){
        console.log(mirror);
        if(mirror.mark == 'true'){
            gift_mid_result.push(mirror);
        }
    });*/
//    console.log(gift_mid_result)


   /* _.each(barcodesarr,function(bar) {
        mid_gift = _.find(purchase_commodity_mirror, function (mirror) {
            if (bar == mirror.barcode) {
                return mirror;
            }
        });

        if(typeof (mid_gift)!='undefined'){
            gift_mid_result.push(mid_gift);
        }
    } );*/
//    gift_result = _.map(gift_mid_result,function(mid_result){
//        if(mid_result.count>2){
//           mid_result.count= Math.floor(mid_result.count/3);
//            return mid_result;
//        }
//    });
    return gift_result;
};