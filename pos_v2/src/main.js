//TODO: Please write code in this file.
function printInventory (inputs,formattedDateString ) {
    var allitem = loadAllItems();
    var discount_commodity = loadPromotions();
    var gift_commodity, purchase_commodity,rich_purchase_commodity;
    var item = new determine();
    item.get_count(inputs, allitem);
    purchase_commodity = item.get_goods(allitem);
    rich_purchase_commodity = item.assign_preferential_information(discount_commodity,purchase_commodity);
    gift_commodity = item.get_gift(discount_commodity, rich_purchase_commodity);
    var out=new prints(gift_commodity, rich_purchase_commodity);
}