/**
 * Created by 007 on 2017/3/31.
 */

(function($){

    //直接给Jquery 添加全局方法
    /*$.sum = function () {
        var init = 0;
        Array.prototype.forEach.call(arguments, function(e, i, a){
            init += e;
        });
        return init;
    }*/

    //直接将其他对象合并到 $ 本身
    $.extend($,{
        sum: function(){
            var init = 0;
            Array.prototype.forEach.call(arguments, function(e){
                init += e;
            });
            return init;
        },
        mul: function(){
            var init = 1;
            Array.prototype.forEach.call(arguments, function(e){
                init *= e;
            });
            return init;
        }
    });

})(jQuery);
