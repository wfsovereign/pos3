/**
 * Created by wfsovereign on 14-12-25.
 */

/*
 var inputs = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000003' : 12 }
];
var input = [
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000002',
    'ITEM000003',
    'ITEM000004',
    'ITEM000003',
    'ITEM000000'
];

var group = _(input).groupBy(function(inp) {
    return inp;
});

*/


//var Singleton = (function () {
//    var instantiated;
//    function init() {
//        /*这里定义单例代码*/
//        return {
//            publicMethod: function () {
//                console.log('hello world');
//            },
//            publicProperty: 'test'
//        };
//    }
//
//    return {
//        getInstance: function () {
//            if (!instantiated) {
//                instantiated = init();
//            }
//            return instantiated;
//        }
//    };
//})();
/*

*/
/*调用公有的方法来获取实例:*//*

var SingletonTester = (function () {

    //参数：传递给单例的一个参数集合
    function Singleton(args) {

        //设置args变量为接收的参数或者为空（如果没有提供的话）
        var args = args || {};
        //设置name参数
        this.name = 'SingletonTester';
        //设置pointX的值
        this.pointX = args.pointX || 6; //从接收的参数里获取，或者设置为默认值
        //设置pointY的值
        this.pointY = args.pointY || 10;

    }

    //实例容器
    var instance;
    var _static;
    _static = {
        name: 'SingletonTester',
        //获取实例的方法
        //返回Singleton的实例
        getInstance: function (args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({ pointX: 5 });
console.log(singletonTest); // 输出

function Universe() {

    // 判断是否存在实例
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }

    // 其它内容
    this.start_time = 0;
    this.bang = "Big";

    // 缓存
    Universe.instance = this;

    // 隐式返回this
}

// 测试
var uni = new Universe();
var uni2 = new Universe();
console.log(uni);
console.log(uni2);
console.log(uni === uni2); // true

function testso(){
    var str = this;
    console.log("1244");
    return  str
}
var te1 = new testso();
var tes = new testso();
console.log(te1 === tes);




*/
//装饰者提供比继承更有弹性的替代方案。 装饰者用用于包装同接口的对象，不仅允许你向方法添加行为，而且还可以将方法设置成原始对象调用（例如装饰者的构造函数）。

//装饰者用于通过重载方法的形式添加新功能，该模式可以在被装饰者前面或者后面加上自己的行为以达到特定的目的。

/*

function ConcreteClass() {
    this.performTask = function () {
        console.log('doing something');
};
}

function AbstractDecorator(decorated) {
    AbstractDecorator.performTask = function () {
        decorated.performTask();
    };
}

function ConcreteDecoratorClass(decorated) {
    ConcreteDecoratorClass.prototype = new AbstractDecorator(decorated);
    ConcreteDecoratorClass.preTask = function () {
        this.performTask();

    };

    ConcreteDecoratorClass.postTask = function () {
        console.log('post-calling..');
    };

}

var concrete = new ConcreteClass();
var decorator1 = new ConcreteDecoratorClass(concrete);
//var decorator2 = new ConcreteDecoratorClass(decorator1);
decorator1.performTask();
*/


//function test_that(){
//    if(1){
//        var a =5;
//        console.log('2');
//        return true
//    }
//    console.log('1');
//    return false
//}
//test_that();
