//TODO: Please write code in this file.
function printInventory (inputs,formattedDateString ) {
    var allitem = loadAllItems();
    var pro = loadPromotions();
    var box, bbox;
    var item = new determine();
    item.getdeter(inputs, allitem);
    bbox = item.getgoods(allitem);
    box = item.getgift(pro, bbox);
    var out=new prints(box, bbox);
    out.printout();
}