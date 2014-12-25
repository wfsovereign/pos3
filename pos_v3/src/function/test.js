/**
 * Created by wfsovereign on 14-12-25.
 */

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
//console.log(group,"___________");
var result = _(inputs).map(function(obj) {
    //for (attribute in obj){}
    ////console.log(attribute);
    //return {
    //    barcode:attribute,
    //    count:obj[attribute]
    //};

    console.log(_.values(obj));
    var barcode =  _.keys(obj)[0];
    var count = _.values(obj)[0];
    return{
        barcode:barcode,
        count: count
    };
   // console.log(_.values(obj))
});


console.log(result);