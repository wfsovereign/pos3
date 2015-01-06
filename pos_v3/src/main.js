//TODO: Please write code in this file.


function printInventory(inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    //var preferential_info_obj = build_preferential_info_obj_from_receipt_items(receipt_items);
    //var result = build_receipt_result(receipt_items,preferential_info_obj);
    Strategy_A(receipt_items);
    var test= new Calculate(receipt_items);
    var result = build_receipt_result(receipt_items,test.get_preference_info_obj());
    //console.log(test.get_preference_info_obj(),'0000');
    console.log(result);
}


//function Test_prototype(n){
//    this.name = n;
//    console.log("why can't use prototype!!!!");
//    this.what();
//    //console.log(this.name);
//}
//
//Test_prototype.prototype.what = function(){
//    this.name+="  happy every day"
//};
//Test_prototype.prototype.show_name = function(){
//    console.log(this.name);
//};
//
//var name = "FY";
//var test = new Test_prototype(name);
//
//test.show_name();
