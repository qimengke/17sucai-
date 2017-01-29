
/*传递进来一个dom对象 ， 添加绑定的事件类型*/
function touch(dom,type,fn){
	//touchstart
	//touchend
	//touchmove
	//touchLeft
	//touchright
	//touchtop
	//touchDown
	//switch case 
	//绑定touch点击事件
	if(type=='tap') {
		dom.addEventListener('touchstart',fn)
	}
	if(type=='left') {
		dom.addEventListener('touchstart',function(e) {
			//console.info(e);
			//获取鼠标触摸的第一次位置
			this.touchstartX = e.touches[0].screenX;
		})
		dom.addEventListener('touchmove',function(e) {
			this.touchendX = e.touches[0].screenX;
		})
		dom.addEventListener('touchend',function(e) {
			//获取当前元素触摸结束后的位置
			if(this.touchstartX-this.touchendX>100) {
				//向左滑动监听事件
				fn();
			}
		})
	}
	if(type=='right') {
		dom.addEventListener('touchstart',function(e) {
			//console.info(e);
			//获取鼠标触摸的第一次位置
			this.touchstartX = e.touches[0].screenX;
		})
		dom.addEventListener('touchmove',function(e) {
			this.touchendX = e.touches[0].screenX;
		})
		dom.addEventListener('touchend',function(e) {
			//获取当前元素触摸结束后的位置
			if(this.touchendX-this.touchstartX>100) {
				//向左滑动监听事件
				fn();
			}
		})
	}
}
