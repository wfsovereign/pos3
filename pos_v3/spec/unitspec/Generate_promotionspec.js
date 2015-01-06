/**
 * Created by wfsovereign on 14-12-31.
 */

describe("Generate_promotion",function(){
    it("should output correct text when create object Generate_promotion" +
    "('brand discount','可口可乐品牌打折',0.9,['ITEM000000','ITEM000010'] and use discount function",function(){
        var expectText =  {
            type: "brand discount",
            name: '可口可乐品牌打折',
            discount_rate: 0.9,
            barcode: [
                'ITEM000000',
                'ITEM000010'
            ]
        };
        var promotion = new Generate_promotion("brand discount",'可口可乐品牌打折',0.9,[
            'ITEM000000',
            'ITEM000010'
        ]).discount();
        expect(expectText).toEqual(promotion)
    });

    it("should output correct text when create object Generate_promotion" +
    "'single produce fullreduce','满100减5',{top:100,reduce:5},['ITEM000000','ITEM000001'] and use fullreduce function",
        function(){
        var expectText =  {
            type: 'single produce fullreduce',
            name: '满100减5',
            discount_rate:{
                top:100,
                reduce:5
            },
            barcode: [
                'ITEM000000',
                'ITEM000001'
            ]
        };
        var promotion = new Generate_promotion("single produce fullreduce",'满100减5',{top:100,reduce:5},[
            'ITEM000000',
            'ITEM000001'
        ]).fullreduce();

            expect(expectText).toEqual(promotion)
    });
    it("should output correct text when create object Generate_promotion" +
        "'single produce fullreduce','满100减5',{top:100,reduce:5} and use fullreduce function",
        function(){
            var expectText =  {
                type: 'single produce fullreduce',
                name: '满100减5',
                discount_rate:{
                    top:100,
                    reduce:5
                },
                barcode: {}
            };
            var promotion = new Generate_promotion("single produce fullreduce",'满100减5',
                {top:100,reduce:5}).fullreduce();

            expect(expectText).toEqual(promotion)
        });
});