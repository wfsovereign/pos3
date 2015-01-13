/**
 * Created by wfsovereign on 15-1-6.
 */

describe("some function of Strategy_B",function(){

    it("should output correct promotion of strategy B",function(){
        var strategy_promotion_of_B=[
            {
                type: 'brand_discount',
                name: '可口可乐品牌打折',
                discount_rate: 0.9,
                barcode: {barcode: ['ITEM000000', 'ITEM000010']},
                special:null
            },
            {
                type: 'single_produce_discount',
                name: '单品打折',
                discount_rate: 0.95,
                barcode: {barcode: ['ITEM000000']},
                special:null
            },
            {
                type: 'all_produce_fullreduce',
                name: '满100减2',
                discount_rate: {top: 100, reduce: 2},
                barcode: {barcode: ['ITEM000005','ITEM000008']},
                special:'康师傅品牌满100减2'
            },
            {
                type: 'all_produce_fullreduce',
                name: '满100减5',
                discount_rate: {top: 100, reduce: 5},
                barcode: {barcode: ['ITEM000003']},
                special:"云山荔枝满100减5"
            }
        ];
        expect(strategy_promotion_of_B).toEqual(get_promotion_B())
    })
});