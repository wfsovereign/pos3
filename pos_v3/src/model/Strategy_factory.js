/**
 * Created by wfsovereign on 14-12-31.
 */
function Strategy_factory(){

}

Strategy_factory.prototype.createStrategyA = function(){
    console.log("A");
};
Strategy_factory.prototype.createStrategyB = function(){
    console.log("B");
};
Strategy_factory.prototype.createStrategyC = function(){
    console.log("C");
};
Strategy_factory.prototype.createStrategyD = function(){
    console.log("D");
};
Strategy_factory.prototype.select_strategy = function(typeFactory){

    return new Strategy_factory.prototype[typeFactory]
};

//var factory = new Strategy_factory();
//factory.select_strategy('createStrategyA');



//var productManager = {};
//
//productManager.createProductA = function () {
//    console.log('ProductA');
//}
//
//productManager.createProductB = function () {
//    console.log('ProductB');
//}
//
//productManager.factory = function (typeType) {
//    return new productManager[typeType];
//}
//
//productManager.factory("createProductA");