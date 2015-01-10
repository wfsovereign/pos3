/**
 * Created by wfsovereign on 15-1-10.
 */
describe("strategy_D",function(){

    it("should output correct promotion of strategy D use get_promotion_D function",function(){
        //spyOn(console, 'log');
        var strategy_D_promotion =[
            {
                type: 'brand_discount',
                name: "可口可乐品牌打折",
                discount_rate: 0.9,
                barcode:{
                    barcode: [
                        'ITEM000000',
                        'ITEM000010'
                    ]
                },
                special:null
            },
            {
                type: 'single_produce_discount',
                name:"单品打折",
                discount_rate: 0.95,
                barcode:{
                    barcode: [
                        'ITEM000000'
                    ]
                },
                special:null

            },
            {
                type: 'single_produce_fullreduce',
                name: '满100减5',
                discount_rate:{
                    top:100,
                    reduce:5
                },
                barcode: {
                    barcode:[
                        'ITEM000007'
                    ]
                },
                special:"果粒橙满100减5"

            },
            {
                type: 'brand_produce_fullreduce',
                name: '满100减2',
                discount_rate:{
                    top:100,
                    reduce:2
                },
                barcode: {
                    barcode:[
                        'ITEM000002',
                        'ITEM000003'
                    ]
                },
                special:"云山品牌满100减2"

            },
            {
                type: 'all_produce_discount',
                name: '九折',
                discount_rate:0.9,
                barcode:{
                    barcode:'all',
                    besides_barcode:['ITEM000001']
                },
                special:'九折'

            }
        ];
        expect(strategy_D_promotion).toEqual(get_promotion_D());
    });



});