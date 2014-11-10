/**
 * Created by fyqj on 14-11-1.
 */
function determine (){

}
determine.prototype.getbbox =function(inp,all){
    _.each(all,function(item){
        var count =0;
        _.each(inp,function(input){
            if (input == item.barcode){
                count++;
            }
        });
        item.count =count;
    });
    var a=[];
    _.each(all,function(item)
    {
        if (item.count != 0){
            a.push(item);
        }
    });
    return a
};