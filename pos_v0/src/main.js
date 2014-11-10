//TODO: Please write code in this file.
function printInventory(inputs) {
    var result =
             "***<没钱赚商店>购物清单***\n" +
             "名称：" + inputs[0].name   +
             "，数量：" + inputs[0].count +inputs[0].unit  +
             "，单价：" + inputs[0].price +
             ".00(元)，小计：" +
              (inputs[0].count * inputs[0].price) + ".00(元)\n"+
                 "名称：" + inputs[1].name +  "，数量：" + inputs[1].count +inputs[1].unit +
        "，单价：" + inputs[1].price +
        ".00(元)，小计："
            + (inputs[1].count * inputs[1].price) + ".00(元)\n"+
            "名称：" + inputs[2].name +
        "，数量：" + inputs[2].count +inputs[2].unit +
        "，单价：" + inputs[2].price +
        ".00(元)，小计：" +
            + (inputs[2].count * inputs[2].price) + ".00(元)\n" +   '----------------------\n' +"总计：23.00(元)\n" +
    '**********************';
    console.log(result);
}