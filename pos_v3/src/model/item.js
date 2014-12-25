/**
 * Created by wfsovereign on 14-12-25.
 */
function Item(barcode, name, unit, price,brand) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.brand = brand || null;
}