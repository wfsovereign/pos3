//TODO: Please write code in this file.
function printInventory (inputs,formattedDateString ) {
    var allitem = loadAllItems();
    var pro = loadPromotions();
    var giftbox, goodsbox;
    var item = new determine();
    item.getcount(inputs, allitem);
    goodsbox = item.getgoods(allitem);
    giftbox = item.getgift(pro, goodsbox);
    var out=new prints(giftbox, goodsbox);

}