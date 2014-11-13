/**
 * Created by fyqj on 14-10-31.
 */
function assignzero(array){
    _.each(array,function(arr){
        arr.count=0;
    })
}
function separation_barcode(array){
    var tempar;
    tempar = _.map(array,function(arr){
        if(arr.length>10){
            var tempary,tem;
            tempary =arr.split("-",[2]);
            tem={
                barcode:tempary[0],
                count:tempary[1]
            };
            return tem
        }
        return arr;
    });
    return tempar
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
    var tempar;
    assignzero(allitem);
    tempar=separation_barcode(inputs);
    _.each(tempar,function(tem){
        _.each(allitem,function(temp){
            if(typeof (tem)!="object"){
                if(temp.barcode ==tem){
                    temp.count+=1;
                }
            }else{
                if(temp.barcode ==tem.barcode){
                    temp.count=tem.count;
                }
            }
        })
    });
};


determine.prototype.getgoods =function(allitem){
    var bbox =this.getbbox();
    bbox = _.filter(allitem,function(item){
        if(item.count>0){
            return item;
        }
    });
    return bbox;
};
determine.prototype.getgift = function(pro,bbox){
    var box =this.get_box();
    var rel =pro[0].barcodes;
    _.each(rel,function(b){
        _.each(bbox,function(elem) {
            if (b == elem.barcode && elem.count>2) {
                var obj = {};
                obj.barcode = elem.barcode;
                obj.name = elem.name;
                obj.count = 1;//( elem.count >= 2) ? (1) : (0)
                obj.price = elem.price;
                obj.unit = elem.unit;
                box.push(obj);
            }
        })
    });
    return box;
};