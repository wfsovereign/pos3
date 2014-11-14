//TODO: Please write code in this file.
function  printInventory(inputs) {
    var allitem = loadAllItems();
    var pro = loadPromotions();
    var box, bbox;
    var item = new determine();
    item.getdeter(inputs, allitem);
    bbox = item.get_goods(allitem);
    box = item.getgift(pro, bbox);
    prints(box, bbox);
}




