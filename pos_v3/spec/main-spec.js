describe('pos_strategyA of the mianspec', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();
        inputs = [
            { 'ITEM000000' : 20 },
            { 'ITEM000010' : 20 },
            { 'ITEM000005' : 30 },
            { 'ITEM000003' : 12 }
        ];
    });

    it('should print correct text', function () {
        spyOn(console, 'log');
        printInventory(inputs);
        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
            '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
            '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
            '名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n' +
            '----------------------\n' +
            '优惠信息：\n' +
            '名称：可口可乐品牌打折，金额：14.00元\n' +
            '名称：满100减3，金额：3.00元\n' +
            '----------------------\n' +
            '总计：438.00(元)\n' +
            '节省：17.00(元)\n' +
            '**********************';
          expect(console.log).toHaveBeenCalledWith(expectText);
    });

});

describe("strategy_B of the mianspec",function(){

    var inputs;
    beforeEach(function () {

        inputs = [
            { 'ITEM000000' : 20 },
            { 'ITEM000010' : 20 },
            { 'ITEM000005' : 30 },
            { 'ITEM000008' : 25 },
            { 'ITEM000003' : 8  },
            { 'ITEM000002' : 14 }
        ];
    });

    it("should output correct promotion of strategy_B",function(){
        spyOn(console, 'log');
        printInventoryB(inputs);
        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
            '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
            '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
            '名称：康师傅冰红茶，数量：25瓶，单价：3.00(元)，小计：75.00(元)\n' +
            '名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)\n' +
            '名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)\n' +
            '----------------------\n' +
            '优惠信息：\n' +
            '名称：可口可乐350ml单品打折，金额：3.00元\n' +
            '名称：可口可乐品牌打折，金额：8.00元\n' +
            '名称：康师傅品牌满100减2，金额：4.00元\n' +
            '名称：云山荔枝满100减5，金额：5.00元\n' +
            '----------------------\n' +
            '总计：527.00(元)\n' +
            '节省：20.00(元)\n' +
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText)
    })
});



describe("strategy_C of the mianspec",function(){

    var inputs;
    beforeEach(function () {

        inputs = [
            { 'ITEM000000' : 20 },
            { 'ITEM000010' : 30 },
            { 'ITEM000005' : 30 },
            { 'ITEM000008' : 25 },
            { 'ITEM000003' : 8  },
            { 'ITEM000002' : 14 }
        ];
    });

    it("should output correct promotion of strategy_C",function(){
        spyOn(console, 'log');
        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
            '名称：可口可乐550ml，数量：30瓶，单价：4.00(元)，小计：120.00(元)\n' +
            '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
            '名称：康师傅冰红茶，数量：25瓶，单价：3.00(元)，小计：75.00(元)\n' +
            '名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)\n' +
            '名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)\n' +
            '----------------------\n' +
            '优惠信息：\n' +
            '名称：可口可乐350ml单品打折，金额：3.00元\n' +
            '名称：可口可乐品牌打折，金额：17.70元\n' +
            '名称：满100减5，金额：20.00元\n' +
            '名称：康师傅品牌满100减2，金额：4.00元\n' +
            '----------------------\n' +
            '总计：542.30(元)\n' +
            '节省：44.70(元)\n' +
            '**********************';
        printInventoryC(inputs);
        expect(console.log).toHaveBeenCalledWith(expectText)
    })
});

describe("strategy_D of the mianspec",function(){

    var inputs;
    beforeEach(function () {

        inputs = [
            { 'ITEM000000' : 20 },
            { 'ITEM000010' : 30 },
            { 'ITEM000001' : 30 },
            { 'ITEM000007' : 40 },
            { 'ITEM000003' : 8  },
            { 'ITEM000002' : 14 }
        ];
    });

    it("should output correct promotion of strategy_D",function(){
        spyOn(console, 'log');
        printInventoryD(inputs);
        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
            '名称：可口可乐550ml，数量：30瓶，单价：4.00(元)，小计：120.00(元)\n' +
            '名称：雪碧，数量：30瓶，单价：3.00(元)，小计：90.00(元)\n' +
            '名称：果粒橙，数量：40瓶，单价：3.50(元)，小计：140.00(元)\n' +
            '名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)\n' +
            '名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)\n' +
            '----------------------\n' +
            '优惠信息：\n' +
            '名称：可口可乐品牌打折，金额：18.00元\n' +
            '名称：可口可乐350ml单品打折，金额：3.00元\n' +
            '名称：九折，金额：48.90元\n' +
            '名称：果粒橙满100减5，金额：5.00元\n' +
            '名称：云山品牌满100减2，金额：2.00元\n' +
            '----------------------\n' +
            '总计：530.10(元)\n' +
            '节省：76.90(元)\n' +
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText)
    })
});