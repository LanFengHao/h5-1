   /*
    功能：将一个dom对象移动到指定位置
    @obj, 要移动的元素对象
    @target, 最终的位置
    */
	function easeIn(obj, target){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
            var speed = (target - obj.offsetTop ) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			obj.style.top = obj.offsetTop  + speed + "px";
			console.log(obj.style.top);
			if (target == obj.offsetTop){
				obj.style.top = target +  "px";
				clearInterval(obj.timer);
				return;
			}
		}, 10);
	}
