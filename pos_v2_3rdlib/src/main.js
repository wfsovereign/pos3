//TODO: Please write code in this file.
function printInventory(inputs) {
    var allitem = loadAllItems();
    var pro = loadPromotions();
    //var rel =pro[0].barcodes;

    var box, bbox;
    var item = new determine();
    item.getdeter(inputs, allitem);
    bbox = item.getgoods(allitem);
    box = item.getgift(pro, bbox);
    prints(box, bbox);
}

