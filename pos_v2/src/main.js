//TODO: Please write code in this file.
function printInventory (inputs,formattedDateString ) {
    var allitem = loadAllItems();
    var discount_commodity = loadPromotions();
    var gift_commodity, purchase_commodity;
    var item = new determine();
    item.getcount(inputs, allitem);
    purchase_commodity = item.getgoods(allitem);
    gift_commodity = item.getgift(discount_commodity, purchase_commodity);
    //var out=new prints(gift_commodity, purchase_commodity);

}