/**
 * Created by wfsovereign on 14-12-30.
 */

var MenuComponent = function () {
};
MenuComponent.prototype.getName = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.getDescription = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.getPrice = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.isVegetarian = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.print = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.add = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.remove = function () {
    throw new Error("该方法必须重写!");
};
MenuComponent.prototype.getChild = function () {
    throw new Error("该方法必须重写!");
};

var MenuItem = function (sName, sDescription, bVegetarian, nPrice) {
    MenuComponent.apply(this);
    this.sName = sName;
    this.sDescription = sDescription;
    this.bVegetarian = bVegetarian;
    this.nPrice = nPrice;
};
MenuItem.prototype = new MenuComponent();
MenuItem.prototype.getName = function () {
    return this.sName;
};
MenuItem.prototype.getDescription = function () {
    return this.sDescription;
};
MenuItem.prototype.getPrice = function () {
    return this.nPrice;
};
MenuItem.prototype.isVegetarian = function () {
    return this.bVegetarian;
};
MenuItem.prototype.print = function () {
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
};

//category of menu
var Menu = function (sName, sDescription) {
    MenuComponent.apply(this);
    this.aMenuComponents = [];
    this.sName = sName;
    this.sDescription = sDescription;
    this.createIterator = function () {
        throw new Error("This method must be overwritten!");
    };
};
Menu.prototype = new MenuComponent();
Menu.prototype.add = function (oMenuComponent) {
    // 添加子菜品
    this.aMenuComponents.push(oMenuComponent);
};
Menu.prototype.remove = function (oMenuComponent) {
    // 删除子菜品
    var aMenuItems = [];
    var nMenuItem = 0;
    var nLenMenuItems = this.aMenuComponents.length;
    var oItem = null;

    for (; nMenuItem < nLenMenuItems; ) {
        oItem = this.aMenuComponents[nMenuItem];
        if (oItem !== oMenuComponent) {
            aMenuItems.push(oItem);
        }
        nMenuItem = nMenuItem + 1;
    }
    this.aMenuComponents = aMenuItems;
};
Menu.prototype.getChild = function (nIndex) {
    //获取指定的子菜品
    return this.aMenuComponents[nIndex];
};
Menu.prototype.getName = function () {
    return this.sName;
};
Menu.prototype.getDescription = function () {
    return this.sDescription;
};
Menu.prototype.print = function () {
    // 打印当前菜品以及所有的子菜品
    console.log(this.getName() + ": " + this.getDescription());
    console.log("--------------------------------------------");

    var nMenuComponent = 0;
    var nLenMenuComponents = this.aMenuComponents.length;
    var oMenuComponent = null;

    for (; nMenuComponent < nLenMenuComponents; ) {
        oMenuComponent = this.aMenuComponents[nMenuComponent];
        oMenuComponent.print();
        nMenuComponent = nMenuComponent + 1;
    }
};
var DinnerMenu = function () {
    Menu.apply(this);
};
DinnerMenu.prototype = new Menu();

var CafeMenu = function () {
    Menu.apply(this);
};
CafeMenu.prototype = new Menu();

var PancakeHouseMenu = function () {
    Menu.apply(this);
};
PancakeHouseMenu.prototype = new Menu();


var Mattress = function (aMenus) {
    this.aMenus = aMenus;
};
Mattress.prototype.printMenu = function () {
    this.aMenus.print();
};
var oPanCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
var oDinnerMenu = new Menu("Dinner Menu", "Lunch");
var oCoffeeMenu = new Menu("Cafe Menu", "Dinner");
var oAllMenus = new Menu("ALL MENUS", "All menus combined");

oAllMenus.add(oPanCakeHouseMenu);
oAllMenus.add(oDinnerMenu);

oDinnerMenu.add(new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
oDinnerMenu.add(oCoffeeMenu);
oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));
oCoffeeMenu.add(new MenuItem("fruit", "taste fruits", true, 0.99));

var oMattress = new Mattress(oAllMenus);
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
