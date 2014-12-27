//TODO: Please write code in this file.

/*function exist_this_preferential_name(name, preference_info_obj) {
    return _(preference_info_obj).filter(function (info_obj) {
        return info_obj.name == name;
    })[0];
    //return this_info_obj[0];
}
var prefer = [
    {
        name: '可口可乐品牌打折',
        sum: 20
    },
    {
        name:'满100减3',
        sum:30
    }
];

console.log((exist_this_preferential_name('满100减3',prefer)));*/

function printInventory(inputs) {
    var receipt_items = build_receipt_items_from_inputs(inputs);
    var preferential_info_obj = build_preferential_info_obj_from_receipt_items(receipt_items);
    var result = build_receipt_result(receipt_items,preferential_info_obj);

    console.log(result);
}



