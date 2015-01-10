/**
 * Created by wfsovereign on 15-1-8.
 */
describe("strategy_C",function(){

    it("should output correct promotion of strategy C use get_promotion_C function",function(){
        //spyOn(console, 'log');
        var strategy_C_promotion =[
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
                type: 'brand_produce_fullreduce',
                name: '满100减2',
                discount_rate:{
                    top:100,
                    reduce:2
                },
                barcode: {
                    barcode:[
                        'ITEM000005',
                        'ITEM000008'
                    ]
                },
                special:"康师傅品牌满100减2"

            },
            {
                type: 'all_produce_fullreduce',
                name: '满100减5',
                discount_rate:{
                    top:100,
                    reduce:5
                },
                barcode:{
                    barcode:'all',
                    besides_barcode:['ITEM000002']
                },
                special:'满100减5'

            }
        ];
        expect(strategy_C_promotion).toEqual(get_promotion_C());
    });



});