/**
 * Created by wfsovereign on 15-1-6.
 */
function get_promotion_B() {
    var promotion_B = [];
    promotion_B.push(
        new Generate_promotion('brand discount', '可口可乐品牌打折', 0.9, {barcode: ['ITEM000000', 'ITEM000010']}).discount());
    promotion_B.push(
        new Generate_promotion('single produce discount', '单品打折', 0.95, {barcode: ['ITEM000000']}).discount());
    promotion_B.push(
        new Generate_promotion(
            'all produce fullreduce', '满100减2',
            {top: 100, reduce: 2}, {barcode:['ITEM000005','ITEM000008']}).fullreduce()
    );
    promotion_B.push(
        new Generate_promotion(
            'all produce fullreduce', '满100减5',
            {top: 100, reduce: 5}, {barcode:['ITEM000003']}).fullreduce()
    );
    return promotion_B;
}



function StrategyB(){
    var regulation_of_strategy_B = get_promotion_B();
    console.log(regulation_of_strategy_B,"B");
}
StrategyB();