/**
 * Created by wfsovereign on 14-12-31.
 */
function Strategy_factory(){

}

Strategy_factory.prototype.createStrategyA = function(items){
    return Strategy_A(items);
};
Strategy_factory.prototype.createStrategyB = function(items){
    return Strategy_B(items);
};
Strategy_factory.prototype.createStrategyC = function(items){
    return Strategy_C(items);
};
Strategy_factory.prototype.createStrategyD = function(items){
    return Strategy_D(items)

};
Strategy_factory.prototype.select_strategy = function(typeFactory,items){

    return new Strategy_factory.prototype[typeFactory](items)
};

