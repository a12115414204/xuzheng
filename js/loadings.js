$(function(){
	var resizeEvent =  'orientationchange' in window ? 'orientationchang' :'resize';
	var rescale =function(){
		var deviceWidth = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
	};
		rescale();
		window.addEventListener(resizeEvent,rescale,false);
		document.addEventListener('DOMContentLoaded',rescale,false);
	//由于图片原因  需要获取当前屏幕高度来赋值给图片
	var heights=$(document).height();
	$(".loading").height(heights);
	//图片预加载
	var n = 0;
	var xuzhengarray = [
		"img/chuangguan/diyiguan/diyiguan.png"
	];
	for (var i = 0;i < xuzhengarray.length;i++) {
		var img = new Image();
		img.onload = function(){
			n++;
			if (n == xuzhengarray.length) {
				
			}
		};
		img.src = xuzhengarray[i];
	}
	//徐老师删除,后台徐峥游戏开始
	var xulaoshiremove = function(){
		$(".loading").remove();	
	};
});

	