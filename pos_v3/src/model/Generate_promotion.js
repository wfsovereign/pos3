/**
 * Created by wfsovereign on 14-12-31.
 */
function Generate_promotion(type,name,discount_rate,barcode){
    this.type = type;
    this.name = name;
    this.discount_rate = discount_rate;
    this.barcode = barcode;
}

Generate_promotion.prototype.discount = function(){
  return {
      type: this.type,
      name: this.name,
      discount_rate: this.discount_rate,
      barcode: this.barcode || {}
  }
};

Generate_promotion.prototype.fullreduce = function(){
    return {
        type: this.type,
        name: this.name,
        discount_rate: this.discount_rate,
        barcode: this.barcode || {}
    }
};